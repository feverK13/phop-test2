import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EASE } from '@/app/lib/motion'

const serviceFromParam: Record<string, string> = {
  landing: 'Лендінг',
  corporate: 'Корпоративний сайт',
  product: 'Цифровий продукт',
}

const serviceOptions = ['Лендінг', 'Корпоративний сайт', 'Цифровий продукт', 'Інше']
const budgetOptions = ['до 20к', '20–50к', '50–100к', '100к+', 'обговоримо']

const details = [
  { k: 'Email', v: 'hello@kurd.studio' },
  { k: 'Телефон', v: '+380 XX XXX XX XX' },
  { k: 'Локація', v: 'Хмельницький, UA' },
  { k: 'Години', v: 'ПН–ПТ, 10:00 — 19:00' },
]

const fieldClass =
  'w-full rounded-none border border-nude bg-bg/40 px-4 py-3 font-body text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-burgundy focus:ring-1 focus:ring-burgundy'
const labelClass = 'mb-2 block font-mono text-caption uppercase tracking-wider text-ink/55'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const reduce = useReducedMotion()
  const [params] = useSearchParams()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    service: serviceFromParam[params.get('service') ?? ''] ?? '',
    budget: '',
    message: '',
  })

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="px-6 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-20"
      >
        {/* Left */}
        <div>
          <h1
            className="font-display font-black leading-[0.95] tracking-tight text-ink"
            style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
          >
            Напишіть
          </h1>
          <p className="mt-6 max-w-md text-[1.125rem] leading-relaxed text-ink/70">
            Відповідаю протягом 24 годин. Краще одразу описати задачу — це економить час нам обом.
          </p>

          <dl className="mt-12 space-y-5">
            {details.map((d) => (
              <div key={d.k} className="flex flex-col gap-1 border-t border-nude pt-4">
                <dt className="font-mono text-caption uppercase tracking-wider text-ink/45">
                  {d.k}
                </dt>
                <dd className="font-mono text-[0.9375rem] text-burgundy">{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — form / success */}
        <div>
          {status === 'success' ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex h-full flex-col justify-center border-t border-nude pt-10"
            >
              <p
                className="font-display leading-tight tracking-tight text-burgundy"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)' }}
              >
                Дякую. Я зв'яжуся з вами найближчим часом.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="from_name" className={labelClass}>
                  Ім'я
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  value={form.from_name}
                  onChange={set('from_name')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="from_email" className={labelClass}>
                  Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  value={form.from_email}
                  onChange={set('from_email')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>
                  Послуга
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={set('service')}
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Оберіть послугу
                    </option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-burgundy"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className={labelClass}>
                  Бюджет
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={set('budget')}
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Оберіть діапазон
                    </option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-burgundy"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Розкажіть про проект
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={set('message')}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full justify-center rounded-full bg-burgundy px-7 py-3.5 font-body text-[0.9375rem] tracking-wide text-bg transition-colors hover:bg-burgundy-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Надсилаю…' : 'Надіслати'}
              </button>

              {status === 'error' && (
                <p className="font-body text-[0.9375rem] text-red-700">
                  Не вдалося надіслати. Напишіть напряму:{' '}
                  <a href="mailto:hello@kurd.studio" className="underline underline-offset-4">
                    hello@kurd.studio
                  </a>
                </p>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}

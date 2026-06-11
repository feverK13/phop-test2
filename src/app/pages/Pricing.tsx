import { Link } from 'react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/app/lib/motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion'

const tiers = [
  {
    name: 'Лендінг',
    price: '₴18 000 — ₴35 000',
    service: 'landing',
    highlighted: false,
    features: ['1 сторінка', 'До 8 секцій', 'Адаптив', '2 раунди правок', 'Термін: 10–14 днів'],
  },
  {
    name: 'Корпоративний сайт',
    price: '₴45 000 — ₴90 000',
    service: 'corporate',
    highlighted: true,
    features: [
      'До 6 сторінок',
      'Прототип + дизайн',
      'Дизайн-система',
      '3 раунди правок',
      'Термін: 3–5 тижнів',
    ],
  },
  {
    name: 'Цифровий продукт (SaaS / app)',
    price: 'від ₴80 000',
    service: 'product',
    highlighted: false,
    features: [
      'Дослідження',
      'User flows + wireframes',
      'Hi-fi прототип',
      'Дизайн-система',
      'Термін: за домовленістю',
    ],
  },
]

const faq = [
  {
    q: 'Що входить у вартість?',
    a: 'У вартість входить весь дизайн-процес: аналіз, структура, макет і узгоджена кількість правок. Розробку, хостинг і копірайтинг рахую окремо — щоб ви бачили, за що саме платите.',
  },
  {
    q: 'Як виглядає процес роботи?',
    a: 'Спочатку ми обговорюємо задачу і я готую пропозицію з обсягом та термінами. Далі — структура, дизайн і правки за етапами. Ви бачите прогрес на кожному кроці, без сюрпризів у кінці.',
  },
  {
    q: 'Які потрібні матеріали від мене?',
    a: 'Мінімум — опис бізнесу, приклади того, що вам подобається, і тексти, якщо вони вже є. Якщо контенту немає, підкажу, як його підготувати, або порекомендую копірайтера.',
  },
  {
    q: 'Чи можна змінити пакет в процесі?',
    a: 'Так. Якщо стає зрозуміло, що потрібен більший обсяг, ми перераховуємо вартість за фактичними задачами. Нічого не роблю без вашого погодження.',
  },
]

export function Pricing() {
  const reduce = useReducedMotion()

  return (
    <>
      {/* Hero strip */}
      <section className="px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl"
        >
          <h1
            className="font-display font-black leading-[0.9] tracking-tight text-burgundy"
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
          >
            Ціни
          </h1>
          <p className="mt-6 max-w-xl text-body-l text-ink/70">Прозоро, без прихованих сум</p>
        </motion.div>
      </section>

      {/* Tiers */}
      <section className="border-t border-nude px-6 py-16 md:px-12 md:py-20">
        <motion.div
          variants={stagger(reduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.service}
              variants={fadeUp(reduce)}
              className={
                t.highlighted
                  ? 'flex flex-col bg-burgundy p-8 text-bg md:p-10'
                  : 'flex flex-col bg-nude p-8 text-ink md:p-10'
              }
            >
              <h2 className="font-display text-2xl leading-tight tracking-tight md:text-[1.75rem]">
                {t.name}
              </h2>
              <p
                className={
                  t.highlighted
                    ? 'mt-6 font-mono text-2xl text-bg md:text-[1.625rem]'
                    : 'mt-6 font-mono text-2xl text-burgundy md:text-[1.625rem]'
                }
              >
                {t.price}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={
                      t.highlighted
                        ? 'flex items-baseline gap-3 font-mono text-[0.8125rem] text-bg/85'
                        : 'flex items-baseline gap-3 font-mono text-[0.8125rem] text-ink/70'
                    }
                  >
                    <span className={t.highlighted ? 'text-bg/60' : 'text-burgundy'}>▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?service=${t.service}`}
                className={
                  t.highlighted
                    ? 'mt-10 inline-flex justify-center rounded-full bg-bg px-7 py-3 font-body text-[0.9375rem] tracking-wide text-burgundy transition-colors hover:bg-nude'
                    : 'mt-10 inline-flex justify-center rounded-full bg-burgundy px-7 py-3 font-body text-[0.9375rem] tracking-wide text-bg transition-colors hover:bg-burgundy-dark'
                }
              >
                Замовити
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="border-t border-nude px-6 py-24 md:px-12 md:py-32">
        <motion.div
          variants={stagger(reduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-3xl"
        >
          <motion.p
            variants={fadeUp(reduce)}
            className="font-mono text-caption uppercase tracking-wider text-burgundy"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp(reduce)}
            className="mt-5 font-display leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Часті питання
          </motion.h2>

          <motion.div variants={fadeUp(reduce)} className="mt-10">
            <Accordion type="single" collapsible className="border-t border-nude">
              {faq.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

import { Link } from 'react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/app/lib/motion'

const sections = [
  {
    n: '01',
    title: 'Веб-дизайн',
    description:
      'Створюю сайти, які мають продавати, а не просто красиво виглядати. Розпочинаю з аналізу вашої аудиторії і конкурентів, складаю структуру, потім малюю макет. Результат — макет у Figma з усіма станами, готовий до передачі розробнику.',
    deliverables: [
      'Аналіз і структура',
      'Прототип',
      'Дизайн-макет (Figma)',
      'Адаптивність mobile/tablet/desktop',
      'Анімаційні референси',
      'Передача розробнику',
    ],
  },
  {
    n: '02',
    title: 'UI/UX дизайн',
    description:
      'Проєктую інтерфейси для додатків і SaaS-продуктів. Починаю з дослідження: хто користувач, які в нього задачі, де він застрягає. Далі — user flows, wireframes і клікабельний прототип, який можна протестувати ще до розробки. Завершую дизайн-системою, щоб продукт залишався цілісним, коли зростатиме.',
    deliverables: [
      'Дослідження користувачів',
      'User flows',
      'Wireframes',
      'Hi-fi прототип',
      'Дизайн-система',
      'Передача розробнику',
    ],
  },
  {
    n: '03',
    title: 'Бренд та айдентика',
    description:
      'Будую візуальну ідентичність як систему, а не набір випадкових елементів. Розробляю логотип, обираю кольори й типографіку, фіксую правила використання. У результаті ви отримуєте айдентику, яка працює однаково чітко на сайті, у презентації та в соцмережах.',
    deliverables: [
      'Логотип',
      'Колірна система',
      'Типографіка',
      'Гайдлайни',
      'Брендові ассети',
    ],
  },
]

export function Services() {
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
            Послуги
          </h1>
          <p className="mt-6 max-w-xl text-body-l text-ink/70">Що я роблю і як це працює</p>
        </motion.div>
      </section>

      {/* Deep sections — alternating text/detail, full-width nude rule between */}
      {sections.map((s, i) => {
        const reversed = i % 2 === 1
        return (
          <section
            key={s.n}
            className="border-t border-nude px-6 py-20 md:px-12 md:py-28"
          >
            <motion.div
              variants={stagger(reduce)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
            >
              {/* Text */}
              <motion.div variants={fadeUp(reduce)} className={reversed ? 'md:order-2' : ''}>
                <p className="font-mono text-caption uppercase tracking-wider text-burgundy">
                  {s.n} · {s.title}
                </p>
                <h2
                  className="mt-5 font-display leading-[1.02] tracking-tight text-ink"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  {s.title}
                </h2>
                <p className="mt-6 max-w-xl text-body-l leading-relaxed text-ink/70">
                  {s.description}
                </p>
              </motion.div>

              {/* Deliverables */}
              <motion.div
                variants={fadeUp(reduce)}
                className={reversed ? 'md:order-1' : ''}
              >
                <p className="border-t border-nude pt-5 font-mono text-caption uppercase tracking-wider text-ink/45">
                  Що входить
                </p>
                <ul className="mt-6 space-y-4">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-baseline gap-3 font-mono text-caption uppercase tracking-wider text-ink/75"
                    >
                      <span className="text-burgundy">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section className="border-t border-nude px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p
            className="max-w-2xl font-display leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Не знайшли потрібного?{' '}
            <span className="italic text-burgundy">Напишіть — обговоримо.</span>
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 rounded-full bg-burgundy px-7 py-3 font-body text-[0.9375rem] tracking-wide text-bg transition-colors hover:bg-burgundy-dark"
          >
            Написати
          </Link>
        </div>
      </section>
    </>
  )
}

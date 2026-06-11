import { Link } from 'react-router'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const headlineLines = [
  { text: 'Веб та', className: 'text-ink' },
  { text: 'інтерфейси', className: 'italic text-burgundy' },
  { text: 'що продають', className: 'text-ink' },
]

const services = [
  {
    n: '01',
    title: 'Веб-дизайн',
    desc: 'Лендінги, корпоративні сайти, ecommerce. Від концепції до фінального макета.',
  },
  {
    n: '02',
    title: 'UI/UX дизайн',
    desc: 'Дизайн інтерфейсів додатків і SaaS. Дослідження, прототипи, дизайн-система.',
  },
  {
    n: '03',
    title: 'Бренд та айдентика',
    desc: 'Логотип, фірмовий стиль, гайдлайни. Базис, на якому будується все інше.',
  },
]

const principles = [
  { k: 'Підхід', v: 'Системний' },
  { k: 'Процес', v: 'Прозорий' },
  { k: 'Результат', v: 'Вимірюваний' },
]

export function Home() {
  const reduce = useReducedMotion()

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  }

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  }

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: reduce ? 0 : 0.2 }}
            className="font-mono text-caption uppercase tracking-wider text-burgundy"
          >
            Дизайн-студія, що працює на результат
          </motion.p>

          <h1
            className="mt-6 font-display font-black leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
          >
            {headlineLines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.05em]">
                <motion.span
                  className={`block ${line.className}`}
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : 0.35 + i * 0.15 }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 1.0 }}
            className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-xl text-body-l text-ink/70">
              Створюю сайти і цифрові продукти для бізнесу, який хоче більше ніж шаблон. Від ідеї до
              запуску.
            </p>

            <div className="flex shrink-0 items-center gap-6">
              <Link
                to="/services"
                className="inline-flex rounded-full bg-burgundy px-7 py-3 font-body text-[0.9375rem] tracking-wide text-bg transition-colors hover:bg-burgundy-dark"
              >
                Подивитись послуги
              </Link>
              <Link
                to="/contact"
                className="font-body text-[0.9375rem] tracking-wide text-ink underline-offset-4 hover:underline"
              >
                Зв'язатись
              </Link>
            </div>
          </motion.div>
        </div>

        <span className="pointer-events-none absolute bottom-6 right-6 font-mono text-caption uppercase tracking-wider text-ink/40 md:right-12">
          Hmelnytskyi, UA · 2026
        </span>
      </section>

      {/* ── 2. PHILOSOPHY ───────────────────────────────────────── */}
      <section className="border-t border-nude px-6 py-24 md:px-12 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-7xl"
        >
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center font-display leading-[1.1] tracking-tight text-ink"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)' }}
          >
            Кожен проект — це переклад бізнес-задачі мовою інтерфейсу.{' '}
            <span className="italic text-burgundy">Не декорація, а інструмент.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mx-auto mt-16 max-w-3xl">
            <div className="h-px w-full bg-nude" />
            <dl className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.k} className="flex flex-col gap-1">
                  <dt className="font-mono text-caption uppercase tracking-wider text-ink/45">
                    {p.k}
                  </dt>
                  <dd className="font-mono text-caption uppercase tracking-wider text-burgundy">
                    {p.v}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 3. SERVICES TEASER ──────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {services.map((s) => (
              <motion.div key={s.n} variants={fadeUp}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col bg-nude p-8 transition-[transform,background-color] duration-300 ease-out hover:-translate-y-1 hover:bg-burgundy md:p-10"
                >
                  <span className="font-mono text-4xl text-burgundy transition-colors duration-300 group-hover:text-bg">
                    {s.n}
                  </span>
                  <h3 className="mt-8 font-display text-3xl tracking-tight text-ink transition-colors duration-300 group-hover:text-bg">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-ink/65 transition-colors duration-300 group-hover:text-bg/80">
                    {s.desc}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-caption uppercase tracking-wider text-ink/70 transition-colors duration-300 group-hover:text-bg">
                    Детальніше
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA BAND (the only --accent moment) ──────────────── */}
      <section className="w-full bg-burgundy-dark px-6 py-28 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto flex max-w-7xl flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display leading-[0.95] tracking-tight text-bg"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
          >
            Маєте проект?
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-full bg-accent px-9 py-4 font-body text-base tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              Розпочати розмову
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

import { Link } from 'react-router'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p
        className="font-display font-black leading-none tracking-tight text-burgundy"
        style={{ fontSize: 'clamp(6rem, 22vw, 12rem)' }}
      >
        404
      </p>
      <p className="mt-4 text-body-l text-ink/70">Сторінку не знайдено</p>
      <Link
        to="/"
        className="mt-10 inline-flex rounded-full bg-burgundy px-7 py-3 font-body text-[0.9375rem] tracking-wide text-bg transition-colors hover:bg-burgundy-dark"
      >
        На головну
      </Link>
    </section>
  )
}

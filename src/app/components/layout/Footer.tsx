import { Link } from 'react-router'

const nav = [
  { to: '/services', label: 'Послуги' },
  { to: '/pricing', label: 'Ціни' },
  { to: '/contact', label: 'Контакти' },
]

const contact = [
  { k: 'Email', v: 'hello@kurd.studio', href: 'mailto:hello@kurd.studio' },
  { k: 'Телефон', v: '+380 XX XXX XX XX', href: 'tel:+380000000000' },
  { k: 'Локація', v: 'Хмельницький, UA' },
]

export function Footer() {
  return (
    <footer className="w-full bg-burgundy-dark px-6 py-16 text-bg md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display leading-none tracking-tight text-bg">
              <span className="text-[2.5rem]">
                kurd<span className="text-bg/55">.</span>studio
              </span>
            </Link>
            <p className="mt-4 text-bg/65">Дизайн, що працює.</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3 md:items-start">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="font-body text-[0.9375rem] uppercase tracking-wide text-bg/70 transition-colors hover:text-bg"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Contact mini */}
          <dl className="flex flex-col gap-4">
            {contact.map((c) => (
              <div key={c.k} className="flex flex-col gap-1">
                <dt className="font-mono text-caption uppercase tracking-wider text-bg/40">
                  {c.k}
                </dt>
                <dd className="font-mono text-[0.875rem] text-bg/85">
                  {c.href ? (
                    <a href={c.href} className="transition-colors hover:text-bg">
                      {c.v}
                    </a>
                  ) : (
                    c.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-3 border-t border-nude/30 pt-8 font-mono text-caption uppercase tracking-wider text-bg/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Kurd Studio. Всі права захищені.</span>
          <span>Made with care in Hmelnytskyi</span>
        </div>
      </div>
    </footer>
  )
}

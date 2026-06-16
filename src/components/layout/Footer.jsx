import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Colonne 1 - Agence */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#F39C12] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">{siteConfig.description}</p>
            <div className="flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F39C12] transition-colors">
                <Facebook size={16} />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F39C12] transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/voyages-organises', label: t('nav.voyages') },
                { to: '/visa', label: t('nav.visa') },
                { to: '/hotels', label: t('nav.hotels') },
                { to: '/contact', label: t('nav.contact') },
                { to: '/about', label: t('nav.about') },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-[#F39C12] transition-colors">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Nos services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link to={service.to} className="hover:text-[#F39C12] transition-colors">
                    → {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#F39C12] shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F39C12] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#F39C12] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F39C12] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#F39C12] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© {year} {siteConfig.name}. {t('footer.rights')}</p>
          <p>{t('footer.madeWith')} ❤️ {t('footer.inAlgeria')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

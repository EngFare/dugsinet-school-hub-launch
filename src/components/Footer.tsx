import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '@/components/LanguageToggle';
import { translations } from '@/data/translations';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const t = translations[language];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@dugsinet.com' },
    { icon: Phone, text: '+252 61 234 5678' },
    { icon: MapPin, text: 'Mogadishu, Somalia' },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">Dugsinet</div>
            <p className="text-background/80 leading-relaxed">
              {t.footerDescription}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="inline-flex items-center justify-center w-10 h-10 bg-background/10 hover:bg-primary text-background hover:text-primary-foreground rounded-lg transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-background/80 hover:text-primary transition-colors">{t.features}</a></li>
              <li><a href="#modules" className="text-background/80 hover:text-primary transition-colors">{t.modules}</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">{t.contact}</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">{t.termsOfService}</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">{t.privacyPolicy}</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Data Security</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-background/80 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Dugsinet. {t.allRightsReserved}
            </p>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <span>Made with ❤️ in Somalia</span>
              <span>•</span>
              <span>Powered by Modern Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
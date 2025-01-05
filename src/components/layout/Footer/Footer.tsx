
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import FooterColumn from './FooterColumn';
import FooterLink from './FooterLink';
import SocialIcon from './SocialIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <FooterColumn title="MazoCode">
            <p className="text-[#E5E5E5] max-w-xs">
            Umsetzung von Ideen in die digitale Realität mit innovativen Lösungen und innovativer Technologie.
            </p>
            <div className="flex space-x-4 pt-4">
              <SocialIcon href="https://github.com" icon={Github} label="GitHub" />
              <SocialIcon href="https://twitter.com" icon={Twitter} label="Twitter" />
              <SocialIcon href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
            </div>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterLink to="/leistungen">Leistungen</FooterLink>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/ueber-uns">Über uns</FooterLink>
            <FooterLink to="/kontakt">Kontakt</FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Leistungen">
            <FooterLink to="/leistungen/web">Web Development</FooterLink>
            <FooterLink to="/leistungen/mobile">Mobile Apps</FooterLink>
            <FooterLink to="/leistungen/cloud">Cloud Solutions</FooterLink>
            <FooterLink to="/leistungen/consulting">IT Consulting</FooterLink>
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn title="Kontakt">
            <div className="space-y-4">
              <a href="mailto:contact@mazocode.com" className="flex items-center space-x-2 text-[#E5E5E5] hover:text-[#00B4D8] transition-colors duration-200">
                <Mail size={20} className="text-[#00B4D8]" />
                <span>info@mazocode.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-[#E5E5E5] hover:text-[#00B4D8] transition-colors duration-200">
                <Phone size={20} className="text-[#00B4D8]" />
                <span>+49 0176 08080808 </span>
              </a>
              <div className="flex items-start space-x-2 text-[#E5E5E5]">
                <MapPin size={20} className="text-[#00B4D8] mt-1" />
                <span>123 Tech Street<br />Innovation District<br />10115 Berlin, Germany</span>
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#E5E5E5] text-sm">
              © {currentYear} MazoCode. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
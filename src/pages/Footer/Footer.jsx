import { FaArrowUp } from 'react-icons/fa';
import logo from '@/assets/Chuks_Kitchen.png'; 
import ScrollToTop from '../../_components/Scrolltotop';

const Footer = () => {
  return (
    <footer className="hidden md:block bg-[#5C4033] text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="mb-4">
                    <img 
                        src={logo} 
                        alt="Chuka Kitchen Logo" 
                        className="h-12 w-auto"
                    />
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                    Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                                Explore
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                                My Order
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                                Account
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3">
                        <li>
                            <a 
                            href="tel:+2348012345678" 
                            className="text-white/80 hover:text-white transition-colors duration-200 text-sm flex items-start"
                            >
                            <span>+234 801 234 5678</span>
                            </a>
                        </li>
                        <li>
                            <a 
                            href="mailto:hello@chukakitchen.com" 
                            className="text-white/80 hover:text-white transition-colors duration-200 text-sm break-all"
                            >
                            hello@chukakitchen.com
                            </a>
                        </li>
                        <li className="text-white/80 text-sm leading-relaxed">
                            123 Taste Blvd, Lagos, Nigeria
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 invisible md:visible">Social</h3>
                    <ul className="space-y-3">
                        <li>
                            <a 
                            href="#" 
                            className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Facebook
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#" 
                            className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Twitter
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#" 
                            className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            LinkedIn
                            </a>
                        </li>
                        <li>
                            <a 
                            href="#" 
                            className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm text-center md:text-left">
                    &copy; 2020 Lift Media. All rights reserved.
                </p>
            </div>
        </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
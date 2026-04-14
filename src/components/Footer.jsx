import logo from "../assets/logo-xl.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/twitter.png";
import videoIcon from "../assets/instagram.png"; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#064e3b] to-[#022c22] text-white py-12">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo Section */}
        <img src={logo} alt="KeenKeeper Logo" className="h-12 mb-6" />
        
        {/* Subtitle */}
        <p className="max-w-md text-gray-400 text-sm leading-relaxed mb-8">
          Your personal shelf of meaningful connection. Browse, tend and nurture the relationship that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <div className="flex gap-4">
            {[
              { src: facebook, alt: "Facebook" },
              { src: videoIcon, alt: "Video" },
              { src: instagram, alt: "Instagram" }
            ].map((social, i) => (
              <div key={i} className="bg-white p-2 rounded-full w-10 h-1 flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <img src={social.src} alt={social.alt} className="w-6 h-6 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="w-full max-w-4xl border-gray-400 mb-8" />

        {/* Bottom Section */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>©2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const colors = {
  backgroundTop: "#1014A9",
  backgroundBottom: "#6C3A92",
  text: "#FFFFF7",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navRef.current.offsetHeight}px`
      );
    }
  }, []);

  return (
    <header
      style={{
        "--color-background-top": colors.backgroundTop,
        "--color-background-bottom": colors.backgroundBottom,
        "--color-text": colors.text,
      }}
      ref={navRef}
      className="fixed top-0 w-full z-50 md:text-xs lg:text-base"
    >
      {/* Top Nav */}
      <div className="lg:px-28 md:px-12 px-4 lg:py-4 py-1 flex justify-between items-center bg-[var(--color-background-top)] text-[var(--color-text)]">
        <div className="flex items-center space-x-10">
          <img
            src="/images/GANZ Logo.png"
            alt="GANZ Logo"
            className="cursor-pointer h-8 w-auto"
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <div className="cursor-pointer underline transition-all duration-300 transform hover:underline">
              Home
            </div>
            <div className="cursor-pointer transition-all duration-300 transform hover:translate-y-[-4px] hover:underline">
              Shop
            </div>
            <div className="cursor-pointer transition-all duration-300 transform hover:translate-y-[-4px] hover:underline">
              News
            </div>
            <div className="cursor-pointer transition-all duration-300 transform hover:translate-y-[-4px] hover:underline">
              Help
            </div>
            <div className="cursor-pointer transition-all duration-300 transform hover:translate-y-[-4px] hover:underline">
              Classic Parents
            </div>
          </nav>
        </div>

        {/* Desktop Legal */}
        <div className="hidden md:block">
          <div className="transition-all duration-300 transform hover:translate-y-[-4px] hover:underline">
            Legal
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Second Bar --- */}
      <div className="lg:px-28 md:px-12 px-2 flex flex-row justify-between items-center bg-[var(--color-background-bottom)] text-[var(--color-text)] md:space-y-0 text-[0.65rem] lg:text-base ">
        {/* Left Section: Platforms */}
        <div className="flex flex-row items-center space-y-2 space-x-2 lg:space-x-6">
          <div>Available for play on:</div>
          <div className="flex items-center space-x-0">
            <img
              src="/images/Windows.png"
              alt="Windows"
              className="cursor-pointer h-6 md:h-8 w-auto"
            />
            <img
              src="/images/Android.png"
              alt="Android"
              className="cursor-pointer h-6 md:h-8 w-auto"
            />
            <img
              src="/images/Mac.png"
              alt="Mac & iOS"
              className="cursor-pointer h-6 md:h-8 w-auto"
            />
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex flex-row items-center space-y-2 space-x-2 md:space-x-4">
          <div className="hidden md:flex md:items-center">
            Follow the world of Webkinz!
          </div>

          <div className="flex items-center space-x-2 pb-1 md:pb-2 md:space-x-4">
            <img
              src="/images/Instagram.png"
              alt="Instagram"
              className="cursor-pointer h-6 md:h-8 w-auto"
            />
            <img
              src="/images/Facebook.png"
              alt="Facebook"
              className="cursor-pointer h-6 md:h-8 w-auto"
            />
            <img
              src="/images/Twitter.png"
              alt="Twitter"
              className="cursor-pointer h-6 md:h-8 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-background-top)] text-[var(--color-text)] px-4 py-2 space-y-2 text-sm">
          <div className="cursor-pointer hover:underline">Home</div>
          <div className="cursor-pointer hover:underline">Shop</div>
          <div className="cursor-pointer hover:underline">News</div>
          <div className="cursor-pointer hover:underline">Help</div>
          <div className="cursor-pointer hover:underline">Classic Parents</div>
          <div className="cursor-pointer hover:underline">Legal</div>
        </div>
      )}
    </header>
  );
}

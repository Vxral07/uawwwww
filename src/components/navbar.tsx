
import { Popover, Transition, } from "@headlessui/react";
import { Globe, Menu, X } from "lucide-react";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"; // Assuming you have a custom Select component


// NavItem Component
function NavItem({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: ReactNode;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
  return (
    <li className="px-4">
      <a
        href={href}
        onClick={onClick}
        className={`block px-2 py-2 text-base font-bold transition ${
          isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
        }`}
      >
        {children}
      </a>
    </li>
  );
}

// Desktop Navigation
function DesktopNavigation() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname + location.hash);
  }, [location.pathname, location.hash]);

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();

    const [path, hash] = href.split("#");
    if (path && window.location.pathname !== path) {
      window.location.href = `${path}#${hash}`;
    } else {
      const target = document.querySelector(`#${hash}`);
      target?.scrollIntoView({ behavior: "smooth" });
    }

    setActiveTab(href);
  };

  return (
    <nav className="hidden md:flex tracking-wide font-poppins">
      <ul className="flex items-center tracking-wider text-white text-[26px]">
        <NavItem
          href="/"
          isActive={activeTab === "/" || activeTab === "/#"}
          onClick={() => setActiveTab("/")}
        >
          Home
        </NavItem>
        <NavItem
          href="/#advisory"
          isActive={activeTab === "/#advisory"}
          onClick={(e) => handleScrollToSection(e, "/#advisory")}
        >
          Advisory
        </NavItem>
        <NavItem
          href="/#nuqiprive"
          isActive={activeTab === "/#nuqiprive"}
          onClick={(e) => handleScrollToSection(e, "/#nuqiprive")}
        >
          Prive
        </NavItem>
        <NavItem
          href="/iris"
          isActive={activeTab === "/iris"}
          onClick={() => setActiveTab("/iris")}
        >
          IRIS
        </NavItem>
        <NavItem
          href="/ethosphere"
          isActive={activeTab === "/ethosphere"}
          onClick={() => setActiveTab("/ethosphere")}
        >
          Ethosphere
        </NavItem>
      </ul>
    </nav>
  );
}

// Mobile Navigation
function MobileNavigation() {
  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetHash: string
  ) => {
    event.preventDefault();

    if (window.location.pathname !== "/") {
      window.location.href = `/${targetHash}`;
    } else {
      const target = document.querySelector(targetHash);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden font-poppins">
      <Popover>
        <Popover.Button>
          <Menu className="h-6 w-6 text-white" />
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel className="absolute top-0 left-0 w-full bg-black p-4">
              <div className="flex justify-between items-center">
                <Popover.Button>
                  <X className="h-6 w-6 text-white" />
                </Popover.Button>
              </div>
              <nav className="mt-4 tracking-wide">
                <ul className="space-y-4 tracking-wide">
                  <NavItem href="/" isActive={false} onClick={() => {}}>
                    Home
                  </NavItem>
                  <NavItem
                    href="/advisory"
                    isActive={false}
                    onClick={(e) => handleScrollToSection(e, "#advisory")}
                  >
                    Advisory
                  </NavItem>
                  <NavItem
                    href="/prive"
                    isActive={false}
                    onClick={(e) => handleScrollToSection(e, "#nuqiprive")}
                  >
                    Prive
                  </NavItem>
                  <NavItem href="/iris" isActive={false} onClick={() => {}}>
                    IRIS
                  </NavItem>
                  <NavItem
                    href="/ethosphere"
                    isActive={false}
                    onClick={() => {}}
                  >
                    Ethosphere
                  </NavItem>
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </div>
  );
}

// Country Select Dropdown
function CountrySelect() {
  return (
    <div className="flex items-center justify-center">
      <Select
        defaultValue="india"
        onValueChange={(value) => {
          if (value === "india") {
            window.location.href = "https://in.nuqiwealth.com/";
          } else {
            window.location.href = "https://uae.nuqiwealth.com/";
          }
        }}
      >
        <SelectTrigger className="w-12 bg-black text-white border border-cyan-400 rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-200">
          <SelectValue>
            <Globe className="text-white" />
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-black text-white border border-cyan-400 rounded-xl">
          <SelectItem value="india">
            <div className="flex items-center">
              <img
                className="w-6 h-6 object-contain mr-2"
                src="/india.jpg"
                alt="India"
              />
              India
            </div>
          </SelectItem>
          <SelectItem value="uae">
            <div className="flex items-center">
              <img
                className="w-6 h-6 object-contain mr-2"
                src="/uae.jpg"
                alt="UAE"
              />
              UAE
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

// Home Logo Component
function HomeLogo() {
  return (
    <Link to="/" className="block">
      <img
        src="/logo2.png"
        alt="Nuqi Logo"
        className="h-8 sm:h-10 md:h-12 w-auto lg:ml-20 object-contain"
      />
    </Link>
  );
}

// Main Navbar Component
export function Navbar() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-black backdrop-blur-xl bg-opacity-50 border-opacity-50 border-b-[1px] border-[#4d4d4d] shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between font-poppins">
        {/* Logo */}
        <div className="flex-shrink-0">
          <HomeLogo />
        </div>

        {/* Desktop Navigation (Visible only on desktop) */}
        <div className="hidden lg:flex flex-grow justify-center">
          <DesktopNavigation />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 lg:space-x-4 lg:mr-5">
          {/* User Icon with Dropdown for Mobile */}
          <div className="lg:hidden relative">
            <Popover>
              <Popover.Button>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-cyan-500 text-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A7.938 7.938 0 0112 16c1.739 0 3.33.555 4.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zM4 6h16"
                    />
                  </svg>
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel className="absolute right-0 mt-2 w-40 bg-black text-white rounded-lg shadow-lg">
                  <div className="flex flex-col">
                    <button className="px-4 py-2 text-sm hover:bg-cyan-400 hover:text-black">
                      Log In
                    </button>
                    <button className="px-4 py-2 text-sm hover:bg-cyan-400 hover:text-black">
                      Sign Up
                    </button>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>

          {/* Country Select Dropdown */}
          <div className="flex order-1 lg:order-3 lg:ml-4">
            <CountrySelect />
          </div>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="lg:hidden order-3">
            <MobileNavigation />
          </div>

          {/* Sign Up & Login for Desktop */}
          <div className="hidden lg:flex space-x-2 order-2">
            <button className="px-3 py-2 text-sm font-semibold text-white bg-cyan-400 rounded-xl whitespace-nowrap hover:opacity-90">
              Sign Up
            </button>
            <button className="px-3 py-2 text-sm font-semibold text-white bg-transparent border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


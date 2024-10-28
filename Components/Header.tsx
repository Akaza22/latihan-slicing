import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="fixed top-10 left-[90px] right-[90px] flex justify-between items-center">
       {/* KIRI */}
       <div className="flex items-center">
        {/* LOGO */}
        <Link href="/">
          
            <img src="/images/logo.svg" className="h-[45px]" />
          
        </Link>

        {/* Links */}
        <nav className="ml-[50px]">
          <ul className="flex space-x-[30px]">
            <li>
              <Link href="/" className="text-text-200">
                Featured
              </Link>
            </li>
            <li>
              <Link href="/" className="text-text-200">
                How It Work
              </Link>
            </li>
            <li>
              <Link href="/" className="text-text-200">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="flex">
        <li>
          <Link href="/" className="px-8 py-3 text-text-200">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/" className="px-8 py-3 text-white bg-brand rounded-md">
            Join Us
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

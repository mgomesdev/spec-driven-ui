'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { HeaderProps, NavItem, DEFAULT_NAV_ITEMS, DEFAULT_LOGO_ALT } from '@/generated/types';

export const Header = ({
  logoAlt = DEFAULT_LOGO_ALT,
  navItems = DEFAULT_NAV_ITEMS,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const navLinks: NavItem[] = navItems;

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen && hamburgerRef.current) {
      hamburgerRef.current.setAttribute('aria-expanded', 'true');
    } else if (hamburgerRef.current) {
      hamburgerRef.current.setAttribute('aria-expanded', 'false');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        const menu = overlayRef.current.querySelector('[data-testid="mobile-menu"]');
        if (menu && !menu.contains(event.target as Node)) {
          closeMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className="fixed top-0 w-full h-[80px] bg-white shadow-sm z-50"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          data-testid="logo-link"
          aria-label={logoAlt}
        >
          <div
            className="w-10 h-10 bg-amber-300 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-[--color-text-primary] font-semibold hidden sm:block">
            Portfólio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="desktop-menu">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[--color-text-secondary] hover:text-[--color-accent] transition-colors duration-200 font-medium"
              data-testid={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          data-testid="hamburger-button"
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          id="hamburger-btn"
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <span className={`block w-6 h-0.5 bg-amber-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-amber-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-amber-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        data-testid="menu-overlay"
        id="mobile-overlay"
        aria-hidden={!isMenuOpen}
        ref={overlayRef}
        onClick={(e) => {
          if (e.target === overlayRef.current) {
            closeMenu();
          }
        }}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          data-testid="mobile-menu"
          id="mobile-menu"
        >
          <div className="p-6">
            <button
              type="button"
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
              data-testid="close-menu-button"
              aria-label="Fechar menu"
              onClick={closeMenu}
            >
              <span className="text-2xl text-[--color-text-primary]">&times;</span>
            </button>

            <nav className="mt-12 flex flex-col gap-6" data-testid="mobile-nav">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-[--color-text-secondary] hover:text-[--color-accent] transition-colors duration-200 font-medium"
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

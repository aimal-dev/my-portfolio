"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { Terminal, User, Code, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: '_hello', path: '/', icon: Terminal },
    { name: '_about-me', path: '/about', icon: User },
    { name: '_projects', path: '/projects', icon: Code },
    { name: '_contact-me', path: '/contact', icon: Mail },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.name}>aimal-dev</span>
      </div>
      
      <button 
        className={styles.mobileToggle} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={clsx(styles.links, isOpen && styles.mobileOpen)}>
        {navItems.map((item) => {
           const isActive = pathname === item.path;
           
           return (
            <Link 
              key={item.path} 
              href={item.path}
              className={clsx(styles.link, isActive && styles.active)}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.label}>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className={styles.extra}>
         {/* extra icons or links */}
      </div>
    </nav>
  );
}

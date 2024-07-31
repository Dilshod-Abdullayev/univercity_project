import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Items from './Items';
import Logo from './Logo';
import NavSocials from './NavSocials';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // Specify the type here

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='nav' ref={navRef}>
        <Logo />
        <button className="nav-toggle" onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <motion.div
          className={`nav-items ${isOpen ? 'open' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? '0%' : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Items />
          <NavSocials />
        </motion.div>
        <div className="desktop-nav-items">
          <Items />
          <NavSocials />
        </div>
      </nav>
      {isOpen && <div className="overlay" onClick={toggleNav}></div>}
      <div className={`content ${isOpen ? 'blur' : ''}`}>
      </div>
    </>
  );
}
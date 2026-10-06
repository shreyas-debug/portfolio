import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'About', id: 'about' },
];

export const FloatingNav = () => {
  const [open, setOpen] = useState(false);
  const [atPageEnd, setAtPageEnd] = useState(false);
  const [projectActionsVisible, setProjectActionsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    let frame;
    let wasEdgeSection;

    const updateDock = () => {
      frame = undefined;
      const heroRect = hero?.getBoundingClientRect();
      const heroVisible = Boolean(heroRect && heroRect.top < window.innerHeight * 0.65 && heroRect.bottom > window.innerHeight * 0.35);
      const pageHeight = document.documentElement.scrollHeight;
      const distanceFromEnd = pageHeight - (window.scrollY + window.innerHeight);
      const nearPageEnd = distanceFromEnd <= Math.max(140, window.innerHeight * 0.14);
      setAtPageEnd(nearPageEnd);
      const isEdgeSection = heroVisible || nearPageEnd;

      if (isEdgeSection !== wasEdgeSection) {
        wasEdgeSection = isEdgeSection;
        setOpen(isEdgeSection);
      }
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateDock);
    };

    updateDock();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const actionRows = Array.from(document.querySelectorAll('.project-links-row'));
    const visibleRows = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleRows.add(entry.target);
        else visibleRows.delete(entry.target);
      });
      setProjectActionsVisible(visibleRows.size > 0);
    }, { threshold: 0.15 });

    actionRows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`floating-dock${open ? ' dock-open' : ''}${atPageEnd ? ' at-page-end' : ''}${projectActionsVisible ? ' project-actions-visible' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { delay: 0.6, duration: 0.35 } }}
      aria-label="Page navigation"
    >
      <button className="dock-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
        <motion.span animate={{ scale: open ? 1.08 : 1 }} transition={{ duration: 0.2 }}>{open ? '×' : '↗'}</motion.span>
      </button>
      <div className="dock-links">
        <div className={`dock-expander${open ? ' open' : ''}`}>
          <button
            className="dock-menu"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-hidden={open}
            tabIndex={open ? -1 : 0}
          >
            Menu
          </button>
          <div className="dock-submenu" aria-hidden={!open}>
            {links.map((link) => (
              <button
                key={link.id}
                tabIndex={open ? 0 : -1}
                onClick={() => goTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <a href="https://docs.google.com/document/d/1W0fHaVJJGS_-CtuHzK1dXddjj-6Q-AHE1nFBnpRX-jY/export?format=pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </motion.nav>
  );
};

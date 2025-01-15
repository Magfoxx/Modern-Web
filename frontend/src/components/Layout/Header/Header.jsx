import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useCallback, useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(
    () => ["services", "projects", "avis", "tarifs"],
    []
  );

  // Fonction : Scroll fluide vers une section spécifique
  const scrollToSection = useCallback(
    (id) => {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 100,
          behavior: "smooth",
        });
        // Mettre à jour l'URL
        if (location.hash !== `#${id}`) {
          window.history.pushState({}, "", `/#${id}`);
        }
      }
    },
    [location.hash]
  );

  // Fonction : Gérer le clic sur une section ou le logo
  const handleNavigation = useCallback(
    (id) => {
      if (location.pathname === "/") {
        if (id === "welcome") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState({}, "", `/#welcome`);
        } else {
          scrollToSection(id);
        }
      } else {
        navigate(`/#${id}`);
      }
    },
    [location.pathname, scrollToSection, navigate]
  );

  // Détecte la section visible pendant le scroll
  const detectActiveSection = useCallback(() => {
    const headerHeight = 100;
    const currentSection =
      sections.find((id) => {
        const section = document.getElementById(id);
        const rect = section?.getBoundingClientRect();
        return rect?.top <= headerHeight + 10 && rect?.bottom >= headerHeight + 10;
      }) || (window.scrollY < 200 ? "welcome" : "");

    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection);
      window.history.replaceState({}, "", `/#${currentSection}`);
    }
  }, [sections, activeSection]);

  // Ajouter un listener pour le scroll
  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", detectActiveSection);
      return () => window.removeEventListener("scroll", detectActiveSection);
    }
  }, [location.pathname, detectActiveSection]);

  // Scroll automatique si un hash est présent dans l'URL
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      scrollToSection(sectionId);
    }
  }, [location, scrollToSection]);

  return (
    <header className={styles.header}>
      <div onClick={() => handleNavigation("welcome")} className={styles.logoContainer}>
        <img src="#" alt="logo Modern Web" />
        <p>Modern Web</p>
      </div>
      <nav>
        <ul className={styles.nav}>
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => handleNavigation(section)}
              className={`${styles.listNav} ${
                activeSection === section ? styles.active : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
          <li>
            <Link to="/blog" className={styles.listNav}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.listNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
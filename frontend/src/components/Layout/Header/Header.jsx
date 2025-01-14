import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import styles from "./Header.module.scss";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Fonction pour gérer le scroll (mémorisée avec useCallback)
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 100;
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - headerHeight,
        behavior: "smooth",
      });

      // Met à jour dynamiquement le hash dans l'URL
      if (location.pathname === "/") {
        if (window.history.pushState) {
          const newUrl = `/#${id}`;
          window.history.pushState({}, document.title, newUrl);
        }
      }
    }
  }, [location.pathname]);

  // Gestion du clic sur un lien
  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      // Si déjà sur la page d'accueil, juste scroller et mettre à jour le hash
      scrollToSection(id);
    } else {
      // Sinon, naviguer vers la page d'accueil et scroller
      navigate(`/#${id}`);
    }
  };

  // Gérer le scroll automatique lorsqu'un hash est présent dans l'URL
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Retire le "#" pour obtenir l'ID
      scrollToSection(sectionId);
    }
  }, [location, scrollToSection]); // Ajout de scrollToSection comme dépendance

  return (
    <header
      className={`${styles.header} d-flex jc-center ai-center jc-space-between p-30`}
    >
      <div
        className={`${styles.logoContainer} logo d-flex jc-column ai-center gap-10`}
      >
        <img src="#" alt="logo Modern Web" />
        <p>Modern Web</p>
      </div>
      <nav className="d-flex jc-center">
        <ul className={`${styles.nav} d-flex gap-50`}>
          <li
            className={styles.listNav}
            onClick={() => handleNavigation("welcome")}
          >
            Accueil
          </li>
          <li
            className={styles.listNav}
            onClick={() => handleNavigation("services")}
          >
            Services
          </li>
          <li
            className={styles.listNav}
            onClick={() => handleNavigation("projects")}
          >
            Réalisations
          </li>
          <li
            className={styles.listNav}
            onClick={() => handleNavigation("avis")}
          >
            Avis
          </li>
          <li
            className={styles.listNav}
            onClick={() => handleNavigation("tarifs")}
          >
            Tarifs
          </li>
          <li className={styles.listNav}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={styles.listNav}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div
      className={`${styles.footer} d-flex jc-space-between ai-center p-30`}
    >
      <span>Copyright © 2025 - Modern Web</span>
      <span>Mentions légales</span>
    </div>
  );
}

export default Footer;

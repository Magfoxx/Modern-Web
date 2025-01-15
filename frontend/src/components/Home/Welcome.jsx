import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.container}>
        {/* Petite photo à gauche */}
        <div className={styles.imageContainer}>
          {/* <img src="#" alt="image à définir" /> */}
        </div>
        {/* Texte principal */}
        <div className={styles.text}>
          <h1 className={`${styles.title} mb-30`}>
            Donnez vie à vos <span>idées numériques</span>
          </h1>
          <h2 className="mb-30">
            Des sites web qui captivent, inspirent et convertissent.
          </h2>
          <p className={styles.description}>
            Chez <strong>Modern Web</strong>, je conçois des plateformes
            numériques élégantes et performantes qui reflètent votre identité et
            répondent à vos besoins. Collaborons pour transformer vos idées en
            réalité.
          </p>
          <div className={`${styles.cta} gap-40 p-30`}>
            <button className="btn btn-primary">Mes réalisations</button>
            <button className="btn btn-secondary">Me contacter</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;

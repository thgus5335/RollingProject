import styles from './CommonSection.module.css';

const CommonSection = ({ title }) => {
  return (
    <section className={styles.commonSection}>
      <h3>{title}</h3>
    </section>
  );
};

export default CommonSection;

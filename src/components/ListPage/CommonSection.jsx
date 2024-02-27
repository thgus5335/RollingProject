import styles from './CommonSection.module.css';

const CommonSection = ({ title }) => {
  return (
    <section className={styles['section-style']}>
      <h3>{title}</h3>
    </section>
  );
};

export default CommonSection;

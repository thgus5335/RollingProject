import Card from './Card';
import styles from './CommonSection.module.css';

const CommonSection = ({ title }) => {
  return (
    <section className={styles['section-style']}>
      <h3>{title}</h3>
      <Card />
    </section>
  );
};

export default CommonSection;

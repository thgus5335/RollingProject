import Card from './Card';
import styles from './CommonSection.module.css';

function CommonSection({ title }) {
  return (
    <section className={styles.sectionStyle}>
      <h3>{title}</h3>
      <Card />
    </section>
  );
}

export default CommonSection;

import styles from './text.module.css';

const Text: React.FC<{ text: string }> = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Text;

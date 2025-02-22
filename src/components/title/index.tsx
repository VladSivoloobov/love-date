import styles from './title.module.css';

interface ITitle {
  text: string;
  textAlign?: 'left' | 'center' | 'right';
}

const Title: React.FC<ITitle> = ({ text, textAlign = 'left' }) => {
  return (
    <h2
      className={`
    ${styles.title}
    ${styles[textAlign]}
  `}
    >
      {text}
    </h2>
  );
};

export default Title;

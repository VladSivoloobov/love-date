import styles from './text.module.css';
import IText from '@/types/IText';
import textStyles from '@/css/text.module.css';

const Text: React.FC<IText> = ({ text, textAlign = 'left', textSize }) => {
  return (
    <p
      className={`
    ${styles.text}
    ${textStyles[textAlign]}  
  `}
      style={{
        fontSize: `${textSize ? textSize + 'px' : ''}`,
      }}
    >
      {text}
    </p>
  );
};

export default Text;

import styles from './title.module.css';
import textStyles from '@/css/text.module.css';

import IText from '@/types/IText';

const Title: React.FC<IText> = ({ text, textAlign = 'left', textSize }) => {
  return (
    <h2
      className={`
    ${styles.title}
    ${textStyles[textAlign]}
  `}
      style={{
        fontSize: `${textSize}px`,
      }}
    >
      {text}
    </h2>
  );
};

export default Title;

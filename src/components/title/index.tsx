import styles from './title.module.css';
import textStyles from '@/css/text.module.css';

import IText from '@/types/IText';

const Title: React.FC<IText & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  textAlign = 'left',
  textSize,
  ...attributes
}) => {
  return (
    <h2
      {...attributes}
      className={`
    ${styles.title}
    ${textStyles[textAlign]}
    ${attributes.className}
  `}
      style={{
        fontSize: `${textSize}px`,
        ...attributes.style,
      }}
    >
      {text}
    </h2>
  );
};

export default Title;

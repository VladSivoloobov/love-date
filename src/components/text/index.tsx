import styles from './text.module.css';
import IText from '@/types/IText';
import textStyles from '@/css/text.module.css';

const Text: React.FC<IText & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  textAlign = 'left',
  textSize,
  ...attributes
}) => {
  return (
    <p
      {...attributes}
      className={`
    ${styles.text}
    ${textStyles[textAlign]}
    ${attributes.className}  
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

import { StackLayout } from '../types/StackLayout';
import styles from './hstack.module.css';

/**
 * Горизонтальный стек, который показывает элементы
 * в горизонтальной ориентации
 * @param {StackLayout} options - Настройки лэйаута
 * @returns
 */
const HStack: React.FC<StackLayout> = ({
  gap = 0,
  children,
  wrap = 'nowrap',
  ...attributes
}) => {
  return (
    <div
      {...attributes}
      style={{
        gap: gap + 'px',
      }}
      className={`
        ${styles.hStack}
        ${styles[wrap]} 
        ${attributes.attributes?.className} 
      `}
    >
      {children}
    </div>
  );
};

export default HStack;

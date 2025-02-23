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
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  ...attributes
}) => {
  return (
    <div
      {...attributes}
      style={{
        gap: gap + 'px',
        justifyContent: justifyContent || '',
        alignItems: alignItems || '',
        ...attributes.style,
      }}
      className={`
        ${styles.hStack}
        ${styles[wrap]} 
        ${attributes.className || ''} 
      `}
    >
      {children}
    </div>
  );
};

export default HStack;

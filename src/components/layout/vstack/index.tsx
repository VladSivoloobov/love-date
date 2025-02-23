import { StackLayout } from '../types/StackLayout';
import styles from './vstack.module.css';

/**
 * Вертикальный стек, который показывает элементы
 * в вертикальной ориентации
 * @param {StackLayout} options - Настройки лэйаута
 * @returns
 */
const VStack: React.FC<StackLayout> = ({
  gap = 0,
  children,
  wrap = 'nowrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  ...attributes
}: StackLayout) => {
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
        ${styles.vStack}
        ${styles[wrap] || ''}  
        ${attributes.className || ''}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

export default VStack;

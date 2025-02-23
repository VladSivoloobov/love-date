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
  ...attributes
}: StackLayout) => {
  return (
    <div
      {...attributes}
      style={{
        gap: gap + 'px',
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

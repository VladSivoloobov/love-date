import React from 'react';
import styles from './input.module.css';

const Input: React.FC<{
  placeholder: string;
  callback: (text: string) => void;
  id?: string;
}> = ({ placeholder, callback, id = '' }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {placeholder}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        onInput={(e) => callback(e.currentTarget.value)}
        onChange={(e) => callback(e.currentTarget.value)}
        className={styles.input}
      />
    </div>
  );
};

export default Input;

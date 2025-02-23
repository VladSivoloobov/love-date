'use client';

import HStack from '@/components/layout/hstack';
import Select from 'react-dropdown-select';
import styles from './phone-input.module.css';

import { IMaskInput } from 'react-imask';
import { useState } from 'react';

const PhoneInput: React.FC = () => {
  const [completed, setCompleted] = useState(false);

  const options = ['🇷🇺 (+7)', '🇺🇸 (+1)', 'uk (+9)'].map((code, index) => ({
    value: code,
    label: code,
    id: index,
  }));

  return (
    <HStack className={styles.phoneInput} alignItems='center'>
      <Select
        className={styles.dropdown}
        values={[options[0]]}
        options={options}
        onChange={() => {}}
        searchable={false}
        color='var(--red)'
      />
      <IMaskInput
        mask='(000) 000-00-00'
        placeholder='Phone number'
        className={`
          ${styles.input}
          ${completed ? styles.completed : ''}
        `}
        onAccept={() => {
          setCompleted(false);
        }}
        onComplete={() => {
          setCompleted(true);
        }}
        type='tel'
      />
    </HStack>
  );
};

export default PhoneInput;

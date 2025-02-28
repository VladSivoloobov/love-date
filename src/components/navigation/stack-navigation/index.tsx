'use client';

import HStack from '@/components/layout/hstack';
import { PropsWithChildren, useEffect, useState } from 'react';
import styles from './stack-navigation.module.css';
import React from 'react';

const StackNavigation: React.FC<PropsWithChildren> = ({ children }) => {
  const [backButtonHandler, setBackButtonHandler] = useState<() => void>();
  const [nextButtonHandler, setNextButtonHandler] = useState<() => void>();

  useEffect(() => {
    setBackButtonHandler(() => {});
    setNextButtonHandler(() => {});
  }, [children]);

  return (
    <HStack className={styles.stackNavigation}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: i,
            backButtonHandler,
            nextButtonHandler,
          } as { key: number; backButtonHandler: () => void; nextButtonHandler: () => void });
        }
      })}
    </HStack>
  );
};

export default StackNavigation;

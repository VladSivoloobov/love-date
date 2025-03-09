'use client';

import Container from '@/components/layout/container';
import styles from './verification.module.css';
import VStack from '@/components/layout/vstack';
import PartInput from './components/PartInput';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button, { ButtonStyle, ButtonTag } from '@/components/button';

const Verification: React.FC = () => {
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    setInterval(
      () =>
        setTimer((prev) => {
          if (prev - 1 < 0) {
            return 59;
          }

          return prev - 1;
        }),
      1000
    );
  }, [setTimer]);

  const successfullCodeCallback = (/* value: number */) => {
    // TODO: Добавить отправку на сервер
    redirect('/profile-details');
  };

  return (
    <main className={styles.main}>
      <Container>
        <VStack gap={24}>
          <VStack gap={48}>
            <VStack justifyContent='center'>
              <div className={styles.timer}>00:{timer}</div>
              <p>Type the ferification code we sent you</p>
            </VStack>
            <PartInput callback={successfullCodeCallback} />
          </VStack>

          <Button
            className={styles.sendButton}
            text='Send again'
            buttonTag={ButtonTag.button}
            style={ButtonStyle.plainText}
          />
        </VStack>
      </Container>
    </main>
  );
};

export default Verification;

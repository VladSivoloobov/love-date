'use client';

import VStack from '@/components/layout/vstack';
import Title from '@/components/title';
import Container from '@/components/layout/container';
import Text from '@/components/text';
import styles from './number.module.css';
import PhoneInput from './components/phone-input';
import Button, { ButtonTag } from '@/components/button';
import { useState } from 'react';

const Number: React.FC = () => {
  const [phoneCompleted, setPhoneCompleted] = useState(false);

  return (
    <main className={styles.numberMain}>
      <Container className={styles.container}>
        <VStack gap={64}>
          <VStack gap={32}>
            <VStack>
              <Title className={styles.title} text='My mobile' />
              <Text
                className={styles.subtitle}
                text='Please enter your valid phone number. We will send you a 4-digit code to verify your account.'
              />
            </VStack>
            <PhoneInput />
          </VStack>
          <Button
            onClick={() => {
              alert('hello');
            }}
            buttonTag={ButtonTag.button}
            text='Continue'
          />
        </VStack>
      </Container>
    </main>
  );
};

export default Number;

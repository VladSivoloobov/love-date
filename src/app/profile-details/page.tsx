'use client';

import Button, { ButtonStyle, ButtonTag } from '@/components/button';
import VStack from '@/components/layout/vstack';
import styles from './profile-details.module.css';
import Container from '@/components/layout/container';
import Title from '@/components/title';
import Avatar from './components/avatar';
import AvatarImage from '@/images/test/photo.png';
import Input from '@/components/input';
import { useState } from 'react';

import calendarIcon from '@/images/icons/ui/Calendar.svg';
import { Sheet } from 'react-modal-sheet';

const ProfileDetails: React.FC = () => {
  const [, setFirstName] = useState('');
  const [, setLastName] = useState('');

  return (
    <main className={styles.main}>
      <Container>
        <VStack gap={48}>
          <Button
            style={ButtonStyle.plainText}
            text='Skip'
            buttonTag={ButtonTag.button}
            className={styles.skipButton}
          />
          <VStack gap={48}>
            <Title className={styles.title} text='Profile details' />
            <Avatar image={AvatarImage} />
          </VStack>
          <VStack gap={80}>
            <VStack gap={10}>
              <Input
                placeholder='First Name'
                id='first_name'
                callback={setFirstName}
              />
              <Input
                placeholder='Last Name'
                id='last_name'
                callback={setLastName}
              />
              <Button
                buttonTag={ButtonTag.button}
                icon={calendarIcon}
                text='Choose birthday date'
                className={styles.calendarButton}
              />
            </VStack>
            <Button text='Confirm' />
          </VStack>
        </VStack>
      </Container>
    </main>
  );
};

export default ProfileDetails;

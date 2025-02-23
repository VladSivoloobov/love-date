import Container from '@/components/layout/container';
import styles from './login.module.css';
import VStack from '@/components/layout/vstack';
import Image from 'next/image';
import logo from '@/images/trademark.svg';
import Title from '@/components/title';
import Button, { ButtonStyle } from '@/components/button';
import HStack from '@/components/layout/hstack';
import Text from '@/components/text';

import facebook from '@/images/icons/social/facebook.svg';
import apple from '@/images/icons/social/apple.svg';
import google from '@/images/icons/social/google.svg';

const Login: React.FC = () => {
  return (
    <main className={styles.loginMain}>
      <Container
        className={styles.container}
        style={{
          paddingTop: '128px',
        }}
      >
        <VStack gap={78} alignItems='center'>
          <Image alt='' src={logo} />
          <VStack gap={32}>
            <Title
              textAlign='center'
              className={styles.title}
              text='Sign up to continue'
            />
            <VStack gap={64}>
              <VStack gap={20}>
                <Button href='/number' text='Continue with email' />
                <Button
                  href='/number'
                  text='Use phone number'
                  style={ButtonStyle.secondaryButton}
                />
              </VStack>
              <VStack gap={24} alignItems='center'>
                <Text
                  className={styles.loginAlternativeTitle}
                  text='or sign up with'
                />
                <HStack gap={20}>
                  <Button
                    href='#'
                    icon={facebook}
                    style={ButtonStyle.secondaryButton}
                  />
                  <Button
                    href='#'
                    icon={google}
                    style={ButtonStyle.secondaryButton}
                  />
                  <Button
                    href='#'
                    icon={apple}
                    style={ButtonStyle.secondaryButton}
                  />
                </HStack>
              </VStack>
              <HStack
                style={{
                  marginTop: 'auto',
                }}
                gap={32}
                justifyContent='center'
              >
                <Button
                  href='#'
                  style={ButtonStyle.plainText}
                  text='Terms of use'
                />
                <Button
                  href='#'
                  style={ButtonStyle.plainText}
                  text='Privacy Policy'
                />
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </main>
  );
};

export default Login;

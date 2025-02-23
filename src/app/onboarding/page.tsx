import VStack from '@/components/layout/vstack';
import Carousel from './components/carousel/index';
import Button, { ButtonStyle } from '@/components/button';
import HStack from '@/components/layout/hstack';
import Text from '@/components/text';
import Container from '@/components/layout/container';
import styles from './onboarding.module.css';

export default function Onboarding() {
  return (
    <main className={styles.onboardingMain}>
      <section>
        <VStack
          style={{
            height: '100%',
          }}
          gap={42}
          justifyContent='space-between'
        >
          <Carousel />
          <Container>
            <VStack gap={20}>
              <Button href='/login' text='Create an account' />
              <HStack gap={5} justifyContent='center' alignItems='center'>
                <Text textSize={16} text='Already have an account?' />
                <Button
                  href='/login'
                  text='Sign In'
                  style={ButtonStyle.plainText}
                />
              </HStack>
            </VStack>
          </Container>
        </VStack>
      </section>
    </main>
  );
}

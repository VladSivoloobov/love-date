import VStack from '@/components/layout/vstack';
import Carousel from './components/carousel/index';
import Button from '@/components/button';
import HStack from '@/components/layout/hstack';
import Text from '@/components/text';

export default function Onboarding() {
  return (
    <main>
      <VStack>
        <Carousel />
        <VStack>
          <Button href='/login' text='Create an account' />
          <HStack>
            <Text text='Already have an account?' />
          </HStack>
        </VStack>
      </VStack>
    </main>
  );
}

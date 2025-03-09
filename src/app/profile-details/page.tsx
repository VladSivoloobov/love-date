import Button, { ButtonStyle, ButtonTag } from '@/components/button';
import VStack from '@/components/layout/vstack';
import styles from './profile-details.module.css';
import Container from '@/components/layout/container';
import Title from '@/components/title';
import Avatar from './components/avatar';
import AvatarImage from '@/images/test/photo.png';

const ProfileDetails: React.FC = () => {
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
        </VStack>
      </Container>
    </main>
  );
};

export default ProfileDetails;

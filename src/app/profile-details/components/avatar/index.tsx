import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import styles from './avatar.module.css';
import Button, { ButtonStyle, ButtonTag } from '@/components/button';
import cameraImage from '@/images/icons/ui/camera.svg';

const Avatar: React.FC<{ image: string | StaticImport }> = ({ image }) => {
  return (
    <div className={styles.avatar}>
      <Image className={styles.avatarImage} alt='' src={image} />
      <Button
        className={styles.cameraButton}
        icon={cameraImage}
        style={ButtonStyle.plainText}
        buttonTag={ButtonTag.button}
      />
    </div>
  );
};

export default Avatar;

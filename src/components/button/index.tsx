import Link from 'next/link';
import styles from './button.module.css';

export enum ButtonStyle {
  plainText,
  primaryButton,
}

const Button: React.FC<{ text: string; href: string; style?: ButtonStyle }> = ({
  text,
  href,
  style = ButtonStyle.primaryButton,
}) => {
  return (
    <Link className={styles[ButtonStyle[style]]} href={href}>
      {text}
    </Link>
  );
};

export default Button;

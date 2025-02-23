import Link from 'next/link';
import styles from './button.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export enum ButtonStyle {
  plainText,
  primaryButton,
  secondaryButton,
}

const Button: React.FC<{
  text?: string;
  href: string;
  style?: ButtonStyle;
  icon?: StaticImport | string;
}> = ({ text, href, icon, style = ButtonStyle.primaryButton }) => {
  return (
    <Link
      className={`
        ${styles.button}
        ${styles[ButtonStyle[style]]}
        ${!text && icon ? styles.onlyIcon : ''}
      `}
      href={href}
    >
      {icon ? <Image alt='' src={icon} /> : ''}
      {text}
    </Link>
  );
};

export default Button;

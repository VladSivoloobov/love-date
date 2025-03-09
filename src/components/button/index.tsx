import Link from 'next/link';
import styles from './button.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

export enum ButtonStyle {
  plainText,
  primaryButton,
  secondaryButton,
}

export enum ButtonTag {
  link,
  button,
}

const Button: React.FC<
  {
    text?: string;
    href?: string;
    style?: ButtonStyle;
    icon?: StaticImport | string;
    buttonTag?: ButtonTag;
    attributes?: React.HTMLAttributes<HTMLElement>;
  } & React.HTMLAttributes<HTMLElement>
> = ({
  text,
  href = '#',
  icon,
  style = ButtonStyle.primaryButton,
  buttonTag = ButtonTag.link,
  ...attributes
}) => {
  const props = {
    className: `
      ${styles.button}
      ${styles[ButtonStyle[style]]}
      ${!text && icon ? styles.onlyIcon : ''}
      ${attributes.className}
    `,
    href,
  };

  const children = (
    <>
      {icon ? <Image alt='' src={icon} /> : ''}
      {text}
    </>
  );

  return React.createElement(
    ButtonTag[buttonTag] === 'link' ? Link : 'button',
    { ...attributes, ...props },
    children
  );
};

export default Button;

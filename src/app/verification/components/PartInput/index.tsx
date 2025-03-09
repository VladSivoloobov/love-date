import HStack from '@/components/layout/hstack';
import styles from './part-input.module.css';
import { FormEvent, KeyboardEvent, useRef, MouseEvent, useState } from 'react';

const PartInput: React.FC<{ inputsCount?: number; callback: () => void }> = ({
  inputsCount = 4,
  callback,
}) => {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const [activedInputs, setActivedInputs] = useState<boolean[]>(
    new Array(inputsCount).fill(false)
  );

  const validateInput = (input: HTMLInputElement) => {
    const regex = /\D/g;

    if (regex.test(input.value)) {
      input.value = input.value.replaceAll(regex, '');

      return false;
    }

    return true;
  };

  const focusInputByNumber = (number: number) => {
    if (number < 0) {
      number = 0;
    } else if (number > refs.current.length - 1) {
      refs.current[refs.current.length - 1]?.blur();

      callback();
      return;
    }

    refs.current[number]?.focus();
  };

  const onNavigation = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyCode = e.key;

    switch (keyCode) {
      case 'ArrowLeft':
        focusInputByNumber(index - 1);
        break;
      case 'ArrowRight':
        focusInputByNumber(index + 1);
        break;
    }
  };

  const onInput = (e: FormEvent<HTMLInputElement>, index: number) => {
    const nativeEvent = e.nativeEvent as InputEvent;
    const inputType = nativeEvent.inputType;
    const currentInput = refs.current[index];

    switch (inputType) {
      case 'insertText':
        if (!validateInput(currentInput!)) break;

        if (currentInput!.value.length > 1) {
          currentInput!.value = nativeEvent.data || '';
        }

        if (index < refs.current.length - 1) {
          setActivedInputs((prev) => {
            prev[index + 1] = false;

            return prev;
          });
        }

        if (refs) focusInputByNumber(index + 1);
        break;
      case 'deleteContentBackward':
        if (index !== 0) {
          setActivedInputs((prev) => {
            prev[index] = true;

            return prev;
          });
        }

        focusInputByNumber(index - 1);
        break;
    }
  };

  const onClick = (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLInputElement;

    target.setSelectionRange(target.value.length, target.value.length);
  };

  return (
    <HStack gap={9}>
      {new Array(inputsCount).fill(null).map((_, index) => {
        return (
          <input
            key={index}
            placeholder='0'
            type='text'
            className={styles.numberInput}
            onInput={(e) => onInput(e, index)}
            ref={(el) => void (refs.current[index] = el)}
            onKeyDown={(e) => onNavigation(e, index)}
            onClick={(e) => onClick(e)}
            disabled={activedInputs[index]}
          />
        );
      })}
    </HStack>
  );
};

export default PartInput;

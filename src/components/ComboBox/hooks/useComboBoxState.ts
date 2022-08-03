import { KeyboardEventHandler, useEffect, useMemo, useState } from "react";
import { Options, UseComboBoxState } from "../models";
import { KeyCodeEnum } from "../../../enums";

const useComboBoxState: UseComboBoxState = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<string>();
  const [itemFocused, setItemFocused] = useState<number>(0);

  const isSelected = itemSelected !== undefined;
  const classLabel = isSelected ? "selected" : undefined;

  const optionsMapped: Options[] = useMemo(
    () =>
      options.map<Options>((option, index) => ({
        option,
        selected: option === itemSelected,
        focused: index === itemFocused,
      })),
    [options, itemSelected, itemFocused]
  );

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const onChangeOption = (option: string) => {
    onChange(option);
    setItemSelected(option);
  };

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    const keyActions: Record<KeyCodeEnum | "default", () => void> = {
      [KeyCodeEnum.ENTER]: () => {
        isOpen && onChangeOption(options[itemFocused!]);
        toggleMenu();
      },

      [KeyCodeEnum.ESCAPE]: () => {
        closeMenu();
      },

      [KeyCodeEnum.TAB]: () => {
        closeMenu();
      },

      [KeyCodeEnum.ARROW_UP]: () => {
        isOpen &&
          setItemFocused((prevState) =>
            prevState > 0 ? prevState - 1 : prevState
          );
      },

      [KeyCodeEnum.ARROW_DOWN]: () => {
        isOpen &&
          setItemFocused((prevState) =>
            options.length - 1 > prevState ? prevState + 1 : prevState
          );
      },

      default: () => {},
    };

    (keyActions[event.code as KeyCodeEnum] ?? keyActions.default)();
  };

  useEffect(() => {
    setItemFocused(
      isSelected ? options.findIndex((option) => option === itemSelected) : 0
    );
  }, [options, isOpen]);

  return {
    isOpen,
    classLabel,
    isSelected,
    optionsMapped,
    itemSelected,
    toggleMenu,
    closeMenu,
    onKeyDown,
    onChangeOption,
  };
};

export { useComboBoxState };

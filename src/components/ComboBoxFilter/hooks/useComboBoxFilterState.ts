import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Option } from "../../ComboBox/models";
import { KeyCodeEnum } from "../../../enums";
import { UseComboBoxFilterState } from "../models";

const useComboBoxFilterState: UseComboBoxFilterState = ({
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<string | null>(null);
  const [itemFocused, setItemFocused] = useState<number | null>(null);
  const [filterValue, setFilterValue] = useState<string>("");

  const isSelected = itemSelected !== null;
  const ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const optionsMapped: Option[] = useMemo(
    () =>
      options
        .filter((option) =>
          option.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((option, index) => ({
          option,
          selected: option === itemSelected,
          focused: index === itemFocused,
        })),
    [options, itemSelected, itemFocused, filterValue]
  );

  const closeMenu = () => {
    setIsOpen(false);
    setItemFocused(null);
    ref.current!.blur();
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const onChangeOption = (option: string | null) => {
    setFilterValue(option!);
    onChange(option);
    setItemSelected(option);
    closeMenu();
  };

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const keyActions: Record<KeyCodeEnum | "default", () => void> = {
      [KeyCodeEnum.ENTER]: () => {
        if (isOpen && itemFocused !== null) {
          onChangeOption(optionsMapped[itemFocused].option);
        }
      },

      [KeyCodeEnum.ESCAPE]: () => {
        closeMenu();
        handlerOutside();
      },

      [KeyCodeEnum.TAB]: () => {
        closeMenu();
        handlerOutside();
      },

      [KeyCodeEnum.ARROW_UP]: () => {
        isOpen &&
          setItemFocused((prevState) => {
            const currentItem = prevState ?? 0;

            return currentItem > 0 ? currentItem - 1 : prevState;
          });
      },

      [KeyCodeEnum.ARROW_DOWN]: () => {
        isOpen &&
          setItemFocused((prevState) => {
            const maxDisplacement = optionsMapped.length - 1;
            const currentItem = prevState ?? -1;

            return currentItem < maxDisplacement
              ? currentItem + 1
              : currentItem;
          });
      },

      default: () => {},
    };

    (keyActions[event.code as KeyCodeEnum] ?? keyActions.default)();
  };

  const onChangeFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFilterValue(event.target.value);
  };

  const goToFilterInput = () => {
    ref.current!.focus();
  };

  const handlerOutside = () => {
    closeMenu();
    setFilterValue(itemSelected ?? "");
  };

  useEffect(() => {
    setItemFocused(null);
  }, [filterValue]);

  return {
    ref,
    isOpen,
    filterValue,
    isSelected,
    optionsMapped,
    onChangeFilter,
    handlerOutside,
    goToFilterInput,
    onKeyDown,
    onChangeOption,
    openMenu,
  };
};
export { useComboBoxFilterState };

import { FC, RefObject } from "react";
import { ComboBoxItemProps } from "./models";
import { ComboBoxItemsStyles } from "./ComboBoxItem.styles";
import { useComboBoxItemState } from "./hooks/useComboBoxItemState";

const ComboBoxItem: FC<ComboBoxItemProps> = (props) => {
  const { selected, focused, option, className, onChangeOption } = props;
  const { ref } = useComboBoxItemState(props);

  return (
    <ComboBoxItemsStyles
      ref={ref as unknown as RefObject<HTMLLIElement>}
      onClick={() => onChangeOption(option)}
      role={"option"}
      tabIndex={-1}
      className={`${className} ${selected ? "selected" : ""} ${
        focused ? "focused" : ""
      }`}
    >
      {option}
    </ComboBoxItemsStyles>
  );
};

export default ComboBoxItem;

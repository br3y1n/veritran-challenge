import ComboBoxItem from "../ComboBoxItem/ComboBoxItem";
import { FC, RefObject } from "react";
import { ComboBoxItemsContainerProps } from "./models";
import {
  ComboBoxItemsContainerStyles,
  ComboBoxItemsSubContainerStyles,
  NoMatchesStyles,
} from "./ComboBoxItemsContainer.styles";
import { useComboBoxItemsContainerState } from "./hooks/useComboBoxItemsContainerState";

const ComboBoxItemsContainer: FC<ComboBoxItemsContainerProps> = (props) => {
  const { options, onChangeOption, itemsClassname, subContainerClassname } =
    props;
  const { ref } = useComboBoxItemsContainerState(props);

  return (
    <ComboBoxItemsContainerStyles
      ref={ref as unknown as RefObject<HTMLDivElement>}
    >
      <ComboBoxItemsSubContainerStyles
        role={"listitem"}
        tabIndex={-1}
        className={subContainerClassname}
      >
        {options.length > 0 ? (
          options.map(({ option, selected, focused }, index) => (
            <ComboBoxItem
              onChangeOption={onChangeOption}
              option={option}
              key={index}
              focused={focused}
              selected={selected}
              className={itemsClassname}
            />
          ))
        ) : (
          <NoMatchesStyles>No matches found...</NoMatchesStyles>
        )}
      </ComboBoxItemsSubContainerStyles>
    </ComboBoxItemsContainerStyles>
  );
};

export default ComboBoxItemsContainer;

import { useEffect, useRef } from "react";
import { UseComboBoxItemState } from "../models/UseComboBoxItemState.models";

const useComboBoxItemState: UseComboBoxItemState = ({ focused }) => {
  const ref = useRef();

  useEffect(() => {
    if (focused) {
      const {
        offsetParent: parent,
        offsetTop: childrenOffsetMin,
        offsetHeight: childrenHeight,
      } = ref.current as unknown as HTMLLIElement;

      if (parent && childrenOffsetMin !== 0) {
        const parentHeight = (parent as HTMLLIElement).offsetHeight;
        const parentOffsetMin = parent.scrollTop;
        const parentOffsetMax = parent.scrollTop + parentHeight;
        const childrenOffsetMax = childrenOffsetMin + childrenHeight;
        const outMinRange = parentOffsetMin > childrenOffsetMin;
        const outMaxRange = parentOffsetMax < childrenOffsetMax;
        const isScrollable = outMinRange || outMaxRange;

        if (isScrollable) {
          const scrollableValue = outMinRange
            ? childrenOffsetMin
            : childrenOffsetMax - parentHeight;

          parent.scroll({
            left: 0,
            top: scrollableValue,
            behavior: "smooth",
          });
        }
      }
    }
  }, [focused]);

  return { ref };
};

export { useComboBoxItemState };

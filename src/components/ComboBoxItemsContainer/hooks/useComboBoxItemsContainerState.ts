import { useEffect, useRef } from "react";
import { UseComboBoxItemsContainerState } from "../models";

const useComboBoxItemsContainerState: UseComboBoxItemsContainerState = ({
  options,
}) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const {
      offsetTop,
      offsetHeight,
      offsetParent: parent,
    } = ref.current as unknown as HTMLUListElement;

    if (parent) {
      const fullHeight =
        offsetHeight + offsetTop + ((parent as HTMLDivElement).offsetTop ?? 0);
      const scrollableValue = fullHeight - window.innerHeight;

      window.scroll({
        left: 0,
        top: scrollableValue,
        behavior: "smooth",
      });
    }
  }, [options]);

  return { ref };
};

export { useComboBoxItemsContainerState };

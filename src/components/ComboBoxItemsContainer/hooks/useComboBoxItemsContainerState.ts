import { useEffect, useRef } from "react";
import { UseComboBoxItemsContainerState } from "../models/UseComboBoxItemsContainerState.models";

const useComboBoxItemsContainerState: UseComboBoxItemsContainerState = () => {
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
  }, []);

  return { ref };
};

export { useComboBoxItemsContainerState };

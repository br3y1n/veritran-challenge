import { useEffect } from "react";
import { UseOnClickOutside } from "../../models";

const useOnClickOutside: UseOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener: EventListener = (event) => {
      if (ref.current?.contains(event.target as Node)) return;
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export { useOnClickOutside };

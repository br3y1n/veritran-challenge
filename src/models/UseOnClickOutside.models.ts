import { MutableRefObject } from "react";

type UseOnClickOutside = (
  ref: MutableRefObject<HTMLElement | undefined>,
  handler: () => void
) => void;

export { UseOnClickOutside };

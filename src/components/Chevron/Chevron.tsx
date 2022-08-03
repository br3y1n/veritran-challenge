import { FC } from "react";
import { ChevronProps } from "./models";
import { ChevronDown, ChevronUp } from "./Chevron.styles";

const Chevron: FC<ChevronProps> = ({ isUp }) =>
  isUp ? (
    <ChevronUp data-testid="ChevronUp" />
  ) : (
    <ChevronDown data-testid="ChevronDown" />
  );

export default Chevron;

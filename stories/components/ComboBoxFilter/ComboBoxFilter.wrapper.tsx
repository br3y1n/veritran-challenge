import { buildTitle } from "../../utils";
import { IterationsEnum, ModulesEnum, SubmodulesEnum } from "../../enums";
import { ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ComboBoxFilter from "../../../src/components/ComboBoxFilter/ComboBoxFilter";
import { ComboBoxProps } from "../../../src/components/ComboBox/models";

const COMBO_BOX_FILTER_TITLE = buildTitle([
  ModulesEnum.COMPONENTS,
  SubmodulesEnum.ITERATIONS,
  IterationsEnum.ITERATION3,
  ComboBoxFilter,
]);

const COMBO_BOX_FILTER_ARGS_DEFAULT: ComboBoxProps = {
  options: [
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 5",
    "Brayan",
    "Camilo",
    "Arango",
    "Rivera",
  ],
  onChange: action("onChange"),
};

const ComboBoxFilterWrapper: ComponentStory<typeof ComboBoxFilter> = (args) => (
  <ComboBoxFilter {...args} />
);

export {
  ComboBoxFilterWrapper as default,
  COMBO_BOX_FILTER_TITLE,
  COMBO_BOX_FILTER_ARGS_DEFAULT,
};

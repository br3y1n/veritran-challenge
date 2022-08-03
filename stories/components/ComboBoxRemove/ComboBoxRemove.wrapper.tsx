import { buildTitle } from "../../utils";
import { IterationsEnum, ModulesEnum, SubmodulesEnum } from "../../enums";
import { ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ComboBoxRemove from "../../../src/components/ComboBoxRemove/ComboBoxRemove";
import { ComboBoxRemoveProps } from "../../../src/components/ComboBoxRemove/models";

const COMBO_BOX_REMOVE_TITLE = buildTitle([
  ModulesEnum.COMPONENTS,
  SubmodulesEnum.ITERATIONS,
  IterationsEnum.ITERATION2,
  ComboBoxRemove,
]);

const COMBO_BOX_REMOVE_ARGS_DEFAULT: ComboBoxRemoveProps = {
  options: ["H&M", "Zara", "Renuar", "Bershka"],
  onChange: action("onChange"),
};

const ComboBoxRemoveWrapper: ComponentStory<typeof ComboBoxRemove> = (args) => (
  <ComboBoxRemove {...args} />
);

export {
  ComboBoxRemoveWrapper as default,
  COMBO_BOX_REMOVE_TITLE,
  COMBO_BOX_REMOVE_ARGS_DEFAULT,
};

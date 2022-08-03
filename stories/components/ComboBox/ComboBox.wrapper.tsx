import { buildTitle } from "../../utils";
import { IterationsEnum, ModulesEnum, SubmodulesEnum } from "../../enums";
import { ComponentStory } from "@storybook/react";
import ComboBox from "../../../src/components/ComboBox/ComboBox";
import { ComboBoxProps } from "../../../src/components/ComboBox/models";
import { action } from "@storybook/addon-actions";

const COMBO_BOX_TITLE = buildTitle([
  ModulesEnum.COMPONENTS,
  SubmodulesEnum.ITERATIONS,
  IterationsEnum.ITERATION1,
  ComboBox,
]);

const COMBO_BOX_ARGS_DEFAULT: ComboBoxProps = {
  options: ["H&M", "Zara", "Renuar", "Bershka"],
  onChange: action("onChange"),
};

const ComboBoxWrapper: ComponentStory<typeof ComboBox> = (args) => (
  <ComboBox {...args} />
);

export { ComboBoxWrapper as default, COMBO_BOX_TITLE, COMBO_BOX_ARGS_DEFAULT };

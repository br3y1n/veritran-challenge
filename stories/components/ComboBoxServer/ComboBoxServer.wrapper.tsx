import { buildTitle } from "../../utils";
import { IterationsEnum, ModulesEnum, SubmodulesEnum } from "../../enums";
import { ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ComboBoxServer from "../../../src/components/ComboBoxServer/ComboBoxServer";
import { ComboBoxServerProps } from "../../../src/components/ComboBoxServer/models/ComboBoxServer.models";
import { useArgs } from "@storybook/addons";
import { names } from "./names";
import { useState } from "react";

const COMBO_BOX_SERVER_TITLE = buildTitle([
  ModulesEnum.COMPONENTS,
  SubmodulesEnum.ITERATIONS,
  IterationsEnum.ITERATION4,
  ComboBoxServer,
]);

const COMBO_BOX_SERVER_ARGS_DEFAULT: ComboBoxServerProps = {
  options: [],
  onChange: action("onChange"),
  onFetch: action("onFetch"),
};

const ComboBoxServerWrapper: ComponentStory<typeof ComboBoxServer> = (args) => {
  const { onFetch: oldOnFetch } = args;
  const [_, updateArgs] = useArgs();
  const [options, setOptions] = useState<string[]>([]);

  const onFetch = (newName: string) => {
    oldOnFetch(newName);

    const filterOptions = names.filter((name) =>
      name.toLowerCase().includes(newName.toLowerCase())
    );

    console.log("Call server by...", newName);

    setTimeout(() => {
      console.log("response Server.", filterOptions);
      setOptions(filterOptions);
      updateArgs({ options: filterOptions });
    }, 400);
  };

  return <ComboBoxServer {...args} onFetch={onFetch} options={options} />;
};

export {
  ComboBoxServerWrapper as default,
  COMBO_BOX_SERVER_TITLE,
  COMBO_BOX_SERVER_ARGS_DEFAULT,
};

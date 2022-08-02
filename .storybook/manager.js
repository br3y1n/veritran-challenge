import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import Logo from "../public/assets/images/veritranLogo.png";

addons.setConfig({
  theme: create({
    base: "light",
    brandImage: Logo,
  }),
});

import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
import { ModulesEnum } from "../stories/enums";

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [ModulesEnum.DOCUMENT, ModulesEnum.COMPONENTS],
    },
  },
};

export { decorators, parameters };

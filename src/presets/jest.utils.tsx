import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

const renderWithTheme = (component: ReactElement): void => {
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

export { renderWithTheme };

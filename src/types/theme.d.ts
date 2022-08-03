import "styled-components";
import { theme } from "../theme/theme";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}


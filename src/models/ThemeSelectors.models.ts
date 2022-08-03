import { DefaultTheme, ThemedStyledProps } from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ThemeSelectors = Record<
  string,
  (
    props: ThemedStyledProps<
      Pick<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        "key" | keyof HTMLAttributes<HTMLDivElement>
      >,
      DefaultTheme
    >
  ) => string
>;

export { ThemeSelectors };

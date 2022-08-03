import { ThemeSelectors } from "../models";

const selectors: ThemeSelectors = {
  selectColorPrimary: ({ theme }) => theme.colors.primary,
  selectColorSecondary: ({ theme }) => theme.colors.secondary,
  selectColorWhite: ({ theme }) => theme.colors.neutrals.white,
  selectColorGrey1: ({ theme }) => theme.colors.neutrals.grey1,
  selectColorGrey2: ({ theme }) => theme.colors.neutrals.grey2,
  selectColorGrey3: ({ theme }) => theme.colors.neutrals.grey3,
  selectColorGrey4: ({ theme }) => theme.colors.neutrals.grey4,
  selectColorGrey5: ({ theme }) => theme.colors.neutrals.grey5,
  selectFontFamily: ({ theme }) => theme.fonts.family,
  selectFontSizeSmall: ({ theme }) => theme.fonts.sizes.small,
  selectFontSizeMedium: ({ theme }) => theme.fonts.sizes.medium,
  selectFontSizeLarge: ({ theme }) => theme.fonts.sizes.large,
};

export const {
  selectColorPrimary,
  selectColorSecondary,
  selectColorWhite,
  selectColorGrey1,
  selectColorGrey2,
  selectColorGrey3,
  selectColorGrey4,
  selectColorGrey5,
  selectFontFamily,
  selectFontSizeSmall,
  selectFontSizeMedium,
  selectFontSizeLarge,
} = selectors;

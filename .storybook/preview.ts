// .storybook/preview.js
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import theme  from '../theme';

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    theme
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '../../theme'
import {  ThemeProvider } from '@mui/material/styles';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Header /><Component {...pageProps} /></ThemeProvider>
}

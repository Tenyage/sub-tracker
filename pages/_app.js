import theme from '../theme/theme.js'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>SubTracker</title>
    </Head>
    <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
    </>
  )
}

export default MyApp

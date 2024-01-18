import '@/styles/globals.css'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'
import type { AppProps } from 'next/app'

export default function App(props: AppProps) {
  const { pageProps, Component } = props

  return (
    <AppCacheProvider {...props}>
      <Component {...pageProps} />)
    </AppCacheProvider>
  )
}
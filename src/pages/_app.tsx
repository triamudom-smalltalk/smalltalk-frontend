import "@styles/tailwind.css"
import "@styles/fonts.css"
import type { AppProps } from "next/app"
import AppHeader from "@components/common/Header"
import MobileContainer from "@components/common/MobileContainer"
import Navigation from "@components/common/Navigation"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <Navigation />
    </>
  )
}
export default MyApp

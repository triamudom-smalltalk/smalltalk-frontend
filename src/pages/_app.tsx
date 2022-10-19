import "@styles/tailwind.css"
import "@styles/fonts.css"
import type { AppProps } from "next/app"
import AppHeader from "@components/common/Header"
import Navigation from "@components/common/Navigation"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="font-display">
      <AppHeader />
      <Component {...pageProps} />
      <Navigation />
    </main>
  )
}
export default MyApp

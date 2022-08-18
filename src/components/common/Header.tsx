import SmallTalkLogo from "@vectors/Logo"
import Link from "next/link"

const AppHeader = () => {
  return (
    <header className="bg-gray-700 px-2 pt-6 pb-10 w-full flex justify-center items-center">
      <Link href="/" passHref>
        <a>
          <SmallTalkLogo />
        </a>
      </Link>
    </header>
  )
}

export default AppHeader

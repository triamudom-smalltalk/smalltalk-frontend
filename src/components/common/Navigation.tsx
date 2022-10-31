import { ClockIcon, HomeIcon, MailIcon, UserGroupIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { useMemo } from "react"
import clsx from "clsx"
import Link from "next/link"

const Navigation = () => {
  const router = useRouter()

  const location = useMemo(() => {
    return `/${router.pathname.split("/")[1]}`
  }, [router])

  const getStyles = (path: string) => {
    if (location === path) {
      return "text-gray-400"
    } else {
      return "text-gray-200 hover:text-gray-300"
    }
  }

  return (
    <nav
      style={{
        background: "#FFFFFF",
        boxShadow: "12px -12px 12px -12px rgba(0, 0, 0, 0.15)",
      }}
      className="fixed bottom-0 z-50 px-8 py-6 w-full bg-white rounded-t-3xl border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <HomeIcon className={clsx("w-6 h-6", getStyles("/"))} />
          </a>
        </Link>
        <Link href="/mentors" passHref>
          <a>
            <UserGroupIcon className={clsx("w-6 h-6", getStyles("/mentors"))} />
          </a>
        </Link>
        <Link href="/appoint" passHref>
          <a>
            <ClockIcon className={clsx("w-6 h-6", getStyles("/appoint"))} />
          </a>
        </Link>
        <Link href="/chat" passHref>
          <a>
            <MailIcon className={clsx("w-6 h-6", getStyles("/chat"))} />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation

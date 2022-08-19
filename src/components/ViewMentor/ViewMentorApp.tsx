import { ArrowLeftIcon, BriefcaseIcon, CalendarIcon, IdentificationIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import Link from "next/link"

const ContactSection = () => {
  return (
    <div className="rounded-lg border border-gray-100 bg-white shadow-sm py-4 px-6 mt-6">
      <div className="flex items-center gap-2">
        <IdentificationIcon className="w-6 h-6 text-gray-700" />
        <p>Contact</p>
      </div>

      <div className="mt-6 text-gray-700 font-light">
        <p>Tel: 083-xxx-xxxx</p>
      </div>
    </div>
  )
}

const WorkExperienceSection = () => {
  return (
    <div className="rounded-lg border border-gray-100 bg-white shadow-sm py-4 px-6 mt-6">
      <div className="flex items-center gap-2">
        <BriefcaseIcon className="w-6 h-6 text-gray-700" />
        <p className="">Work Experience</p>
      </div>

      <div className="flex flex-col gap-3 mt-6 text-gray-700 font-light">
        <div className="flex flex-col gap-3">
          <p className="">work place #1</p>
          <p className="font-light">สวัสดีครับ</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="">work place 21</p>
          <p className="font-light">สวัสดีครับ</p>
        </div>
      </div>
    </div>
  )
}

interface DateElementProps {
  day: string
  date: number
  month: string
  selected?: boolean
}

const DateElement = ({ day, date, month, selected }: DateElementProps) => {
  return (
    <button
      className={clsx(
        "flex flex-col items-center text-gray-700 transition-colors hover:bg-gray-100 p-4 rounded-2xl",
        selected && "bg-gray-100"
      )}
    >
      <p className="text-xs font-light">{day}</p>
      <p className="text-lg">{date}</p>
      <p className="text-xs font-light">{month}</p>
    </button>
  )
}

interface SessionElementProps {
  time: string
  date: string
  booked?: boolean
}

const SessionElement = ({ time, date, booked }: SessionElementProps) => {
  return (
    <button className="rounded-lg text-left w-full border border-l-8 border-gray-700">
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg">{time}</p>
          <p className="text-sm font-light">{booked && "Booked"}</p>
        </div>
        <p className="font-light">{date}</p>
      </div>
    </button>
  )
}

const ViewMentorApp = () => {
  return (
    <main className="h-full flex flex-col gap-4">
      <section className="bg-gray-700 pb-10 px-6 relative -top-4">
        <Link href="/mentors" passHref>
          <a className="flex items-center gap-2">
            <ArrowLeftIcon className="w-5 h-5 text-white" />
            <p className="text-white">Back</p>
          </a>
        </Link>
      </section>

      <section className="-top-16 relative pb-36 px-6">
        <div className="inset-x-1/2 -translate-x-1/2 relative rounded-full w-20 h-20 bg-[#B6C5D7]" />

        <div className="flex flex-col pt-4 items-center justify-center">
          <p className="text-lg text-gray-700">เรียนเด่น เล่นดี</p>
          <p className="font-light text-gray-700">จิตแพทย์</p>
        </div>

        <p className="font-light text-gray-700 mt-6">คำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคม</p>

        <ContactSection />
        <WorkExperienceSection />

        <h2 className="mt-6 mb-4">Available Sessions</h2>

        <section className="flex items-center gap-3 px-6 w-full overflow-x-auto">
          <div className="pr-4">
            <CalendarIcon className="w-6 h-6 text-gray-700" />
          </div>

          <DateElement day="THU" date={10} month="SEP" selected />
          <DateElement day="THU" date={11} month="SEP" />
          <DateElement day="THU" date={12} month="SEP" />
          <DateElement day="THU" date={13} month="SEP" />
          <DateElement day="THU" date={14} month="SEP" />
          <DateElement day="THU" date={15} month="SEP" />
          <DateElement day="THU" date={16} month="SEP" />
          <DateElement day="THU" date={17} month="SEP" />
        </section>

        <section className="flex flex-col items-center justify-center px-2 gap-4 pt-6">
          <SessionElement time="20.00-20.30 น." date="11 SEP 2022" booked />
          <SessionElement time="20.00-20.30 น." date="11 SEP 2022" />
          <SessionElement time="20.00-20.30 น." date="11 SEP 2022" />
        </section>
      </section>
    </main>
  )
}

export default ViewMentorApp

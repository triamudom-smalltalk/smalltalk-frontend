import { CalendarIcon } from "@heroicons/react/solid"
import clsx from "clsx"

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

const SessionElement = () => {
  return (
    <button className="rounded-lg text-left w-full border border-gray-700">
      <div className="flex flex-col p-4">
        <p className="text-lg">20.00-20.30 น.</p>
        <p className="font-light">6 SEP 2021</p>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white">
        <div className="w-5 h-5 bg-gray-50 rounded-full" />
        <p className="">เรียนเด่น เล่นดี</p>
        <p className="font-light">จิตแพทย์</p>
      </div>
    </button>
  )
}

const AppointApp = () => {
  return (
    <main className="h-full flex flex-col gap-4">
      <section className="bg-gray-700 pb-6 px-6">
        <p className="text-white text-xl">Search for sessions</p>
      </section>

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

      <section className="flex flex-col items-center justify-center px-4 gap-4 pt-6">
        <SessionElement />
        <SessionElement />
        <SessionElement />
      </section>
    </main>
  )
}

export default AppointApp

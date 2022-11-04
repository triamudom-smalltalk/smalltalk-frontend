import { CalendarIcon } from "@heroicons/react/solid"
import clsx from "clsx"

// interface DateElementProps {
//   day: string
//   date: number
//   month: string
//   selected?: boolean
// }

const DateElement = ({
  day,
  date,
  month,
  selected,
}: {
  day: string
  date: number
  month: string
  selected?: boolean
}) => {
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

const SessionElement = ({
  time,
  date,
  month,
  year,
  booked,
  mentorName,
  position,
}: {
  time: string
  date: number
  month: string
  year: number
  booked?: boolean
  mentorName: string
  position: string
}) => {
  return (
    <button className="rounded-xl text-left w-full shadow-xl ">
      <div className="flex flex-col">
        <div className="flex flex-col p-4 rounded-t-xl">
          <div className="flex flex-row items-center justify-between">
            <p className="text-lg">{time}</p>
            <p className="text-sm">{booked && "Booked"}</p>
          </div>
          <p className="font-light text-sm">
            {date} {month} {year}
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-b-xl ">
          <div className="w-5 h-5 bg-gray-50 rounded-full" />
          <p className="">{mentorName}</p>
          <p className="font-light">{position}</p>
        </div>
      </div>
    </button>
  )
}

// const DateElement = ({ day, date, month, selected }: DateElementProps) => {
//   return (
// <button
//   className={clsx(
//     "flex flex-col items-center text-gray-700 transition-colors hover:bg-gray-100 p-4 rounded-2xl",
//     selected && "bg-gray-100"
//   )}
// >
//   <p className="text-xs font-light">{day}</p>
//   <p className="text-lg">{date}</p>
//   <p className="text-xs font-light">{month}</p>
// </button>
//   )
// }

// const SessionElement = ({ date, month, year }: SessionElementProps) => {
// return (
//   <button className="rounded-xl text-left w-full shadow-xl ">
//     <div className="flex flex-col">
//       <div className="flex flex-col p-4 rounded-t-xl">
//         <p className="text-lg">20.00-20.30 น.</p>
//         <p className="font-light text-sm">{date} {month} {year}</p>
//       </div>

//       <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-b-xl ">
//         <div className="w-5 h-5 bg-gray-50 rounded-full" />
//         <p className="">เรียนเด่น เล่นดี</p>
//         <p className="font-light">จิตแพทย์</p>
//       </div>
//     </div>
//   </button>
//   )
// }

const AppointApp = () => {
  return (
    <main className="h-full flex flex-col pb-24">
      <section className="bg-gray-700 pb-6 px-6">
        <p className="text-white text-xl">Search for sessions</p>
      </section>

      <section className="flex items-center gap-3 px-6 w-full overflow-x-auto py-2">
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

      <section className="flex flex-col items-center justify-center px-4 gap-4 pt-6 bg-gray-100">
        <SessionElement
          time="20.00-20.30 น."
          date={12}
          month="SEP"
          year={2022}
          mentorName="เรียนเด่น เล่นดี"
          position="จิตแพททย์"
          booked
        />
        <SessionElement
          time="20.00-20.30 น."
          date={12}
          month="SEP"
          year={2022}
          mentorName="เรียนเด่น เล่นดี"
          position="จิตแพททย์"
        />
        <SessionElement
          time="20.00-20.30 น."
          date={12}
          month="SEP"
          year={2022}
          mentorName="เรียนเด่น เล่นดี"
          position="จิตแพททย์"
        />
      </section>
    </main>
  )
}

export default AppointApp

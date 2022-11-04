import { ChatAltIcon, DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import Link from "next/link"

interface AppoitnmentSectionProps {
  title?: string
}

const AppointmentSection = ({ title }: AppoitnmentSectionProps) => {
  return (
    <section className="flex flex-col gap-2 bg-white rounded-2xl shadow-lg w-full">
      <div className="flex gap-2 items-center px-6 pt-4 pb-2">
        <div className="flex flex-grow flex-col gap-1 text-gray-700 font-light">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <VideoCameraIcon className="w-8 h-8 text-gray-700" />
              <p className="text-lg">{title && "12 March 2022"}</p>
            </div>
            <DotsHorizontalIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8" />
              <p className="">20.00-20.30 น.</p>
            </div>
            <p className="">2 Days Left</p>
          </div>
        </div>
      </div>

      <hr className="text-gray-50 mx-4 border" />

      <div className="flex gap-2 items-center text-lg px-6 py-2">
        <div className="w-6 h-6 mr-2 bg-gray-700 rounded-full" />
        <p className="">เรียนเด่น เล่นดี</p>
        <p className="font-light">จิตแพทย์</p>
      </div>

      <Link href="/chat" passHref>
        <a className="bg-gray-700 text-white flex px-6 py-5 rounded-b-xl items-center justify-center">
          <div className="flex items-center gap-2">
            <ChatAltIcon className="w-6 h-6 text-white" />
            <p>เริ่มสนทนา</p>
          </div>
        </a>
      </Link>
    </section>
  )
}

export default AppointmentSection

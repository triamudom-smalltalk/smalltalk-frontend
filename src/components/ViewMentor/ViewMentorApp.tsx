import { ArrowLeftIcon, BriefcaseIcon, IdentificationIcon } from "@heroicons/react/solid"
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
          <p className="text-lg text-gray-700">ชัยชาญ ทหารของพระราชา</p>
          <p className="font-light text-gray-700">จิตแพทย์</p>
        </div>

        <p className="font-light text-gray-700 mt-6">คำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคม</p>

        <ContactSection />
        <WorkExperienceSection />

        <h2 className="mt-6">Available Sessions</h2>
      </section>
    </main>
  )
}

export default ViewMentorApp

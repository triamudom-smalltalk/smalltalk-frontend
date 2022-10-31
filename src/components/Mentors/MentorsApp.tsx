import Link from "next/link"

const MentorCard = () => {
  return (
    <Link href="/mentors/sample" passHref>
      <a>
        <div className="flex flex-col gap-2 rounded-xl overflow-hidden bg-white shadow-xl">
          <div className="h-20 w-full bg-gray-700" />

          <div className="-top-12 left-[50%] translate-x-[-50%] relative rounded-full w-20 h-20 bg-[#B6C5D7]" />

          <div className="-top-10 relative flex flex-col gap-2 px-4 -mt-2">
            <div className="flex flex-col pb-4">
              <p className="text-gray-700 font-medium text-center">เรียนเด่น เล่นดี</p>
              <p className="text-gray-700 font-light text-center">จิตแพทย์</p>
            </div>

            <p className="text-gray-700 font-light">คำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคมคำคม</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

const MentorsApp = () => {
  return (
    <main className="-top-6 relative rounded-t-3xl bg-gray-50 h-full flex flex-col gap-4 py-6 px-6">
      <h1 className="text-gray-700 text-center font-bold text-2xl py-5">Mentors</h1>

      <section className="flex flex-col items-center justify-center gap-4 pb-24">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </section>
    </main>
  )
}

export default MentorsApp

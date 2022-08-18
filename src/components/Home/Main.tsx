import { ChatIcon, DotsHorizontalIcon, UserCircleIcon, VideoCameraIcon } from "@heroicons/react/solid"
import AppointmentSection from "./Cards/AppointmentSection"
import UserSection from "./Cards/UserSection"

const AppMain = () => {
  return (
    <main className="-top-6 relative rounded-t-3xl bg-gray-50 h-full flex flex-col gap-4 py-6 px-6">
      <UserSection />
      <h2 className="text-lg text-gray-700">Upcoming</h2>

      <section className="flex flex-col items-center justify-center gap-4 pb-24">
        <AppointmentSection title="12 March 2022" />
        <AppointmentSection title="14 March 2022" />
        <AppointmentSection title="29 October 2022" />
      </section>
    </main>
  )
}

export default AppMain

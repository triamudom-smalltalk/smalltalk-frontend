import { UserCircleIcon } from "@heroicons/react/solid"

const UserSection = () => {
  return (
    <section className="flex flex-col gap-2 bg-white p-6 rounded-xl shadow-sm">
      <div className="flex gap-2 items-center">
        <UserCircleIcon className="w-8 h-8 text-gray-700" />
        <p className="text-gray-700">เพนกวินนิรนาม</p>
      </div>

      <hr className="text-gray-50" />

      <div className="flex gap-2 items-center">
        <div className="w-8 h-8" />
        <div className="flex flex-col gap-1 text-gray-400 font-light">
          <p className="">piradonta@gmail.com</p>
          <p className="">นายพีรดนย์ สาเงิน | 59574</p>
        </div>
      </div>
    </section>
  )
}

export default UserSection

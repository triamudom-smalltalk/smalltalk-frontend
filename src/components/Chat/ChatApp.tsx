const ChatBox = () => {
  return (
    <div className="p-6 flex flex-row gap-4 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex-none w-14 h-14 rounded-lg bg-gray-200" />
      <div className="flex flex-row justify-between gap-4">
        <div className="flex-1 flex-col gap-2">
          <p className="text-gray-700 font-semibold">เรียนเด่น เล่นดี</p>
          <p className="text-gray-400 min-w-full font-light break-words text-ellipsis overflow-hidden">
          สวัสดีครับ วันนี้เป็นยังไงบ้าง มีอะไรให้ช่วยไหม บอกได้นะ
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-700 text-right text-sm ">5 min</p>
          <div className="w-8 h-8 flex place-self-end items-center justify-center rounded-full bg-[#57C2A2]">
            <p className="text-white text-sm">1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ChatApp = () => {
  return (
    <main className="-top-6 relative rounded-t-3xl bg-gray-100 h-full flex flex-col gap-4 py-6 px-6">
      <h1 className="text-gray-700 text-center font-bold text-2xl py-5">ข้อความ</h1>

      <section className="flex flex-col items-center justify-center gap-4 pb-24">
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
      </section>
    </main>
  )
}

export default ChatApp

const ChatBox = () => {
  return (
    <div className="p-6 flex gap-4 bg-white rounded-xl shadow-sm">
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex-grow" />
      <div className="flex justify-between flex-grow">
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 font-semibold">เรียนเด่น เล่นดี</p>
          <p className="text-gray-400 font-light">สวัสดีครับ วันนี้เป็นยังไงบ้าง มีอะไรให้ช่วยไหม บอกได้นะ</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-gray-700 text-right text-sm">5 min</p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#57C2A2]">
            <p className="text-white text-sm">1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ChatApp = () => {
  return (
    <main className="-top-6 relative rounded-t-3xl bg-gray-50 h-full flex flex-col gap-4 py-6 px-6">
      <h1 className="text-gray-700 text-lg text-center">ข้อความ</h1>

      <section className="flex flex-col items-center justify-center gap-4 pb-24">
        <ChatBox />
        <ChatBox />
        <ChatBox />
      </section>
    </main>
  )
}

export default ChatApp

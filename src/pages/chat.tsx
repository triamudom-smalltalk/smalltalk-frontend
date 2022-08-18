import ChatApp from "@components/Chat/ChatApp"
import { DescribeRoute } from "@components/Meta/DescribeRoute"

const Chat = () => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <ChatApp />
    </DescribeRoute>
  )
}

export default Chat

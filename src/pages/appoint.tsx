import AppointApp from "@components/Appoint/AppointApp"
import { DescribeRoute } from "@components/Meta/DescribeRoute"

const Home = () => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <AppointApp />
    </DescribeRoute>
  )
}

export default Home

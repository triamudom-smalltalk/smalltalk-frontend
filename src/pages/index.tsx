import { DescribeRoute } from "@components/Meta/DescribeRoute"
import AppMain from "@components/Home/Main"

const Home = () => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <AppMain />
    </DescribeRoute>
  )
}

export default Home

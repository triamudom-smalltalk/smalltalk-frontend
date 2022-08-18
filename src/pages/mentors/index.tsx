import MentorsApp from "@components/Mentors/MentorsApp"
import { DescribeRoute } from "@components/Meta/DescribeRoute"

const Mentors = () => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <MentorsApp />
    </DescribeRoute>
  )
}

export default Mentors

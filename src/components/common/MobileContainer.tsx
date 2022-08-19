import { ReactElement } from "react"

interface MobileContainerProps {
  children?: ReactElement | ReactElement[]
}

const MobileContainer = ({ children }: MobileContainerProps) => {
  return (
    <div className="bg-gray-500 flex justify-center items-center min-h-screen font-display">
      <div
        className="relative border border-gray-600 shadow-md w-full h-screen md:w-96 md:h-[36rem] bg-gray-50"
        style={{
          transform: "translateZ(0)",
        }}
      >
        <div className="overflow-auto w-full h-full">{children}</div>
      </div>
    </div>
  )
}

export default MobileContainer

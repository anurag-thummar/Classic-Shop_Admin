import React from 'react'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[calc(100vh-49px)] bg-blue-50 overflow-auto ">
      {children}
    </div>
  )
}

export default PageWrapper
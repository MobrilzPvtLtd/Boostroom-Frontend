import React from 'react'

function TitleBar({title}) {
  return (
    <>
      <h2 className="text-2xl font-bold w-fit text-slate-100 px-40 mb-6 pb-3 border-b border-orange-300">
      {title}
          </h2>
    </>
  )
}

export default TitleBar

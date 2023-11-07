import React, { type ReactElement } from 'react'
import TextEffect from './TextEffect'
import TextEffect2 from './TextEffect2'

function Title({text}: {text: string}): ReactElement {
  return (
    <div className="flex w-full text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-6xl font-extrabold pt-8 pb-10">
      <TextEffect {...{text}}/>
    </div>
  )
}

export default Title
import React from 'react'

const ButtonPrimary = ({text}) => {
  return (
    <h2 className="text-sm md:text-lg font-semibold  mb-4 bg-accent self-center text-black py-2 px-5 rounded-full bg-gradient-to-b from-[#ffdb4d] to-accent drop-shadow-lg shadow-accent/50">{text}</h2>
  )
}

export default ButtonPrimary

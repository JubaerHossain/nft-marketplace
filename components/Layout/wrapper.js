import React from 'react'
import Footer from './Footer'
import { Header } from './Headers'

export default function Wrapper({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

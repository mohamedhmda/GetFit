import React, { useState } from 'react'
import Footermob from '../components/footer/footermob'
import Header from '../components/header/header'
import Navbar from '../components/nav/navbar'
import Plans from '../components/plans/plans'
import Team from '../components/team/team'
import Testimonials from '../components/testimonials/testimonials'

const HomePage = () => {
  const [modal, setModal]= useState(false)
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <Navbar modal={modal} setmodal={handleModal} />
      <Header modal={modal} setmodal={handleModal} />
      <Team />
      <Plans />
      <Testimonials />
      <Footermob />
    </>
  )
}

export default HomePage
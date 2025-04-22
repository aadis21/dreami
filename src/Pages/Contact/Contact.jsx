import React from 'react'
import Header from '../Global/Header/Header'
import contact from '../../assets/Header/contact.png';
import Getintouch from '../Global/Form/Getintouch';
import Map from './components/map';
import ContactInfo from './components/ContactInfo';
import GalileoDesign from './components/s';

export default function Contact() {
  return (
    <>
      <Header title="CONTACT US" subtitle="Feel free to reach out to us for any inquiries or support. We are here to help! Let us know how we can assist you.  " imageSection={<img src={contact} alt="contact" />} />
      <Getintouch />
      <ContactInfo />
      <Map />
      {/* <GalileoDesign /> */}
    </>

  )
}

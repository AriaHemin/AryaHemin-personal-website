import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm (){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_44dvuwj', 'template_fluyuqm', form.current, 'MYcLSht2bA80m_jsB')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='flex flex-col px-10 py-8 bg-black' ref={form} onSubmit={sendEmail}>
      <label className='text-white' >Name</label>
      <input  className='p-1 rounded' type="text" name="user_name" />
      <label className='text-white' >Email</label>
      <input className='p-1 rounded' type="email" name="user_email" />
      <label className='text-white' >Message</label>
      <textarea className='p-1 rounded' name="message" />
      <input className='text-white my-3 font-bold border-2 rounded p-2 bg-[#1a1a1a] '  type="submit" value="Send" />
      <p className='font-bold text-white' >my email : ariahemin@gmail.com</p>
    </form>
  );
};
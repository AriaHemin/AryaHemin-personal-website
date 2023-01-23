import React from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="flex flex-col justify-items-center items-center ">
      <h1 className="m-12">contact me</h1>
      <form onSubmit={onSubmit}>
        <div className="">
          <label className="" htmlFor="name">
            Name
          </label><br/>
          <input className="text-black" type="text" id="name" required />
        </div>
        <div className="">
          <label className="" htmlFor="email">
            Email
          </label><br/>
          <input className="text-black" type="email" id="email" required />
        </div>
        <div className="">
          <label className="form-label" htmlFor="message">
            Message
          </label><br/> 
          <textarea className="text-black" id="message" required />
        </div>
        <button className="" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm
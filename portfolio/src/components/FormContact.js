import "./FormStyles.css"
import emailjs from 'emailjs-com';
import React, { useRef } from 'react'

const FormContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_2r58sn7', 'template_fvf6ge5', form.current, 'CqfDucbcJK0LdVDkW')
      .then((result) => {
          alert("Thank you for your email! I will contacting you soon!");
        
      }, (error) => {
          console.log(error.text);
      });
  };
 
 
 
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text" name="asunto"></input>
        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type your message here"/>
        <button type="submit" value="Send" className="btn">Submit</button>
        </form>
    </div>
  )
}

export default FormContact;
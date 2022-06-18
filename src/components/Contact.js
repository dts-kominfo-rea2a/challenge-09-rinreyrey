// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ name, phone, email, photo }) => {
    return (
        <div className='contacts-card'>
            <div className='img-container'>
                <img className='contact-photo' src={photo} alt='Profile'></img>
            </div>
            <div className='data-container'>
                <h4 className='contact-name'>{name}</h4>
                <p className='contact-phone'>{phone}</p>
                <p className='contact-email'>{email}</p>
            </div>
        </div>
    )
}

export default Contact;
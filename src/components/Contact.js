// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {
    return (
        <div className='contacts-card'>
            <div className='img-container'>
                <img className='contact-photo' src={data.photo} alt='Profile'></img>
            </div>
            <div className='data-container'>
                <h4 className='contact-name'>{data.name}</h4>
                <p className='contact-phone'>{data.phone}</p>
                <p className='contact-email'>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;
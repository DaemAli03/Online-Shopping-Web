import React from 'react';
import './Message.css';
export default function Message() {
return (
    <>
        <div className="message">
            <h1>
                Send Your Feedback
            </h1>
            <input className='i1' type='text' placeholder='Your Name' /><br/>
            <input className='i2' type='text' placeholder='Your Email' /><br/>
            <input className='i3' type='text' placeholder='Subject' /><br/>
            <input className='i4' type='text' placeholder='Message' /><br/>
            <button>Send Message</button>
        </div>
    </>
)
}

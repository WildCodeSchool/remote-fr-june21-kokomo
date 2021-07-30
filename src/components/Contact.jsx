import { useState } from 'react';

import '.././Contact.css';

const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [send, setSend] = useState([])

    const validateForm = (e) => {
        e.preventDefault()
        const result = [" Le message a bien été envoyé avec les infos :", firstName, lastName, email, message]
        setSend(result)
    }


    return (
        <div className='contact-container'>
            <form className='contact-form'>
                <div className='question'>
                    <label>
                        <input className='contact-input'
                            type="text"
                            name="firtName"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="UGOLINI"
                        />
                    </label>
                </div>
                <div className='question'>
                    <label>
                        <input className='contact-input'
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Maria"
                        />
                    </label>
                </div>
                <div className='question'>
                    <label>
                        <input className='contact-input'
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ugolini.maria@gmail.com"
                        />
                    </label>
                </div>

                <div className='question'>
                    <label htmlFor="c_content">Message</label>
                    <textarea
                        type="Message"
                        name="c_content"
                        id="c_content"
                        onChange={(e) => setMessage(e.target.value)}
                        cols="35"
                        rows="7"></textarea>
                </div>

                <div className='question'>
                    <label>
                        <input
                            type="submit"
                            name="submit"
                            value="Submit"
                            onClick={(e) => validateForm(e)}
                        />
                    </label>
                </div>
            </form>
            <div className='map'>
                {send.map(info => < div > {info}</div>)}</div>
        </div >
    )
}

export default Contact;

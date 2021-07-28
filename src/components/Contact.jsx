import { useState } from 'react';

const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <form >
            <input
                type="text"
                name="firtName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="UGOLINI"
            />

            <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Maria"
            />

            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ugolini.maria@gmail;fr"
            />

            <input type="submit" name="submit" value="submit" />
        </form>
    )
}

export default Contact;

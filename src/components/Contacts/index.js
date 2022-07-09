import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import "./style.css"
function Contats() {
    const [contacts, setContacts] = useState([
        {
            fullname: 'Mahmut Hüdayi',
            phone_number: "05526054627"
        },
        {
            fullname: 'Ali',
            phone_number: "05526272727"
        },
        {
            fullname: 'veli',
            phone_number: "05526464646"
        },
        {
            fullname: 'cemil',
            phone_number: "05526545454"
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contats
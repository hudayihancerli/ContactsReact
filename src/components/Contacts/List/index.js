import { useState } from 'react'

function List({ contacts }) {

    const [filterText, setFilterText] = useState('');

    const filtired = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        )
    })

    console.log("filtired : ", filtired);

    return (
        <div>
            <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <ul className='list'>
                <li id='contactsNavbar'><span>Fullname</span><span>Phone</span></li>
                {
                    filtired.map((contact, index) => (
                        <li key={index}><span>{contact.fullname}</span>
                            <span>{contact.phone_number}</span></li>
                    ))
                }
            </ul>

            <p>Total contacts: {filtired.length}</p>

        </div >
    )
}

export default List
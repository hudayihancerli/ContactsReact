import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }
function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form])

    }

    return (
        <form onSubmit={onSubmit}>
            <input name="fullname" placeholder='Fullname' value={form.fullname} onChange={onChangeInput} />
            <br />
            <input name="phone_number" placeholder='Phone' value={form.phone_number} onChange={onChangeInput} />
            <br />
            <button>ADD</button>
        </form>
    )
}

export default Form
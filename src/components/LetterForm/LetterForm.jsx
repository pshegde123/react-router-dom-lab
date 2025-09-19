import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    mailboxId: 0,
    recipient: '',
    message: '',
};
const LetterForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addLetter(formData);
        console.log("formData = ", formData);
        setFormData(initialState);
        navigate(`/mailboxes/${formData.mailboxId}`);
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };
    return (
        <main>
            <h2>New Letter</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mbox">Select a Mailbox:</label>
                <select
                    id="mailboxId"
                    name="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                >
                    {
                        props.mailboxes.map((mbox) => {
                            return <option key={mbox._id} value={mbox._id}> {mbox._id} </option>
                        })

                    }
                </select>
                <label htmlFor="name">Recipient</label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                />
                <label htmlFor="height">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    cols={10}
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default LetterForm;

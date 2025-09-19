import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    _id: 0,
    size: '',
    owner: '',
};
const MailBoxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };
    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter a Boxholder:</label>
                <input
                    type="text"
                    id="owner"
                    name="owner"
                    value={formData.owner}
                    onChange={handleChange}
                />
                <label htmlFor="size">Select a Box Size:</label>
                <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default MailBoxForm;

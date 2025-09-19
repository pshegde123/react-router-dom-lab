import { useParams } from "react-router";

const MailBoxDetails = (props) => {
    console.log("props = ", props);

    const { mailboxId } = useParams();
    //console.log('mailboxId:', mailboxId);

    const singleMbox = props.mailboxes.find((box) => (
        box._id === Number(mailboxId)
    ));

    const selectedLetters = props.letters.filter((letter) => (
        letter.mailboxId === Number(mailboxId)
    ));
    console.log("selectedLetters = ", selectedLetters);
    return (
        <div>
            <h2>Mailbox Details</h2>
            <dl className="mail-box">
                <dt>ID:</dt>
                <dd>{singleMbox._id}</dd>
                <dt>Box Owner:</dt>
                <dd>{singleMbox.owner}</dd>
                <dt>Box Size:</dt>
                <dd>{singleMbox.size}</dd>
                {
                    selectedLetters.map((letter) => {
                        return (
                            <div key={letter.mailboxId} className="letter">
                                <h3>Letter ID: {letter.mailboxId}</h3>
                                <p>Recipient: {letter.recipient}</p>
                                <p>Message: {letter.message}</p>
                            </div>
                        )
                    })
                }
            </dl>
        </div>
    )
}

export default MailBoxDetails;

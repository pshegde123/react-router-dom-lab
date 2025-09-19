import { Link } from "react-router";

const MailBoxList = (props) => {
  //console.log("props.mailboxes = ", props.mailboxes);
  return (
    <div>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailboxes.map((currentBox) => (
          //console.log(currentBox)
          <li key={currentBox._id}>
            <Link to={`/mailboxes/${currentBox._id}`}>
              {currentBox.owner}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MailBoxList;

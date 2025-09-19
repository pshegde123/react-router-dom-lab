// src/App.jsx
import NavBar from './components/NavBar/NavBar';
import MailBoxList from './components/MailboxList/MailBoxList';
import MailBoxDetails from './components/MailBoxDetails/MailBoxDetails';
import MailBoxForm from './components/MailBoxForm/MailBoxForm';
import LetterForm from './components/LetterForm/LetterForm';
import { Route, Routes } from 'react-router';
import { useState } from 'react';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }
  const addLetter = (newLetter) => {
    //newLetter.mailboxId = letters.length + 1;
    setLetters([...letters, newLetter]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path="/mailboxes" element={<MailBoxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailBoxForm addBox={addBox} />} />
        <Route path="/new-letter" element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailBoxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
      </Routes >
    </>
  )
};

export default App;

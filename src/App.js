import './App.css';
import { ChatEngine } from 'react-chat-engine';

require('dotenv').config();

console.log('ProcessID = ', process.env.REACT_APP_PROJECT_ID);

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID={process.env.PROJECT_ID}
      userName=''
      userSecret=''
    />
  );
};

export default App;

import './App.css';
import Message from './components/Message';
import Userlist from './components/Userlist';
import ChatScreen from './components/ChatScreen';
function App() {
  return (
    <div className="wrapper">
      <Userlist/>
      <ChatScreen/>
    </div>
  );
}

export default App;

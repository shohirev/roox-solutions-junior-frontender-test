import 'regenerator-runtime/runtime.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StateToggleContext, UIProcessContext } from './contexts/index.jsx';
import Panel from './components/Panel.jsx';
import Board from './components/Board.jsx';
import Profile from './components/Profile.jsx';

const App = () => {
  const [users, setUsers] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [uiProcess, setUIProcess] = useState('showCards');
  const [usersShowOrder, setUsersShowOrder] = useState('id');

  const stateToggle = {
    setCurrentUserId,
    setUIProcess,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const usersDatabase = response.data;
      setUsers(usersDatabase);
      return;
    };
    fetchData();
  }, []);

  const content = uiProcess === 'showCards' ? 
    <Board users={users} order={usersShowOrder}/> :
    <Profile users={users} currentUserId={currentUserId}/>

  return (
    <StateToggleContext.Provider value={stateToggle}>
      <UIProcessContext.Provider value={{uiProcess}}>
        <div className='container'>
          <Panel toggleShowOrder={setUsersShowOrder}/>
          {content}
        </div>
      </UIProcessContext.Provider>
    </StateToggleContext.Provider>
  );
};

export default App;

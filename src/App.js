import react from 'react';
import './App.css';
import PersonList from './PersonList';

function App() {
  return (
    <div>
      <div className="header">
        User List
      </div>
      <PersonList />
    </div>
  );
}

export default App;

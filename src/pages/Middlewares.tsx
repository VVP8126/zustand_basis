import React, { ChangeEvent } from 'react';
import { useUsersWithMiddlewaresStore } from '../store/middlewares/userWithMiddlewaresStore';

const Middlewares: React.FC = () => {
  const { users, isLoading, error, addUser, clear, fetchUsers } = useUsersWithMiddlewaresStore();

  const [val, setVal] = React.useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setVal(userInput);
  };

  const addNewUser = () => {
    if (val.length > 0) {
      addUser(val);
      setVal('');
    } else {
      console.log('Enter the name of new user !');
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        <h1 className="main__title">Zustand can use Middleware(s)</h1>
        <h2 className="main__title">In this example used 1 middleware - immer</h2>
        <h2 className="main__title">(can work with store objects as in RTK)</h2>
        <div className="main__users">
          <div className="main__add-user">
            <input value={val} onChange={onInputChange} className="main_input" />
            <button onClick={addNewUser} className="main_btn">
              ADD USER
            </button>
            <button onClick={clear} className="main_btn">
              CLEAR
            </button>
            <button onClick={fetchUsers} className="main_btn">
              DOWNLOAD ALL
            </button>
            {isLoading && <h4>Loading...</h4>}
            {error && <h4>error</h4>}
          </div>
          <ul className="main__user-list">
            {users.length === 0 ? (
              <li>
                <center>
                  <b>There is no users in a list</b>
                </center>
              </li>
            ) : (
              <>
                <li>
                  <center>
                    <h4>Users in a list: {users.length}</h4>
                  </center>
                </li>
                {users.map((user, index) => (
                  <li key={user.id}>
                    {index + 1}. {user.username}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Middlewares;

import React, { ChangeEvent } from 'react';
import { useUsersStore } from '../store/user/userStore';
import { User } from '../types/User';

const Main: React.FC = () => {
  const users: User[] = useUsersStore((state) => state.users);
  const addUser = useUsersStore((state) => state.addUser);
  const clear = useUsersStore((state) => state.clear);
  // const { users, addUser, clear } = useUsersStore(); // alternative approach
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
    <div className="main">
      <h1 className="main__title">Simplest Zustand example</h1>
      <h3 className="main__title">List of users</h3>
      <div className="main__users">
        <div className="main__add-user">
          <input value={val} onChange={onInputChange} className="main_input" />
          <button onClick={addNewUser} className="main_btn">
            ADD USER
          </button>
          <button onClick={clear} className="main_btn">
            CLEAR
          </button>
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
      <div className="main__description">
        <p>
          To get access to store use{' '}
          <span className="main__selected">
            const addUser = useUsersStore((state) =&gt; state.addUser);
          </span>
        </p>
        <p>
          and{' '}
          <span className="main__selected">
            const users: User[] = useUsersStore((state) =&gt; state.users);
          </span>
        </p>
        <p className="pt-20">
          The other way:{' '}
          <span className="main__selected">
            const &#123; users, addUser, clear &#125; = useUsersStore();
          </span>{' '}
          but the component will be redrawn in any case (even if store element doesn't used in this
          page)
        </p>
      </div>
    </div>
  );
};

export default Main;

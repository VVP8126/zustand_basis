import React, { ChangeEvent, MouseEvent } from 'react';
import { useUsersImmerMiddlewaresStore } from '../store/middlewares/userImmerMiddlewaresStore';
import { useUsersPersistMiddlewaresStore } from '../store/middlewares/userPersistMiddlewaresStore';

const Middlewares: React.FC = () => {
  const { users, isLoading, error, addUser, clear, fetchUsers } = useUsersImmerMiddlewaresStore();
  const { data, save, remove } = useUsersPersistMiddlewaresStore();

  const [val, setVal] = React.useState('');
  const [dataPersited, setDataPersited] = React.useState('');

  const onSaveClick = (e: MouseEvent<HTMLButtonElement>) => {
    save(dataPersited);
  };

  const onDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setDataPersited(userInput);
  };

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
        <h4 className="main__title">In this example used 2 middlewares</h4>
        <h2 className="main__title">
          {' '}
          Middleware <span className="persist__selected">immer</span> (can work with store objects
          as in RTK)
        </h2>
        <div className="main__users">
          <div className="main__add-user">
            <input value={val} onChange={onInputChange} className="main_input" />
            <button onClick={addNewUser} className="main_btn">
              <i className="fa fa-user-plus" aria-hidden="true"></i>&#127; ADD USER
            </button>
            <button onClick={clear} className="main_btn">
              <i className="fa fa-trash" aria-hidden="true"></i>&#127; CLEAR
            </button>
            <button onClick={fetchUsers} className="main_btn mb-10">
              <i className="fa fa-download" aria-hidden="true"></i>
              &#127;DOWNLOAD ALL
            </button>
            {isLoading && (
              <h4 className="main__title">
                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>&#127;Loading...
              </h4>
            )}
            {error && (
              <h4 className="main__title">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>&#127;Error:{' '}
                {error}
              </h4>
            )}
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
        <div className="middleware__persist">
          <h2 className="middleware__persist-title">
            Middleware <span className="persist__selected">persist</span> (save in LocalStorage)
            Example
          </h2>
          <div className="middleware__persist-container">
            <div className="middleware__persist-left">
              <div className="middleware__persist-save-block">
                <i className="fa fa-pencil-square fa-2x middleware__persist-icon"></i>
                <input
                  className="middleware__persist-input-field"
                  type="text"
                  placeholder="Enter value and click 'SAVE'"
                  onChange={onDataChange}
                />
              </div>
              <button className="middleware__persist-btn" onClick={onSaveClick}>
                <i className="fa fa-save fa-2x">&#127;SAVE</i>
              </button>
            </div>
            <div className="middleware__persist-check-block">
              <h4>In storage:</h4>
              {data ? (
                <div className="w-100 p-5">
                  <p>{localStorage.getItem('persistedData')}</p>
                  <button className="middleware__persist-btn" onClick={(e) => remove()}>
                    <i className="fa fa-remove fa-2x">&#127;REMOVE</i>
                  </button>
                </div>
              ) : (
                <p>Data not persisted</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middlewares;

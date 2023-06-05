import React from 'react';
import { useAsyncUsersStore } from '../store/async/asyncUserStore';

const Base = () => {
  const { users, isLoading, error, fetchUsers } = useAsyncUsersStore();

  return (
    <div className="wrapper">
      <div className="async__block">
        <h1 className="main__title">Example with Async queries</h1>
        <button className="async__btn" onClick={fetchUsers}>
          Download ALL
        </button>
        <div className="async__user-list">
          {isLoading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>Error: {error} </h2>
          ) : (
            <>
              <h2 className="async__user-downloaded">Downloaded: {users.length} row(s)</h2>{' '}
              {users.length === 0 && <h4>Click button 'Download ALL'</h4>}
              {users.map((user) => (
                <p key={user.id}>
                  {user.id}. {user.username}
                </p>
              ))}{' '}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Base;

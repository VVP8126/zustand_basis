import React from 'react';
import { useAsyncUsersStore } from '../store/async/asyncUserStore';

const Base = () => {
  const { users, isLoading, error, fetchUsers } = useAsyncUsersStore();

  return (
    <div className="wrapper">
      <div className="async__block mt-20">
        <h1 className="main__title">Example with Async queries</h1>
        <button className="async__btn" onClick={fetchUsers}>
          <i className="fa fa-download" aria-hidden="true"></i>
          &#127;Download ALL&#127;
          <i className="fa fa-download" aria-hidden="true"></i>
        </button>
        <div className="async__user-list">
          {isLoading ? (
            <h4 className="main__title">
              <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
              <span>&#127;Loading...</span>
            </h4>
          ) : error ? (
            <h2>
              <i className="fa fa-frown-o" aria-hidden="true"></i>&#127;Error: {error}{' '}
            </h2>
          ) : (
            <>
              <h2 className="async__user-downloaded">
                <i className="fa fa-list" aria-hidden="true"></i>&#127;Downloaded: {users.length}{' '}
                row(s)
              </h2>{' '}
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

import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import * as pageActions from './users.actions';

const UsersList = ({ users, goNext, goPrev }) => {
  const usersPerPage = users.usersList.filter(
    (user, index) =>
      index >= users.usersList.length - 3 * (users.currentPage + 1) &&
      index < users.usersList.length - 3 * users.currentPage 
  );
  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={users.currentPage}
        totalItems={users.usersList.length}
      />
      <ul className="users">
        {usersPerPage.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: {
      usersList: state.usersList,
      currentPage: state.currentPage,
    },
  };
};
const mapDispatch = {
  goNext: pageActions.goNext,
  goPrev: pageActions.goPrev,
};
const connector = connect(mapState, mapDispatch);

export default connector(UsersList);

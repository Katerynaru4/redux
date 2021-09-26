import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import * as pageActions from './users.actions';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const usersPerPage = users.filter(
    (user, index) =>
      index >= users.length - 3 * (currentPage + 1) &&
      index < users.length - 3 * currentPage
  );
  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
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
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};
const mapDispatch = {
  goNext: pageActions.goNext,
  goPrev: pageActions.goPrev,
};
const connector = connect(mapState, mapDispatch);

export default connector(UsersList);

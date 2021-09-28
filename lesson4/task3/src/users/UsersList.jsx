import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import * as pageActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const usersToDisplay = users.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );
  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};
const mapDispatch = {
  goNext: pageActions.goNext,
  goPrev: pageActions.goPrev,
};

export default connect(mapState, mapDispatch)(UsersList);

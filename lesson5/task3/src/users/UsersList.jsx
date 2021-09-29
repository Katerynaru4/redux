import React from 'react';
import { connect } from 'react-redux';
import Filter from '../Filter.jsx';
import User from './User.jsx';
import { filterUsers } from './users.actions';
import {
  filteredUsersListSelector,
  filterTextSelector,
} from './users.selectors';

const UsersList = ({ users, filterText, filterUsers }) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div>
      <Filter
        count={users.length}
        onChange={filterUsers}
        filterText={filterText}
      />
      <ul className="users">
        {filteredUsers.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    filterText: filterTextSelector(state),
    users: filteredUsersListSelector(state),
  };
};
const mapDispatch = {
  filterUsers: filterUsers,
};

export default connect(mapState, mapDispatch)(UsersList);

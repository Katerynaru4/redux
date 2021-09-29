import { createSelector } from 'reselect';

export const filterTextSelector = (state) => state.users.filterText;
const usersListSelector = (state) => state.users.usersList;

export const filteredUsersListSelector = createSelector(
  usersListSelector,
  filterTextSelector,
  (usersList, filterText) =>
    usersList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    )
);

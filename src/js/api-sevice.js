// const fetchAllUsers = () => {
//   console.log('fetchAllUsers');
// };

// const fetchUsersById = id => {
//   console.log('fetchUsersById');
// };

// const updateUsersById = id => {
//   console.log('updateUsersById');
// };
// export default { fetchAllUsers, fetchUsersById, updateUsersById };

import shortid from 'shortid';
//именованій експорт
export const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

export const fetchUsersById = id => {
  console.log('fetchUsersById');
};

export const updateUsersById = id => {
  console.log('updateUsersById');
};

export const x = 5;
export const y = 'mango';

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name,
  };
  console.log(user);
};

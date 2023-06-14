import validatePassword from './js/validate-password';
import { addUser } from './js/api-sevice';
addUser('mango');
// import apiService from './js/api-sevice';
// import {
//   fetchAllUsers,
//   fetchUsersById,
//   updateUsersById,
//   x as value, //переименовали переменную
//   y as name, //переименовали переменную
// } from './js/api-sevice';

import * as apiService from './js/api-sevice'; // все как один обїект

console.log(validatePassword('qweqw64='));
// console.log(apiService);
// console.log(fetchAllUsers);
// console.log(fetchUsersById);
// console.log(updateUsersById);

// console.log(value);
// console.log(name);
console.log(apiService);

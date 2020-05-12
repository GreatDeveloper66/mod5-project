const RegisterUserAction = userObj => {
  return {
    type: 'registeruser',
    userObj: userObj
  }
}

export default RegisterUserAction

// const UserRegistrationAction = userObj => {
//   return dispatch => {
//
//     const configObj = {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//         "Accepts": "application.json"
//       },
//       body: JSON.stringify(userObj)
//     }
//
//     dispatch({type: 'registeringUser'})
//       fetch('http://localhost:5000/users',configObj)
//       .then(response => response.json())
//       .then(userObj => dispatch({type: 'userRegistered', userObj}))
//   }
// }
//
// export default UserRegistrationAction

// export function fetchAstronauts() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//     fetch('http://api.open-notify.org/astros.json')
//       .then(response => response.json())
//       .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//   };
// }

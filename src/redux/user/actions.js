import UserActionTypes from "./action-types";

const loginUser = (payload) => {
  return {
    type: UserActionTypes.LOGIN,
    payload,
  };
};

const logoutUser = () => {
  return {
    type: UserActionTypes.LOGOUT,
  };
};
export { loginUser, logoutUser };

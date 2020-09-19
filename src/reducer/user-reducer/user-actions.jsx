import { UserActionTypes } from "./user-action-types";
import { auth, googleprovider } from "../../firebase/firebase.utils";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_EMAIL_START,
});

export const signInEmailStart = () => ({
  type: UserActionTypes.SIGN_IN_WITH_EMAIL_START,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

/*export const isUserAuthenticated = () => {
  return (dispatch) => {
    dispatch(checkUserSession());
    const userAuth = getCurrentUser();
    userAuth.then(
      (response) => {
        if (!response) {
          return;
        }
      },
      (error) => {
        dispatch(signInFailure(error.message));
      }
    );
  };
};*/

export const googleSignIn = () => {
  return (dispatch) => {
    dispatch(googleSignInStart());
    const userRef = auth.signInWithPopup(googleprovider);
    userRef.then(
      (response) => {
        dispatch(signInSuccess(response));
      },
      (error) => {
        dispatch(signInFailure(error.message));
      }
    );
  };
};

export const signInWithEmail = (email, password) => {
  return (dispatch) => {
    dispatch(signInEmailStart());
    const signInStatus = auth.signInWithEmailAndPassword(email, password);
    signInStatus.then(
      (response) => {
        dispatch(signInSuccess(response));
      },
      (error) => {
        dispatch(signInFailure(error.message));
      }
    );
  };
};

import {
  SET_USER_DATA,
  SET_WORKOUT_DATA,
  FETCHING_USERS,
  FETCHED_USERS,
  FETCH_USERS_ERROR,
  FETCHING_WORKOUT,
  FETCHED_WORKOUTS,
  FETCH_WORKOUT_ERROR
} from './constants';

const usersReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_USERS:
      return { ...state, userStatus: FETCHING_USERS };
    case FETCHED_USERS:
      return {
        ...state,
        userStatus: FETCHED_USERS,
      };
    case FETCH_USERS_ERROR:
      return { ...state, userStatus: FETCH_USERS_ERROR, userError: action.payload };
    case FETCHING_WORKOUT:
      return { ...state, workoutStatus: FETCHING_WORKOUT };
    case FETCHED_WORKOUTS:
      return {
        ...state,
        workoutStatus: FETCHED_WORKOUTS,
      };
    case FETCH_WORKOUT_ERROR:
      return { ...state, workoutStatus: FETCH_WORKOUT_ERROR, workoutError: action.payload };
    case SET_USER_DATA:
      return { ...state, users: action.payload };
    case SET_WORKOUT_DATA: {
      const userWorkouts = Object.assign(state.userWorkouts, action.payload);
      return {
        ...state,
        userWorkouts
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
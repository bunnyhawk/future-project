import { useEffect, useRef, useReducer } from "react";
import usersReducer from './reducer';
import {
  FETCHED_USERS,
  FETCHED_WORKOUTS,
  FETCHING_USERS,
  FETCH_USERS_ERROR,
  SET_USER_DATA,
  SET_WORKOUT_DATA,
  USER_API
} from './constants';
import initialState from './initialState';

const fetchWorkouts = (users, dispatch) => {

  users.forEach(user => {
    const sessionKey = `userWorkouts-${user.id}`
    const localData = sessionStorage.getItem(sessionKey);

    if (localData) {
      dispatch({ type: SET_WORKOUT_DATA, payload: { [user.id]: JSON.parse(localData) } });
    } else {

      const fetchData = async () => {
        try {
          const response = await fetch(`${USER_API}/${user.id}/workouts`);
          const data = await response.json();

          sessionStorage.setItem(sessionKey, JSON.stringify(data));
          console.log(data)
          dispatch({ type: SET_WORKOUT_DATA, payload: { [user.id]: data } });

        } catch (error) {
          return error.message;
        }
      };

      fetchData();
    }
  });
  dispatch({ type: FETCHED_WORKOUTS });
}

export const useFetchUsers = (url, sessionStorageKey) => {
  const cache = useRef({});

  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !sessionStorageKey) return;

    const localData = sessionStorage.getItem(sessionStorageKey);

    if (localData) {
      dispatch({ type: FETCHED_USERS });
      dispatch({ type: SET_USER_DATA, payload: JSON.parse(localData) });
      fetchWorkouts(JSON.parse(localData), dispatch);


    } else {
      const fetchData = async () => {
        dispatch({ type: FETCHING_USERS });
        if (cache.current[url]) {
          const data = cache.current[url];
          dispatch({ type: FETCHED_USERS });
          dispatch({ type: SET_USER_DATA, payload: data });
          fetchWorkouts(data, dispatch);
        } else {
          try {
            const response = await fetch(url);
            const data = await response.json();
            cache.current[url] = data;
            if (cancelRequest) return;
            dispatch({ type: FETCHED_USERS });
            dispatch({ type: SET_USER_DATA, payload: data });
            fetchWorkouts(data, dispatch);

            sessionStorage.setItem(sessionStorageKey, JSON.stringify(data));
          } catch (error) {
            if (cancelRequest) return;
            dispatch({ type: FETCH_USERS_ERROR, payload: error.message });
          }
        }
      };

      fetchData();
    }

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url, sessionStorageKey]);

  return [state, dispatch];
};
import {
  SET_NATIONAL_DATA,
  SET_LIST_DATA,
  SET_QUERY_LIST_DATA,
  FETCHING,
  FETCHED,
  FETCH_ERROR
} from './constants';

const namesReducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, status: FETCHING };
    case FETCHED:
      return {
        ...state,
        status: FETCHED,
      };
    case FETCH_ERROR:
      return { ...state, status: FETCH_ERROR, error: action.payload };
    case SET_NATIONAL_DATA:
      return { ...state, nationalData: action.payload };
    case SET_LIST_DATA:
      return {
        ...state,
        currentList: [...state.currentList, ...action.payload],
      };
    case SET_QUERY_LIST_DATA:
      return {
        ...state,
        queryList: action.payload,
      };
    default:
      return state;
  }
};

export default namesReducer;
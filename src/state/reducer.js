export const initialState = {
  recordsVisible: 100,
  listData: []
};

export const SET_RECORDS_VISIBLE = 'SET_RECORDS_VISIBLE';
export const GET_LIST_DATA = 'GET_LIST_DATA';
export const GET_MORE_LIST_DATA = 'GET_MORE_LIST_DATA';

export function reducer(state, action) {
  switch (action.type) {
    case SET_RECORDS_VISIBLE:
      return {
        ...state,
        recordsVisible: action.payload,
      };
    case GET_LIST_DATA:
      return {
        ...state,
        listData: action.payload,
      };
    case GET_MORE_LIST_DATA:
      return {
        ...state,
        recordsVisible: state.recordsVisible + 100,
        listData: [...state.listData, action.payload]
      };
    default:
      return initialState;
  }
}
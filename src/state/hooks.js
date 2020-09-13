import { useEffect, useRef, useReducer } from "react";

export const SET_NATIONAL_DATA = "SET_NATIONAL_DATA";
export const GET_LIST_DATA = "GET_LIST_DATA";
export const SET_LIST_DATA = "SET_LIST_DATA";
export const SET_QUERY_LIST_DATA = "SET_QUERY_LIST_DATA";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FETCH_ERROR = "FETCH_ERROR";

export const initialState = {
  status: "idle",
  error: null,
  nationalData: [],
  currentList: [],
  queryList: [],
  recordsVisible: 100,
};

export const namesReducer = (state, action) => {
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
        queryList: action.payload
      }
    default:
      return state;
  }
};

export const useFetch = (url, sessionStorageKey) => {
  const cache = useRef({});

  const [state, dispatch] = useReducer(namesReducer, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !sessionStorageKey) return;

    const localData = sessionStorage.getItem(sessionStorageKey);

    if (localData) {
      dispatch({ type: FETCHED, payload: JSON.parse(localData) });
    } else {
      const fetchData = async () => {
        dispatch({ type: FETCHING });
        if (cache.current[url]) {
          const data = cache.current[url];
          dispatch({ type: FETCHED });
          dispatch({ type: SET_NATIONAL_DATA, payload: data })
        } else {
          try {
            const response = await fetch(url);
            const data = await response.json();
            cache.current[url] = data;
            if (cancelRequest) return;
            dispatch({ type: FETCHED });
            dispatch({ type: SET_NATIONAL_DATA, payload: data })
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(data));
          } catch (error) {
            if (cancelRequest) return;
            dispatch({ type: FETCH_ERROR, payload: error.message });
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

export const airTable = {
  cancelRequest: false,
  offset: null,
  setOffset: function (val) {
    this.offset = val;
  },
  fetchData: async (sessionStorageKey, dispatch, query) => {
    let url =
      "https://api.airtable.com/v0/appAaEysX2qTVLYXy/Imported%20table?view=Grid%20view";

    if (query) {
      url += `&filterByFormula=SEARCH("${query.toLowerCase()}",LOWER({name}))`;
    } else if (airTable.offset) {
      url += `&offset=${airTable.offset}`;
    }

    dispatch({ type: FETCHING });
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: new Headers({
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }),
      });
      const data = await response.json();
      if (airTable.cancelRequest) return;
      const mappedRecords = data.records.map((record) => ({
        id: record.id,
        ...record.fields,
      }));
      dispatch({ type: FETCHED, payload: mappedRecords });
      dispatch({ type: query ? SET_QUERY_LIST_DATA : SET_LIST_DATA, payload: mappedRecords });
      airTable.setOffset(data.offset);
      if (sessionStorageKey) {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(mappedRecords));
      }
    } catch (error) {
      if (airTable.cancelRequest) return;
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  },
  useFetchAirTable: (sessionStorageKey) => {
    const [state, dispatch] = useReducer(namesReducer, initialState);

    useEffect(() => {
      airTable.cancelRequest = false;
      if (!sessionStorageKey) return;

      const localData = sessionStorage.getItem(sessionStorageKey);

      if (localData) {
        dispatch({ type: FETCHED });
        dispatch({ type: SET_LIST_DATA, payload: JSON.parse(localData) });
      } else {
        airTable.fetchData(sessionStorageKey, dispatch);
      }

      return function cleanup() {
        airTable.cancelRequest = true;
      };
    }, [sessionStorageKey]);

    return [state, dispatch];
  },
  useQueryAirTable: () => {
    const [state, dispatch] = useReducer(namesReducer, initialState);

    return [state, dispatch];
  },
  fetchMoreData: (sessionStorageKey, dispatch) => {
    airTable.fetchData(sessionStorageKey, dispatch);
  },
  fetchQueriedData: (dispatch, query) => {
    airTable.fetchData(null, dispatch, query);
  },
  clearQueriedData: (dispatch) => {
    dispatch({ type: SET_QUERY_LIST_DATA, payload: [] })
  }
};

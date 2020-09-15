import { useEffect, useRef, useReducer } from "react";
import namesReducer from './reducer';
import {
  SET_NATIONAL_DATA,
  SET_LIST_DATA,
  SET_QUERY_LIST_DATA,
  FETCHING,
  FETCHED,
  FETCH_ERROR
} from './constants';
import initialState from './initialState';

export const useFetch = (url, sessionStorageKey) => {
  const cache = useRef({});

  const [state, dispatch] = useReducer(namesReducer, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !sessionStorageKey) return;

    const localData = sessionStorage.getItem(sessionStorageKey);

    if (localData) {
      dispatch({ type: FETCHED });
      dispatch({ type: SET_NATIONAL_DATA, payload: JSON.parse(localData) });
    } else {
      const fetchData = async () => {
        dispatch({ type: FETCHING });
        if (cache.current[url]) {
          const data = cache.current[url];
          dispatch({ type: FETCHED });
          dispatch({ type: SET_NATIONAL_DATA, payload: data });
        } else {
          try {
            const response = await fetch(url);
            const data = await response.json();
            cache.current[url] = data;
            if (cancelRequest) return;
            dispatch({ type: FETCHED });
            dispatch({ type: SET_NATIONAL_DATA, payload: data });
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
  fetchData: async (dispatch, query) => {
    let url =
      "https://api.airtable.com/v0/appAaEysX2qTVLYXy/covid-memorial?view=Grid%20view";

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
      dispatch({
        type: query ? SET_QUERY_LIST_DATA : SET_LIST_DATA,
        payload: mappedRecords,
      });
      airTable.setOffset(data.offset);
    } catch (error) {
      if (airTable.cancelRequest) return;
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  },
  useFetchAirTable: () => {
    const [state, dispatch] = useReducer(namesReducer, initialState);

    useEffect(() => {
      airTable.cancelRequest = false;
      // if (!sessionStorageKey) return;

      const initialData = require('../data/initialData.json');
      const mappedRecords = initialData.records.map((record) => ({
        id: record.id,
        ...record.fields,
      }));
      dispatch({
        type: SET_LIST_DATA,
        payload: mappedRecords,
      });

      return function cleanup() {
        airTable.cancelRequest = true;
      };
    }, []);

    return [state, dispatch];
  },
  useQueryAirTable: () => {
    const [state, dispatch] = useReducer(namesReducer, initialState);

    return [state, dispatch];
  },
  fetchMoreData: (dispatch) => {
    airTable.fetchData(dispatch);
  },
  fetchQueriedData: (dispatch, query) => {
    airTable.fetchData(dispatch, query);
  },
  clearQueriedData: (dispatch) => {
    dispatch({ type: SET_QUERY_LIST_DATA, payload: [] });
  },
};

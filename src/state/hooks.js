import { useEffect, useRef, useReducer } from 'react';

export const SET_RECORDS_VISIBLE = 'SET_RECORDS_VISIBLE';
export const GET_LIST_DATA = 'GET_LIST_DATA';
export const GET_MORE_LIST_DATA = 'GET_MORE_LIST_DATA';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR'

export const useFetch = (url, localStorageKey) => {
	const cache = useRef({});

	const initialState = {
		status: 'idle',
		error: null,
    data: [],
    currentList: [],
    recordsVisible: 100,
	};

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case FETCHING:
				return { ...initialState, status: 'fetching' };
			case FETCHED:
				return { ...initialState, status: 'fetched', data: action.payload };
			case FETCH_ERROR:
				return { ...initialState, status: 'error', error: action.payload };
			default:
				return state;
		}
	}, initialState);

	useEffect(() => {
		let cancelRequest = false;
    if (!url || !localStorageKey) return;
    
    const localData = localStorage.getItem(localStorageKey);

    if (localData) {
      dispatch({ type: FETCHED, payload: JSON.parse(localData) });
    } else {
      const fetchData = async () => {
        dispatch({ type: FETCHING });
        if (cache.current[url]) {
          const data = cache.current[url];
          dispatch({ type: FETCHED, payload: data });
        } else {
          try {
            const response = await fetch(url);
            const data = await response.json();
            cache.current[url] = data;
            if (cancelRequest) return;
            dispatch({ type: FETCHED, payload: data });
            localStorage.setItem(localStorageKey, JSON.stringify(data));;
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
	}, [url, localStorageKey]);

	return state;
};
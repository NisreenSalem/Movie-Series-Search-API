import React, { useReducer } from "react";
import axios from "axios";

import * as TYPES from "./types";

const ShowsContext = React.createContext();

const ShowState = (props) => {
  const initialState = {
    shows: [],
    activeShow: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(showReducer, initialState);

  const searchShows = async (searchTerm) => {
    dispatch({ type: TYPES.SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    dispatch({ type: TYPES.SEARCH_SHOWS, payload: data });
  };

  const getActiveShow = async (id) => {
    dispatch({ type: TYPES.SET_LOADING });
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(data);
    dispatch({ type: TYPES.SET_ACTIVE_SHOW, payload: data });
  };

  const clearActiveShow = () => {
    dispatch({ type: TYPES.CLEAR_ACTIVE_SHOW });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        activeShow: state.activeShow,
        loading: state.loading,
        searchShows,
        getActiveShow,
        clearActiveShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

const showReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return { ...state, loading: true };
    case TYPES.SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload ? action.payload : [],
        loading: false,
      };
    case TYPES.SET_ACTIVE_SHOW:
      return {
        ...state,
        activeShow: action.payload ? action.payload : {},
        loading: false,
      };
    case TYPES.CLEAR_ACTIVE_SHOW:
      return {
        ...state,
        activeShow: {},
      };
    default:
      return state;
  }
};

export { ShowsContext, ShowState };

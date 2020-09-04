import {
  GET_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  CLEAR_RESTAURANT,
  GET_RESTAURANTS,
  RESTAURANT_ERROR,
} from "../actions/types";

const initialState = {
  restaurants: [],
  restaurant: null,
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case RESTAURANT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: payload,
        loading: false,
      };
    case CLEAR_RESTAURANT:
      return {
        ...state,
        restaurant: null,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    default:
      return state;
  }
}

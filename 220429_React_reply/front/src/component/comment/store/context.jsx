import { createContext } from 'react';

export const initialState = {
  commentItem: [],
  loading: false,
  errors: null,
};

export const Store = createContext();

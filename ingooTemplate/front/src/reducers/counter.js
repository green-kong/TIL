const initialState = {
  number: 0,
  loading: false,
  error: null,
};

const UP_REQUEST = 'UP_REQUEST';
const UP_SUCCESS = 'UP_SUCCESS';
const UP_FAILURE = 'UP_FAILURE';

const DOWN_REQUEST = 'DOWN_REQUEST';
const DOWN_SUCCESS = 'DOWN_SUCCESS';
const DOWN_FAILURE = 'DOWN_FAILURE';

export const up = (payload) => ({ type: UP_REQUEST, payload });
export const down = (payload) => ({ type: DOWN_REQUEST, payload });

const counter = (state = initialState, action) => {
  switch (action.type) {
    case UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UP_SUCCESS:
      return {
        ...state,
        loading: false,
        number: state.number + 1,
      };

    case UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: '뭔가 잘못됨',
      };

    case DOWN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        number: state.number - 1,
      };

    case DOWN_FAILURE:
      return {
        ...state,
        loading: false,
        error: '또다시뭔가 잘못됨',
      };

    default:
      return state;
  }
};

export default counter;

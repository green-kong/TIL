const initialState = {
  counter: {
    number: 0,
  },
};

const UP = 'COUNTER/UP';
const DOWN = 'COUNTER/DOWN';

export const up = () => ({ type: UP });
export const down = () => ({ type: DOWN });

const rootReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case UP:
      const {
        counter: { number },
      } = state;

      const counter = {
        ...state.counter,
        number: number + 1,
      };
      return {
        ...state,
        counter,
      };

    case DOWN:
      return {
        ...state,
        number: state.number - 1,
      };

    default:
      return state;
  }
};

export default rootReducer;

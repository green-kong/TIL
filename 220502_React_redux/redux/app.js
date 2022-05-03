const redux = require('redux');
const { createStore } = redux;

const initialState = {
  name: 'kong',
  megaCoffe: 0,
};

// const CHANGE_NAME = 'change_name';
// const MGC_UP = 'mgcUp';

// const change_name = () => ({ type: CHANGE_NAME });
// const mgc_up = () => ({ type: MGC_UP });

class actionObj {
  constructor() {
    this.CHANGE_NAME = 'change_name';
    this.MGC_UP = 'mgcUp';
    this.RESET = 'reset';
    this.ORDER = 'order';
  }

  change_name = () => ({ type: this.CHANGE_NAME });

  mgc_up = () => ({ type: this.MGC_UP });

  reset = () => ({ type: this.RESET });

  order = (value) => ({ type: this.ORDER, payload: value });
}

const test = new actionObj();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case test.CHANGE_NAME:
      return {
        ...state,
        name: 'ingoo',
      };

    case test.MGC_UP:
      return {
        ...state,
        megaCoffe: state.megaCoffe + 1,
      };

    case test.RESET:
      return initialState;

    case test.ORDER:
      return {
        ...state,
        megaCoffe: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(test.change_name());
store.dispatch(test.mgc_up());
store.dispatch(test.mgc_up());
console.log(store.getState());
store.dispatch(test.reset());
store.dispatch(test.order(5));
console.log(store.getState());

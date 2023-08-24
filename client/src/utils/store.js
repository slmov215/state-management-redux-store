import { createStore } from 'redux';
import { reducer } from './reducers'; // Import your reducer

const store = createStore(reducer);

export default store;

import {combineReducers} from 'redux';
import memoryGameReducer from '../screen/MemoryGame/redux/memory.game.reducer';

const rootReducer = combineReducers({
  MemoryReducer: memoryGameReducer,
});

export default rootReducer;

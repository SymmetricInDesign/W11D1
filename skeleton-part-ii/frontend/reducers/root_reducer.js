import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import pokemonReducer from './pokemon_reducer';
import uiReducer from './ui_reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
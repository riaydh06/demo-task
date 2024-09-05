import { combineReducers } from 'redux';
import createEventReducer from './events/create-event-reducer';
import getEventReducer from './events/get-events-reducer';

const rootReducer = combineReducers({
  events: combineReducers({
    createEvent: createEventReducer.reducer,
    getEvents: getEventReducer.reducer,
  }),
});

export default rootReducer;

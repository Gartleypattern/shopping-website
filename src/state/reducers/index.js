import { combineReducers } from "redux";
import {addToCard} from './addToCardReducers';
import {items} from './items';

const reducers = combineReducers({
    counter : addToCard,
    items: items
});

export default reducers;


import {ADD, INIT, REMOVE, UPDATE} from './constants';
import { removeData, setData, updateData } from './db';


export function reducer(state, action){
    switch(action.type){
        case ADD:
            setData(action.item.title, action.item.content);
            return [...state, action.item]
        break;
        case UPDATE:
            updateData(action.item.title, action.item.content, action.item.id);
            return state.map(item => {
                if(item.id === action.item.id){
                    return action.item;
                }
                return item;
            })
        break;
        case REMOVE:
            removeData(action.item.id);
            return state.filter(({id}) => action.item.id !== id)
        break;
        case INIT:
            return action.data;
        break;
        
        default:
            return state;
    }
}
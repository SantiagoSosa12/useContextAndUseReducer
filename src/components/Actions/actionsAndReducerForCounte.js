import React from "react";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const ownContextForCounter = React.createContext(null);

// Initial State for Reducer
export const initialStateOfCounter = {
    count: 0
}

/**
 * Increment, Decrement or reset acordin to action
 * @param {*} state previus state
 * @param {*} action INCREMENT, DECREMENT or RESET
 * @returns 
 */
export const reducerForCounter = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + action.payload.quantity
            }
        case DECREMENT:
            return {
                count: state.count - action.payload.quantity
            }
        case RESET:
            return {
                count: 0,
            }
        default:
            return state;
    }
}

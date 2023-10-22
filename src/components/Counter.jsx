import React, { useReducer } from 'react';
import { DECREMENT, INCREMENT, RESET, initialStateOfCounter, ownContextForCounter, reducerForCounter } from './Actions/actionsAndReducerForCounte';
import Points from './Points';

const Counter = () => {

    const [stateCounter, dispatchCounter] = useReducer(reducerForCounter, initialStateOfCounter);

    return (
        <ownContextForCounter.Provider value={stateCounter}>
            <div>
                {/* <p> Points: {stateCounter.count} </p> */}
                <Points></Points>
                <button onClick={
                    () => dispatchCounter({
                        type: INCREMENT,
                        payload: {
                            quantity: 2
                        }
                    })
                }>
                    Increment Points * 2   -
                </button>

                <button onClick={
                    () => dispatchCounter({
                        type: DECREMENT,
                        payload: {
                            quantity: 1
                        }
                    })
                }>
                    Decrement Points
                </button>

                <button onClick={
                    () => dispatchCounter({
                        type: RESET
                    })
                }>
                    Reset Points
                </button>
            </div>
        </ownContextForCounter.Provider>

    );
}

export default Counter;

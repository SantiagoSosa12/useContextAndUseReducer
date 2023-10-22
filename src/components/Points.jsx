import React, { useContext } from 'react';
import { ownContextForCounter } from './Actions/actionsAndReducerForCounte';

const Points = () => {

    const context = useContext(ownContextForCounter);

    return (
        <p>
            Points : { context.count }
        </p>
    );
}

export default Points;

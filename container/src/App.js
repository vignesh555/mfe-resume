import React, { useRef, useEffect } from 'react';
import { mount } from "objective/ObjectiveIndex";

const App = () => {
    const elRef = useRef(null);

    useEffect(() => {
        if (elRef.current) {
            mount(elRef.current);
        }
    }, []);

    return (
        <div>
            container12
            <hr/>
            <div ref={elRef}></div>
        </div>
    )
}

export default App;
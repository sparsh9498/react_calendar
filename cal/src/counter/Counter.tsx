import React, { useRef } from 'react'

const Counter = () => {
    const [count, setCount] = React.useState<number>(0);
    const intervalRef = useRef<any>(null);            // Store interval ID


    const triggerAction = (action: string) => {
        if (action === 'increment') {
            if (intervalRef.current) return; // prevent multiple intervals
            intervalRef.current = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);

        } else if (action === 'pause') {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        } else if (action === 'reset') {
            setCount(0);
        }
    };

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => triggerAction('increment')}>Start</button>
            <button onClick={() => triggerAction('pause')}>Pause</button>
            <button onClick={() => triggerAction('reset')}>Reset</button>
        </div>
    )
}

export default Counter

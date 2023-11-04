import React, { useState, useRef } from 'react';

function Stopwatch() {
    const [start_time, set_start_time] = useState(null);
    const [now, set_now] = useState(null);
    const [is_running, set_running] = useState(false);

    const interval_ref = useRef(null);

    function handle_start() {
        if (is_running == false) {

            if (start_time === null) {
                set_start_time(Date.now());
            }

            set_now(Date.now());
        
            clearInterval(interval_ref.current);
        
            interval_ref.current = setInterval(
                () => {
                set_now(Date.now());
            }, 10);      // the Callback function will be executed every 10 milliseconds.
        
            set_running(true);

        } 
        else {
            handle_stop();
        }
    }  

    function handle_stop() {
        clearInterval(interval_ref.current);
        set_running(false);
    }

    function handle_reset() {
        clearInterval(interval_ref.current);
        set_start_time(null);
        set_now(null);
        set_running(false);
    }

    let seconds_passed = 0;

    if (start_time != null && now != null) {
        seconds_passed = (now - start_time) / 1000;
    }

    return (
        <div>
            <h1>
                Time passed: {seconds_passed.toFixed(3)}
            </h1>

            <button onClick={handle_start}>
                {is_running ? 'Stop' : 'Start'}
            </button>

            <button onClick={handle_reset}>
                Reset
            </button>
        </div>
    );
}

export default Stopwatch;

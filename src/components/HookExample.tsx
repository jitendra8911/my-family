import React, { useState, useEffect} from "react";

export function Welcome() {
    const family: string[] = ['jithu', 'gopi', 'anasuya', 'gangadhara rao'];
    const greet = () => {
        return family[Math.floor(Math.random() * family.length)];
    };
    const [guest, setGuest] = useState('stranger');

    useEffect(() => {
        document.title = `Welcome ${guest}!!`
    });

    return (
        <div>
            <p> Welcome {guest}!!</p>
            <button onClick={() => setGuest(greet())}>
                Click me
            </button>
        </div>
    )
}
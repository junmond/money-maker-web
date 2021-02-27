import React, { useEffect, useState } from "react";


export default function Health() {
    const [healthy, setHealthy] = useState(false);

    useEffect(() => {
        fetch('/api/healthCheck')
        .then(res => res.json())
        .then(data => setHealthy(data.healthy));
    }, []);
    return (
        <>
            <h1>{healthy ? 'Server is running!' : 'Server is NOT running!'}</h1>
        </>
    );
}
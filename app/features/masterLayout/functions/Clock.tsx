"use client";

import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => setTime(new Date().toLocaleTimeString());
        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
}

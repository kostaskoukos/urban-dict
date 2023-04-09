import { useState } from "preact/hooks";

export default function PreTest() {
    const [count, setCount] = useState(0);
    return <>
        <button class="bg-red-500 p-3 w-screen text-3xl" onClick={() => setCount(count + 1)}>{count}</button>
    </>
}
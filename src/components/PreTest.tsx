import { useSignal } from "@preact/signals";

export default function PreTest () {
    const count = useSignal(0);
    return <>
        <button class="bg-red-500 p-3 w-screen text-3xl" onClick={() => count.value++}>{count.value}</button>
    </>
}
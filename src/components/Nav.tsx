import { useState } from 'preact/hooks';

export default function PreTest() {
    const [open, setOpen] = useState(false);
    return <>
        <header class="h-fit bg-slate-500 max-w-full">
            <nav class="md:w-1/2 md:mx-auto md:flex-col flex flex-row justify-evenly gap-3 py-2 mx-3">
                <div class="flex flex-col justify-between">
                    <div>
                        <div class="flex items-center">
                            <a href="/">
                                <svg
                                    class="md:hidden"
                                    fill="none"
                                    height="40"
                                    viewBox="0 0 430 430"
                                    width="40"
                                    xmlns="http://www.w3.org/2000/svg"
                                ><circle cx="215" cy="215" fill="#134FE5" r="215"
                                ></circle><path
                                    d="M230 296c-12 4-21 6-25 6-5 0-12-2-22-5s-17-6-21-9l-37 13-15-4c-6-3-10-7-11-11l-5 4-4-7 2-42-1-9-1-9 1-12 1-11c0-9-2-16-8-20-5 2-10 2-15 2l-4-5-3-1-4-7 7-7 18-1 24 6 1 4 2 4-6 34 3 3-3 17 6 41 17 5c12 0 26-4 40-13 4-10 6-21 8-35l3-35 4-3v-5l-10-7h-25l-1-8 16-7 16 6 9-4 7 3 3 8c0 3 0 7-2 13l-1 12 3 20-4 3 7 48 6-4 28 16-4 13Zm137 0h-9l-6 5 15-5Zm0 0h-9l-6 5-17-3-2 3-19-11a1066 1066 0 0 1-33 11l-2 2c-16-1-29-9-39-22a85 85 0 0 1 0-92c11-16 24-23 42-23l16 5c7 4 13 6 17 6h2l5-11c-4-3-5-10-5-21v-8l-5-6-5 1-25-4-1-2 2-11 5-2 26 3 3-3 13 2 5 8-3 11 2 6 1 5-1 13-1 12 1 5 1 5-3 13 3 3-3 11 3 3-3 8c2 6 4 14 5 25l4 26c9 8 19 12 28 11l3 3v8l-5 5Zm-55-83 3-9-7-9h-5l-9-9-18-2c-3 0-9 4-17 11-7 8-11 13-11 17v12l2 5-2 2v10c0 7 9 19 28 37l18-6 9-11h6c0-7 2-15 8-24l-5-24"
                                    fill="#fff"></path></svg
                                >
                            </a>
                            <button onClick={() => setOpen(!open)}>
                                <svg
                                    class="md:hidden"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="white"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <a href="/">
                            <svg
                                class="md:block hidden"
                                height="49"
                                viewBox="0 0 949 310"
                                width="150"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g transform="matrix(1.25 0 0 -1.25 -15 534)"
                                ><path
                                    d="M36 334s5-5 6-10v-14l-2-16c0-6 1-8 2-11l1-8-1-24-1-15 3-7 4 4 3-6c2-3 10-6 10-6l10-3 32 13 7-4 18-7 12-2 12 3 9 3 2 12-24 16-5-4-3 26-3 21 3 2-3 20 2 16 1 8v5l-7 3-8-3-14 6-13-7 1-8h22l9-6v-6l-3-3-1-17-2-23c-1-10-3-19-6-27l-18-10c-9-3-17-3-17-3l-14 6-5 33v8l2 14-3 3 3 16 2 11 1 6-2 7-12 4-8 2h-8l-8-1-6-6 2-4 1-2 3-1 4-5 7 1h3m137 17 10 2 14 1 23-2 3 4 4-5h10l18-5 14-16v-7c0-5 2-11 1-13l-4-15-17-15s7-13 9-23c1-10-2-20-2-20l4-5 7 1 3 2 8-3-4-13-10 2-3-2-4 4-3-3s-5 6-8 16c-4 12 1 18 1 18l-3 15-12 11-22 5-2-3 1-11 1 1v-10h-1v-2h-1v-23l3-3 10-1h8v-3l3-3-6-6-5 1-5 1-2-2-10 1-23-3-7 5v9l21 6 3 30-3 6 1 9-3 25 4 8-1 9-1 10h-2l-2-3-18 5-2 6v7h2zm37-20 9 1 10 1 2-1 9 1 10-9-1-4-1-3 2-2v-5l-5-10-14-4-6-2h-3l-1-3-5 6h-6l-1 18-1 15m78 85s3-6 8-9l10-5 8-2 4-18 2-12-2-26-1-21 2-18 2-13c1-5 0-12-1-18l-2-21h11l5 5h9l4-6h36s8 5 13 12c5 6 7 10 10 17a172 172 0 0 1 10 39l-2 2-1 13-1 9-10 13-4 6-5 12-9 3h-4l-7 1h-5l-4-1-10-4-10-8-3-4h-6l-2 4 5 26-3 9 3 13-3 6-2 5-17 1c-11 1-18 3-20 2-3-1-4-3-6-6l-2-6m67-59s-4-4-10-15c-6-10-7-14-9-22l-2-14 1-7-1-6s5-9 13-14l16-11c3-2 7-2 7-2l4 4 6 4a59 59 0 0 0 10 14 411 411 0 0 0 3 20l-2 8-2 7 1 3-1 9-1 6-6 8-6 9h-5l-6 1-5-1h-5m122-12-3-4-3-2-3-2-6-5h-9l-5 12-2 5a88 88 0 0 0 3 23l8 6 13 7 5 2h2v1l3 1h7l6-1h12l8-3 16-5 4-6 5-6 1-15 1-18v-19h-2l1-8 1-8-1-2-1-2 5-5 4-5 5 1 9 1h3l1-12 1-9-9-10-7-1-9-1-9 6-8 6-15-10-15-5h-17l-14 1-11 1-7 8-5 6-3 18v16l4 7 5 8 19 6 9 2 7 1 14 6 6 4 2 2h3l8 3 4 1 3 3 3 2v9l-12 7-14 6-8 2-8-2-6-2-3-3-2-4-1-1 1-6 4-7 2-1m-6-38-15-10 1-15 6-9h27l8 3 9 3h1l9 15-1 10v10h-8l-11-3-8-3h-20m115 82-13-11 2-7 6-2 7-2 3-1 3-3-2-7v-1l3-8 3-7h-7v-9l6-8-2-12-4-8 2-2-3-12v-1l3-5-1-7v-4l-12-6-6-12 8-3 10-2c5 1 7 3 7 3l7-2 7-2v1l2-2 3 5h2l10-2 6 5v6l-2 2-3 5h-5l-11 4-2 33-2 25 2 2-2 14v4l1 3 9-13 9-20 5-11 6-10-1 18c0 7-3 13-4 17l-6 14 2 7-10 10 4 12-7 7h-4l-7 1-4 1-2-2-9 2c-2 2-7 3-7 3m57-88 8-3h7v-1h9v-9l4-6-2-2v-1h1l1-20-3-4-3-5-8 2c-4 2-6 6-6 6v6l-4 5h-4v11l4 4-3 5-2 4 2 7-1 1m16 1h7v8l1 13-1 6v5l3 11v5h-2l2 1-1 7-1 6 2 2 2 2 9-2 5 5 4 6 1 3-6 4-5 4h-5l-12-2h-8l-6 2-8-3-5-2-2-8 4-6 7-2 7-2 1 1 2-2 2-2 1-12 2-15v-6c-2-1-4-12-4-12l2-7 2-8"
                                    fill-rule="evenodd"
                                    fill="#fff"></path><g
                                        fill-rule="evenodd"
                                        fill="#EFFF00"
                                    >
                                        <path
                                            d="M411 230c0 3 2 5 5 5h18c3 0 5-2 5-5v-4l-7-1v5h-14v-14h14v5l7-2v-4c0-3-2-5-5-5h-18c-3 0-5 2-5 5v15zm-34 6h7v-25h-7v25zm124-2h7v-25h-7v25zm-34 0h7v-25h-7v25z"
                                        ></path><path
                                            d="m457 235 29-1v-5h-29v6zm131-4 18-15v14h7v-25h-6l-17 16-1-15h-7l1 25h5zm-59-3c0 3 2 5 5 5l22-1c3 0 5-2 5-5v-15c0-3-2-5-5-5h-22c-3 0-5 2-5 5v16zm7-1h17v-14l-17 1v13zm112 3 14-25h-8l-3 5h-14l-3-5h-7l15 25h6zm1-14-4 8-4-7h8zm27 13h24c2 0 4-2 4-4v-7c0-2-2-4-4-4h-3l11-9h-10l-10 9h-4v-9h-7l-1 24zm7-5v-5h13l1 1v3l-1 1h-13zm33 4h10l8-9 8 8h9l-14-13v-11h-7v11l-14 14zm-384 9h16c7 0 12-6 12-12v-1c0-7-6-12-12-12h-19v25h3zm4-19h10c3 0 6 3 6 6v1c0 3-3 6-6 6l-10 1v-14z"
                                        ></path></g
                                    ></g
                                ></svg
                            >
                        </a>
                    </div>
                    <div class={`md:flex-row md:flex flex flex-col break-normal justify-between ${open ? '' : 'hidden'} gap-4`}>
                        <a class="flex-grow font-semibold text-white" href="/"
                        >Browse</a
                        >
                        <a class="flex-grow font-semibold text-white" href="/random"
                        >Random</a
                        >
                        <a class="flex-grow font-semibold text-white" href="/add"
                        >Add a word</a
                        >
                        <a class="flex-grow font-semibold text-white" href="/about"
                        >About</a
                        >
                    </div>
                </div>
                <form method="get" action="/search" class="flex flex-row items-center h-10 bg-white px-2 rounded-md">
                    <svg

                        fill="#d1d5db"
                        height="20"
                        viewBox="0 0 16 15"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="m14.6719 12.8906-3.2813-3.2812c.7383-1.0938 1.1211-2.461.9297-3.9375-.3555-2.5156-2.4062-4.539-4.8945-4.8672C3.707.3398.5625 3.4844 1.0273 7.203c.3282 2.4883 2.3516 4.5391 4.8672 4.8946 1.4766.1914 2.8438-.1915 3.9649-.9297l3.2539 3.2812c.4375.4102 1.1211.4102 1.5586 0 .4101-.4375.4101-1.1211 0-1.5586ZM3.1602 6.4375c0-1.914 1.5585-3.5 3.5-3.5 1.914 0 3.5 1.586 3.5 3.5 0 1.9414-1.586 3.5-3.5 3.5a3.4893 3.4893 0 0 1-3.5-3.5Z"
                    ></path></svg
                    >
                    <input
                        class="flex-grow indent-3 outline-none bg-transparent"
                        type="text"
                        placeholder="Search..."
                        name="term"
                    />
                    <button class="p-0 bg-transparent outline-none" type="submit">
                        <svg
                            class="cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            ></path>
                        </svg>
                    </button>
                </form>
            </nav>
        </header>
    </>
}
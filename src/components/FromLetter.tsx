import { useEffect, useState, useRef } from "preact/hooks";
import { getPostsByLetter } from "../trpc/client";
import Post from "./Post";
import type { IPost } from "../trpc/types";

export default function FromLetter() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([] as IPost[]);
    const [letter, setLetter] = useState('A');

    const arr = useRef<HTMLUListElement>(null);

    const fetchPosts = async () => {
        setPosts([]);
        setLoading(true);
        setPosts(await getPostsByLetter(letter));
        setLoading(false);
        setTimeout(() => {
            arr.current?.scrollIntoView();
        }, 50);
    }
    
    useEffect(() => {
        fetchPosts();
    }, [letter])
    return <>
        <h1 class="text-4xl text-center">Browse words from A-Z</h1>
        <label htmlFor="selectt">Choose a letter:</label>
        <select id="selectt" class="mb-5 mx-auto" onChange={e => setLetter(e.target?.value)}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
            <option>G</option>
            <option>H</option>
            <option>I</option>
            <option>J</option>
            <option>K</option>
            <option>L</option>
            <option>M</option>
            <option>N</option>
            <option>O</option>
            <option>P</option>
            <option>Q</option>
            <option>R</option>
            <option>S</option>
            <option>T</option>
            <option>U</option>
            <option>V</option>
            <option>W</option>
            <option>X</option>
            <option>Y</option>
            <option>Z</option>
        </select>
        {
            loading && <p>loading...</p>
        }
        <ul ref={arr} class="md:space-y-5 md:my-5 my-4 space-y-3">
            {posts.map((post) => <Post post={post} />)}
        </ul>
    </>
}
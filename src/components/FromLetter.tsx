import { useEffect, useState } from "preact/hooks";
import { getPostsByLetter } from "../trpc/client";
import Post from "./Post";
import type { IPost } from "../trpc/types";

export default function FromLetter() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([] as IPost[]);
    const [letter, setLetter] = useState('A');

    const fetchPosts = async () => {
        console.log('fetching...');
        setLoading(true);
        setPosts(await getPostsByLetter(letter));
        setLoading(false);
    }

    useEffect(() => {
        console.log('start or letter changed');
        fetchPosts();
    }, [letter])
    return <>
        <h1 class="text-4xl text-center">Browse words from A-Z</h1>
        <select class="mb-5 mx-auto" onChange={e => setLetter(e.target?.value)}>
            <option>E</option>
            <option>B</option>
            <option>N</option>
        </select>
        {
            loading
                ? <p>loading...</p>
                : <>
                    <ul class="md:space-y-5 md:my-5 my-4 space-y-3">
                        {posts.map((post) => <Post post={post} />)}
                    </ul>
                </>
        }
    </>
}
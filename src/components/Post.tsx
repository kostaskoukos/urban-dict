export default function PreTest({ post }: { post: { word?: string | null, definition?: string | null, example?: string | null, authorName?: string | null, createdAt?: string | null } }) {
    return <>
        <div class="w-11/12 md:w-1/2 flex flex-col gap-3 bg-slate-100 p-4 mx-auto rounded-xl">
            <h1 class="text-5xl font-semibold text-blue-700">{post.word}</h1>
            <p>{post.definition}</p>
            {post.example && <i>{post.example}</i>}
            <p>{post.authorName && <span class="text-blue-700 font-medium">{post.authorName}</span>} at {post.createdAt?.split('T')[0]}</p>
        </div>
    </>
}
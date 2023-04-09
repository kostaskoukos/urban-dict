export default function PreTest(props: { word?: string, definition?: string, example?: string, authorName?: string, createdAt?: string }) {
    return <>
        <div class="w-fit flex flex-col gap-3 bg-slate-100 p-4 mx-auto rounded-xl">
            <p className="text-lg">{props.word}, {props.definition}, {props.example}, {props.authorName}, {props.createdAt}</p>
            <h1 class="text-5xl font-semibold text-blue-700">Word</h1>
            <p>DEFINITION: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, magnam?</p>
            <i>EXAMPLE: Lorem ipsum dolor sit amet.<br />
                Lorem ipsum dolor sit.
            </i>
            <p>by <span class="text-blue-700 font-medium">JoeMama</span> March 25th 1821</p>
        </div>
    </>
}
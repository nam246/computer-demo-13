import FileAction from "./FileAction";

export default function File({ path, imgSrc, fileName }: { path?: string | Buffer | URL, imgSrc: string, fileName: string }) {

    return (
        <div className="relative text-center rounded">
            <div className="group flex flex-col items-center p-2 w-fit border border-transparent hover:border-slate-300 hover:bg-slate-100">
                <FileAction path={path} />
                <div className="w-24 h-24">
                    <img className="w-full h-full object-contain" src={imgSrc} alt="image" />
                </div>
                <p>{fileName}</p>
            </div>
        </div>
    )
}
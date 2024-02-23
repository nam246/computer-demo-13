import FileAction from "./FileAction"


export default function Folder({ name, handleClick }: { name: string, handleClick: any }) {
    return (
        <div onDoubleClick={handleClick} className="relative text-center rounded">
            <div className="group flex flex-col items-center p-2 w-fit border border-transparent hover:border-slate-300 hover:bg-slate-100">
                <FileAction />
                <div className="w-24 h-24">
                    <i className="text-6xl fa-solid fa-folder"></i>
                </div>
                <p>{name}</p>
            </div>
        </div>
    )
}
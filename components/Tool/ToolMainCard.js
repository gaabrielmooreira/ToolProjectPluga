
export default function ToolCard({ tool, openModal }){
    const { name, color, icon } = tool;

    return (
        <div style={{backgroundColor: `${color}`}} onClick={() => openModal(tool)} className="flex flex-col items-center justify-between w-48 h-48 rounded p-6 gap-5 cursor-pointer">
            <div className="w-24 h-24">
                <img src={icon} />
            </div>
            <div className="w-full flex justify-center items-center h-8">
                <p className="text-center text-white font-bold">{name}</p>
            </div>
        </div>
    )
}
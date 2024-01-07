
export default function ToolMiniCard({ tool, openModal }){
    const { name, color, icon } = tool;

    return (
        <div onClick={() => openModal(tool)} className="flex flex-col justify-between p-3 gap-5">
            
            <div style={{backgroundColor: `${color}`}} onClick={() => openModal(tool)} className={`size-20 rounded-full p-6 gap-5 cursor-pointer xl:size-24`}>
                <img src={icon} />
            </div>

            <div className="w-20 h-6 flex justify-center items-center xl:w-24">
                <p className="text-center text-[#a19f9e] font-bold" >{name}</p>
            </div>
        </div>
    )
}
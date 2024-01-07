
export default function ToolSearchBar({ toolList, searchTool, searchText }){

    return (
        <>
            <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <div style={{backgroundColor: `${searchText.length > 0 ? toolList[0]?.color:"#a8b8c0"}`}} className="h-7 w-7 fill-slate-300 rounded">
                    {searchText.length > 0 && <img src={toolList[0]?.icon} />}
                </div>
            </span>
            
            <input 
                onChange={(e) => searchTool(e.currentTarget.value)} 
                value={searchText} 
                placeholder="BUSCAR FERRAMENTA" 
                className="flex items-center flex-initial w-full h-16 bg-white py-2 pl-11 rounded border-solid border-2 border-[#a8b8c0] text-[#757575] focus:outline-none placeholder:text-[#757575]" 
            />
            </label>
        </>
    )
}
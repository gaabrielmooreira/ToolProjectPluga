import ToolMiniCard from "./ToolMiniCard";

export default function ToolModal({ modalSettings, openModal, closeModal }){
    const { tool, historyTools } = modalSettings;
    
    const filterHistoryTools = () => {
        let filteredHistoryTools = [];
        let hashTable = {};
        
        for(let i = 0; i < historyTools.length; i++){
            const historyTool = historyTools[i];
            if(filteredHistoryTools.length === 3) return filteredHistoryTools;
            
            if(historyTool.app_id !== tool.app_id && !hashTable[historyTool.app_id]){
                hashTable[historyTool.app_id] = true;
                filteredHistoryTools.push(historyTool);
            }
        }

        return filteredHistoryTools;
    }

    const modalHistoryTools = filterHistoryTools();

    return (
        <>
            <div onClick={() => closeModal()} className="fixed w-screen h-screen z-40 flex items-center justify-center bg-black/[.8]">
            </div>

            <div className="fixed w-5/12 h-4/6 inset-y-0 inset-x-0 mx-auto my-auto z-50 flex flex-col justify-between items-center bg-white rounded p-10 gap-8">
                <div className="w-full h-full flex justify-center items-center gap-12">
                    
                    <div style={{backgroundColor: `${tool.color}`}} onClick={() => openModal(tool)} className={`size-24 rounded-full p-6 gap-5 xl:size-28`}>
                        <img src={tool.icon} />
                    </div>
                    
                    <div className="flex flex-col justify-center gap-3">
                        <div className="flex justify-center items-center p-3">
                            <p className="text-[#a19f9e] font-bold">{tool.name}</p>
                        </div>

                        <a href={tool.link} target="_blank" className="w-32 h-10 flex justify-center items-center bg-[#0da6fd] text-white text-sm font-bold rounded-full">
                            ACESSAR
                        </a>
                    </div>
                </div>

                {modalHistoryTools.length > 0 && <div className="w-full flex flex-col justify-center gap-3">
                    <p className="font-bold text-[#a19f9e]">ÚLTIMAS FERRAMENTAS VISUALIZADAS</p>

                    <div className="flex justify-between items-center gap-5 w-full">
                        {modalHistoryTools.map(tool => <ToolMiniCard key={tool.app_id} tool={tool} openModal={openModal} />)}
                    </div>
                </div>}
            </div>
        </>
    )
}
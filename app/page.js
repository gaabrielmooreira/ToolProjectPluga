'use client'

import tools from '@/constants/tools.json';
import ToolMainCard from '@/components/Tool/ToolMainCard';
import ToolModal from '@/components/Tool/ToolModal';
import { useState } from 'react';
import ToolPagination from '@/components/Tool/ToolPagination';
import ToolSearchBar from '@/components/Tool/ToolSearchBar';

export default function Home() {
  const [toolList, setToolList] = useState(tools);
  const [searchText, setSearchText] = useState("");
  const [modalSettings, setModalSettings] = useState({
    isOpen: false,
    tool: {},
    historyTools: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [toolsPerPage, setToolsPerPage] = useState(12);

  const searchTool = (inputValue) => {
    setSearchText(inputValue);
    setCurrentPage(1);

    if(inputValue == "") return setToolList(tools);

    const filteredToolList = [...toolList.filter(tool => tool.name.toLowerCase().includes(inputValue.toLowerCase()))];
    const sortedFilteredToolList = filteredToolList.sort((a, b) => a.name.indexOf(inputValue) - b.name.indexOf(inputValue));
    setToolList(sortedFilteredToolList);
  }

  const openModal = (tool) => {
    setModalSettings({
      isOpen: true,
      tool,
      historyTools: [tool, ...modalSettings.historyTools]
    });
  }
  const closeModal = () => {
    setModalSettings({
      isOpen: false,
      tool: {},
      historyTools: modalSettings.historyTools
    })
  }
  
  const previousPage = () => currentPage - 1 > 0 ? setCurrentPage(currentPage - 1):null;
  const nextPage = () => currentPage + 1 < Math.ceil(toolList.length/toolsPerPage) + 1 ? setCurrentPage(currentPage + 1):null;

  return (
    <>
      {modalSettings.isOpen && <ToolModal modalSettings={modalSettings} openModal={openModal} closeModal={closeModal}/>}

      <main className="h-full w-full flex flex-col p-10">
        <ToolSearchBar 
          toolList={toolList}
          searchTool={searchTool}
          searchText={searchText}
        />

        <div className="flex flex-wrap justify-center p-5 gap-6">
          {toolList
            .slice(0 + toolsPerPage*(currentPage-1), toolsPerPage + toolsPerPage*(currentPage-1))
            .map(tool => <ToolMainCard key={tool.app_id} tool={tool} setModalSettings={setModalSettings} openModal={openModal} />)}
        </div>
        
        {toolList.length > toolsPerPage && 
          <ToolPagination 
            toolList={toolList} 
            currentPage={currentPage} 
            toolsPerPage={toolsPerPage}
            previousPage={previousPage}
            nextPage={nextPage}
          />}
      </main>
    </>
  )
}

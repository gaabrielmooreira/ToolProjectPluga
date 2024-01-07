
export default function ToolPagination({ toolList, currentPage, toolsPerPage, previousPage, nextPage }){

    return (
        <div className="flex self-center gap-2">
          <button className="text-[#757575]" onClick={() => previousPage()}>{"<"}</button>

          <p className="text-[#757575]">{`${currentPage} de ${Math.ceil(toolList.length/toolsPerPage)}`}</p>

          <button className="text-[#757575]" onClick={() => nextPage()}>{">"}</button>
        </div>
    )
}
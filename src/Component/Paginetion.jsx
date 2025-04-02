function Paginetion ({handelPageChange, pageNumber, currentpage}) {
    return(
        <div className="w-[200px] flex self-center gap-4 mt-4">
        {pageNumber.map((page) => (
          <button className={`border text-white rounded-lg p-4 cursor-pointer hover:bg-[#f7c600] hover:text-black 
            ${currentpage === page ? 'bg-[#f7c600] !text-black border-black' : 'bg-transparent'}`}
            key={page}
            onClick={() => handelPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    )
}

export default Paginetion
import Search from "../Component/Search";
import Moviecard from "../Component/Moviecard";
import Paginetion from "../Component/Paginetion";

function Movies({ loading, handelInputChange, handelSearch, search, addToFaverate, faverate, currentItems, handelPageChange, pageNumber, selectedType, handelTypeChange, currentpage }) {
  return (
    <div className="text-[#CCFF00] flex flex-col ">
      <div className="flex self-center">
        <Search
          handelInputChange={handelInputChange}
          handelSearch={handelSearch}
          search={search} />
        <select className="selection-box flex" value={selectedType} onChange={handelTypeChange}>
          <option className="option-row" value="">All</option>
          <option className="option-row" value="movie">Movie</option>
          <option className="option-row" value="series">Series</option>
          <option className="option-row" value="episode">Episode</option>
        </select>
      </div>
      <Moviecard
        loading={loading}
        addToFaverate={addToFaverate}
        currentItems={currentItems}
        faverate={faverate}
      />
      <Paginetion className=""
        handelPageChange={handelPageChange}
        pageNumber={pageNumber}
        currentpage={currentpage} />
    </div>
  );
}

export default Movies;

import React from "react";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="flex justify-around pt-2 font-bold">
      {gotoPrevPage && (
        <button className="bg-slate-400" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="bg-slate-400" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;

import "./Pagination.modules.css"



const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="container">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn-pagination"
            >
                &#8249; 
            </button>
            <span className="text">
                {currentPage} de {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn-pagination"
            >
                &#8250; 
            </button>
        </div>
    );
};

export default Pagination;
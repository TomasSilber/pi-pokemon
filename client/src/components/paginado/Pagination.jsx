import style from "./Pagination.modules.css"



const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={style.container}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={style.button}
            >
                &#8249; 
            </button>
            <span className={style.text}>
                {currentPage} de {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={style.button}
            >
                &#8250; 
            </button>
        </div>
    );
};

export default Pagination;
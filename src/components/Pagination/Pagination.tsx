import React from 'react';
import { Button } from '@mui/material';
import './Pagination.scss'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <Button variant="outlined" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
            {pageNumbers.map(number => (
                <Button
                    key={number}
                    variant="contained"
                    onClick={() => setCurrentPage(number)}
                    sx={{
                        margin: '0 5px',
                        backgroundColor: currentPage === number ? '#2196f3' : 'transparent',
                        color: currentPage === number ? '#fff' : '#000'
                    }}
                >
                    {number}
                </Button>
            ))}
            <Button variant="outlined" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
        </div>
    );
};

export default Pagination;

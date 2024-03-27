
import { Button, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Home.scss';

const Home = () => {
    const [tags, setTags] = useState([]);
    const [sortBy, setSortBy] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        fetch(`https://api.stackexchange.com/2.3/tags?&site=stackoverflow&key=yEEc3l4ItvLA169u5hStrw((`)
            .then(response => response.json())
            .then(data => setTags(data.items));
    }, []);

    const sortedTags = [...tags].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedTags.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedTags.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleChangeItemsPerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    }

    return (
        <div className="home-container">
            <h2>Popular Tags on Stack Overflow</h2>
            <div className="sort-options">
                <InputLabel sx={{ fontSize: '15px' }}>
                    Sort by:
                    <Select sx={{ height: '40px', margin: '0 10px' }} value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <MenuItem value="name">Tag</MenuItem>
                        <MenuItem value="count">Post Count</MenuItem>
                    </Select>
                </InputLabel>
                <InputLabel sx={{ fontSize: '15px' }}>
                    Sort direction:
                    <Select sx={{ height: '40px', marginLeft: '10px' }} value={sortDirection} onChange={e => setSortDirection(e.target.value)}>
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </InputLabel>
            </div>
            <div className="pagination">
                <InputLabel sx={{ fontSize: '15px' }}>
                    Items per page:
                    <Select sx={{ height: '40px', marginLeft: '10px' }} value={itemsPerPage} onChange={handleChangeItemsPerPage}>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                        <MenuItem value="50">50</MenuItem>
                    </Select>
                </InputLabel>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tag</TableCell>
                        <TableCell>Post Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentItems.map(tag => (
                        <TableRow key={tag.name}>
                            <TableCell>{tag.name}</TableCell>
                            <TableCell>{tag.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="pagination">
                <Button variant="outlined" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
                {pageNumbers.map(number => (
                    <Button variant="contained"
                        key={number}
                        sx={{ margin: '0 5px', backgroundColor: currentPage === number ? '#2196f3' : 'transparent', color: currentPage === number ? '#fff' : '#000' }}

                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </Button>
                ))}
                <Button variant="outlined" onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= sortedTags.length}>Next</Button>
            </div>
        </div>
    );
};

export default Home;

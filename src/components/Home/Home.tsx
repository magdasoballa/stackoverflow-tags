import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import './Home.scss';
import useTagStore from '../../store/store';
import TagsTable from '../Table/TagsTable';
import Pagination from '../Pagination/Pagination';
import SortingOptions from '../SortingOptions/SortingOptions';

const Home = () => {
    const [sortBy, setSortBy] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const { tags, loading, error, fetchTags } = useTagStore();

    useEffect(() => {
        fetchTags();
    }, [fetchTags]);

    if (loading) return <div className='loader'><CircularProgress /></div>
    if (error) return <div className='error'>Error: {error}</div>;
    if (!tags || !Array.isArray(tags) || tags.length === 0) return <div className="empty-table">No data available</div>;

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
    const totalPages = Math.ceil(sortedTags.length / itemsPerPage);

    const handleChangeItemsPerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    }

    return (
        <div className="home-container">
            <h2>Popular Tags on Stack Overflow</h2>
            <div className="sort-options">
                <SortingOptions
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    setSortBy={setSortBy}
                    setSortDirection={setSortDirection}
                    itemsPerPage={itemsPerPage}
                    handleChangeItemsPerPage={handleChangeItemsPerPage}
                    tagsLength={tags.length}
                />
            </div>
            <div className="content">
                <>
                    <TagsTable elements={currentItems} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                </>
            </div>
        </div>
    );
};

export default Home;

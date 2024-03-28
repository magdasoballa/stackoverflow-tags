import React from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';
import './SortingOptions.scss'

const SortingOptions = ({
    sortBy,
    sortDirection,
    setSortBy,
    setSortDirection,
    itemsPerPage,
    handleChangeItemsPerPage,
    tagsLength
}) => {
    return (
        <>
            <InputLabel sx={{ fontSize: '15px' }}>
                Sort by:
                <Select sx={{ height: '40px', margin: '0 10px' }} value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <MenuItem value="name">Tag name</MenuItem>
                    <MenuItem value="count">Post Count</MenuItem>
                </Select>
            </InputLabel>
            <InputLabel sx={{ fontSize: '15px' }}>
                Sort direction:
                <Select sx={{ height: '40px', margin: '0 10px' }} value={sortDirection} onChange={e => setSortDirection(e.target.value)}>
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
            </InputLabel>
            <InputLabel sx={{ fontSize: '15px' }}>
                Items per page:
                <Select sx={{ height: '40px', marginLeft: '10px' }} value={itemsPerPage} onChange={handleChangeItemsPerPage}>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                    <MenuItem value="50"> {tagsLength > 50 ? 50 : tagsLength}</MenuItem>
                </Select>
            </InputLabel>
        </>
    );
};

export default SortingOptions;

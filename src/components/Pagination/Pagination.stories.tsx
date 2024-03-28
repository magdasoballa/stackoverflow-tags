import Pagination from "./Pagination";

export const DefaultPagination = () => (
    <Pagination currentPage={1} totalPages={10} setCurrentPage={() => { }} />
);

export const PaginationWithMorePages = () => (
    <Pagination currentPage={5} totalPages={10} setCurrentPage={() => { }} />
);

export const PaginationWithDisabledPreviousButton = () => (
    <Pagination currentPage={1} totalPages={5} setCurrentPage={() => { }} />
);

export const PaginationWithDisabledNextButton = () => (
    <Pagination currentPage={5} totalPages={5} setCurrentPage={() => { }} />
);

export default {
    title: 'Components/Pagination',
    component: Pagination,
};

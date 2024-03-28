import React from 'react';
import { action } from '@storybook/addon-actions';
import SortingOptions from './SortingOptions';

export default {
    title: 'Components/SortingOptions',
    component: SortingOptions,
};

const Template = (args) => <SortingOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
    sortBy: 'name',
    sortDirection: 'asc',
    setSortBy: action('setSortBy'),
    setSortDirection: action('setSortDirection'),
    itemsPerPage: 10,
    handleChangeItemsPerPage: action('handleChangeItemsPerPage'),
    tagsLength: 100,
};

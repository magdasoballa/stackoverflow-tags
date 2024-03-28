import React from 'react';
import { Tag } from '../../interfaces/tagsInterfaces';
import TagsTable from './TagsTable';

export default {
  title: 'Components/TagsTable',
  component: TagsTable,
};

const tags: Tag[] = [
  { name: 'Tag1', count: 10 },
  { name: 'Tag2', count: 20 },
  { name: 'Tag3', count: 30 },
];

export const WithData = () => <TagsTable elements={tags} />;

export const WithoutData = () => <TagsTable elements={[]} />;

export const WithLargeData = () => {
  const largeTags: Tag[] = [];
  for (let i = 1; i <= 50; i++) {
    largeTags.push({ name: `Tag${i}`, count: i * 10 });
  }
  return <TagsTable elements={largeTags} />;
};

export const Default = () => <TagsTable elements={tags} />;


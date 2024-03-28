import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Tag } from '../../interfaces/tagsInterfaces';
import { formatLargeNumber } from '../../utils/helpers';
import './TagsTable.scss'

const TagsTable: React.FC<{ elements: Tag[] }> = ({ elements }) => {
    return <Table className='table'>
        <TableHead>
            <TableRow>
                <TableCell>Tag</TableCell>
                <TableCell>Post Count</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>

            {elements.map(tag => (
                <TableRow key={tag.name}>
                    <TableCell>{tag.name}</TableCell>
                    <TableCell>{formatLargeNumber(tag.count)}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}

export default TagsTable
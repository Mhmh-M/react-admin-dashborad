import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { columns, rows } from '../../data/dataContact';
import Head from './../Head'

function Contacts() {
    return (
        <Box>
            <Head
                title="CONTACTS"
                subTitle="List of Contacts for Future Reference"
            />
            <Box sx={{ height: 600, width: '100%', mx: 'auto' }}>
                <DataGrid
                    slots={{ toolbar: GridToolbar }}
                    rows={rows}
                    // @ts-ignore
                    columns={columns} />
            </Box>
        </Box>
    )
}

export default Contacts
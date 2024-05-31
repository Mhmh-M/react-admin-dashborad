import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { columns, rows } from '../../data/dataInvoices';
import Head from '../Head';


function Invoices() {
    return (
        <Box>
            <Head title="INVOICES" subTitle="List of Invoice Balances" />

            <Box sx={{ height: "78.2vh", width: '100%', mx: 'auto' }}>
                <DataGrid
                    checkboxSelection
                    slots={{ toolbar: GridToolbar }}
                    rows={rows}
                    // @ts-ignore
                    columns={columns} />
            </Box>
        </Box>
    )
}

export default Invoices
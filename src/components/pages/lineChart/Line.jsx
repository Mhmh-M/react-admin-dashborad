import { Box } from '@mui/material'
import LineChart from './LineChart'
import Head from '../../Head'

export default function Line() {
    return (
        <Box>
            <Head title="Line Chart" subTitle="Simple Line Chart" />
            <LineChart />
        </Box>
    )
}

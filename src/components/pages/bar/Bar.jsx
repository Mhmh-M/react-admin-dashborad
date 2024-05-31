import { Box } from '@mui/material';
import BarChart from './BarChart.jsx';
import Head from './../../Head.jsx'




export default function Bar() {


    return (
        <Box>
            <Head
                title="Bar Chart"
                subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
            />
            <BarChart />
        </Box>
    )
}

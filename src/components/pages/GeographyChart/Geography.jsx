import { Box } from '@mui/material';
import GeographyChart from './GeographyChart.jsx';
import { useTheme } from '@mui/material';
import Head from '../../Head.jsx';


export default function Geography() {
    const theme = useTheme();


    return (
        <Box>
            <Head title="Geography" subTitle="Simple Geography Chart" />
            <Box sx={{ height: '85vh', border: `1px solid ${theme.palette.text.primary}`, borderRadius: '5px' }}>
                <GeographyChart />
            </Box>
        </Box>
    )
}

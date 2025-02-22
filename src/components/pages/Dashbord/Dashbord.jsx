import { DownloadOutlined } from "@mui/icons-material"
import { Box, Button, Stack } from "@mui/material"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import Head from "../../Head"

function Dashbord() {
    return (
        <div>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Head
                    isDashboard={true}
                    title={"DASHBOARD"}
                    subTitle={"Welcome to your dashboard"}
                />

                <Box sx={{ textAlign: "right", mb: 1.3 }}>
                    <Button
                        sx={{ padding: "6px 8px", textTransform: "capitalize" }}
                        variant="contained"
                        color="primary"
                    >
                        <DownloadOutlined />
                        Download Reports
                    </Button>
                </Box>
            </Stack>
            <Row1 />
            <Row2 />
            <Row3 />
        </div>
    )
}

export default Dashbord
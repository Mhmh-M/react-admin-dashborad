import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';
import { rows } from '../../data/dataTeam.js';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Head from '../Head.jsx';




function ManageTeam() {

  const theme = useTheme()

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    { field: "name", headerName: "Name", align: "center", headerAlign: "center" },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            backgroundColor: theme.palette.primary.dark,
            p: '5px',
            width: '99px',
            borderRadius: '3px',
            textAlign: 'center',
            display: 'flex',
            color: "#fff",
            justifyContent: 'space-evenly',
            bgcolor: access === 'Admin' ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : '#3da58a'
          }}>
            {access === 'Admin' && (<AdminPanelSettingsOutlinedIcon fontSize='small' />)}
            {access === 'Manager' && (<SecurityOutlinedIcon fontSize='small' />)}
            {access === 'User' && (<LockOpenOutlinedIcon fontSize='small' />)}
            <Typography sx={{ fontSize: '13px' }} variant='body1'> {access} </Typography>
          </Box>
        )
      }
    },
  ];


  return (
    <Box>
      <Head title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ height: 600, width: '100%', mx: 'auto' }}>
        <DataGrid rows={rows}
          // @ts-ignore
          columns={columns} />
      </Box>
    </Box>
  )
}

export default ManageTeam
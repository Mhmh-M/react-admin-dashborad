import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Stack, Tooltip } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
// @ts-ignore
import img1 from '../../public/imegs/1.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    // @ts-ignore
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const firstArry = [
    {
        text: 'Dashborad',
        icon: <HomeOutlinedIcon />,
        path: '/',
    },
    {
        text: 'Manage Team',
        icon: <PeopleOutlineOutlinedIcon />,
        path: '/team',
    },
    {
        text: 'Contacts Information',
        icon: <ContactsOutlinedIcon />,
        path: '/contacts',
    },
    {
        text: 'Invoices Balances',
        icon: <ReceiptOutlinedIcon />,
        path: '/invoices',
    },
];
const secondArry = [
    {
        text: 'Profile Form',
        icon: <Person2OutlinedIcon />,
        path: '/form',
    },
    {
        text: 'Calendar',
        icon: <CalendarMonthOutlinedIcon />,
        path: '/calendar',
    },
    {
        text: 'Faq Page',
        icon: <HelpOutlineOutlinedIcon />,
        path: '/faq',
    },
];
const lastArry = [
    {
        text: 'Bar Chart',
        icon: <BarChartOutlinedIcon />,
        path: '/bar',
    },
    {
        text: 'Pie Chart',
        icon: <PieChartOutlineOutlinedIcon />,
        path: '/pie',
    },
    {
        text: 'Line Chart',
        icon: <TimelineOutlinedIcon />,
        path: '/line',
    },
    {
        text: 'Geography Chart',
        icon: <MapOutlinedIcon />,
        path: '/geography',
    },
];

// eslint-disable-next-line react/prop-types
export default function MiniDrawer({ setMode }) {

    const location = useLocation()

    const navigate = useNavigate()

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed"
                // @ts-ignore
                open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box flexGrow={1}></Box>
                    <Stack direction={'row'}>
                        {theme.palette.mode === 'light' ? (
                            <IconButton color='inherit' onClick={() => {
                                localStorage.setItem('currentMode', theme.palette.mode === 'dark' ? "light" : 'dark')
                                setMode((prevMode) =>
                                    prevMode === 'light' ? 'dark' : 'light',
                                );
                            }}>
                                <WbSunnyOutlinedIcon />
                            </IconButton>
                        ) : (
                            <IconButton color='inherit' onClick={() => {
                                localStorage.setItem('currentMode', theme.palette.mode === 'dark' ? "light" : 'dark')
                                setMode((prevMode) =>
                                    prevMode === 'light' ? 'dark' : 'light',
                                );
                            }}>
                                <DarkModeOutlinedIcon />
                            </IconButton>
                        )}
                        <IconButton color='inherit'>
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                        <IconButton color='inherit'>
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton color='inherit'>
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <Box sx={{ mt: open ? "-40px" : 0, mb: open ? "40px" : 0, transition: '0.3s' }}>
                    <Avatar sx={{ mx: "auto", my: 1, width: open ? 88 : 44, height: open ? 88 : 44, border: "2px solid grey", transition: '0.3s' }} alt="Remy Sharp" src={img1} />
                    <Typography variant='body1' align='center' sx={{ fontSize: open ? 17 : 0, transition: '0.3s' }}>Karime</Typography>
                    <Typography variant='body1' align='center' sx={{ fontSize: open ? 15 : 0, transition: '0.3s', color: theme.palette.info.main }}>Admin</Typography>
                </Box>


                <Divider />
                <List>
                    {firstArry.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <Tooltip title={open ? null : item.text} placement="left">
                                <ListItemButton
                                    onClick={() => {
                                        navigate(item.path)
                                    }}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {secondArry.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <Tooltip title={open ? null : item.text} placement="left"><ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null
                                }}
                            >
                                <ListItemIcon
                                    sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton></Tooltip>

                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {lastArry.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <Tooltip title={open ? null : item.text} placement="left"><ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null
                                }}
                            >
                                <ListItemIcon
                                    sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton></Tooltip>

                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi.</div>
                <Outlet />
            </Box> */}
        </Box>
    );
}

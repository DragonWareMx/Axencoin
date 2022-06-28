import { AppBar, Box, Button, Collapse, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './styles/style.css'

import Logo from './assets/Logopequeno.png'
import { Footer } from '../Footer'

import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const Layout = ({children}) => {
	const location = useLocation();
	const theme = useTheme();

	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-start',
	}));

	const [anchorEl, setAnchorEl] = React.useState(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	//LIST SUB MENU
	const [openList, setOpenList] = React.useState(false);

	const handleClickList = () => {
		setOpenList(!openList);
	};

	return (
		// <ThemeProvider theme={theme}>
		<div className="layout-container">
			<AppBar position="static" color='transparent' sx={{ boxShadow: "none" }}>
				<Container>
					<Toolbar sx={{ justifyContent: "center" }}>
						<Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center" }} className='nav-links-container'>
							<Link to='/'>
								<img src={Logo} alt="Logo" className='logo-header' />
							</Link>
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: "left" }} className='nav-links-container'>
							<IconButton
								aria-label="open drawer"
								edge="end"
								onClick={handleDrawerOpen}
								sx={{ color: "white" }}
							>
								<MenuIcon />
							</IconButton>
						</Box>
						<Box sx={{ display: { xs: 'none', md: 'flex' } }} className='nav-links-container'>
							<Button
								component={NavLink}
								sx={{ textTransform: "none" }}
								to="/panel"
							>
								Panel
							</Button>
							<Button
								sx={{ textTransform: "none" }}
								className={"button-dropdown" + ((location.pathname === '/compra' || location.pathname === '/recibe' || location.pathname === '/swap' || location.pathname === '/envia' || location.pathname === '/retira') ? " active" : "")}
								onClick={handleClick}
								// component={NavLink}
								// to="#"
								// isActive={(match, location) => {
								// 	console.log(match, location);
								// 	return true
								// }}
							>
								Compra AXN
							</Button>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={openMenu}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'basic-button',
								}}
								PaperProps={{
									style: {
										width: '140px',
										// backgroundColor: "#0071ce"
									},
								}}
							>
								<MenuItem onClick={handleClose} selected={location.pathname === '/compra'}><Link to={'/compra'} className="menu-item">Compra</Link></MenuItem>
								<MenuItem onClick={handleClose} selected={location.pathname === '/recibe'}><Link to={'/recibe'} className="menu-item">Recibe</Link></MenuItem>
								<MenuItem onClick={handleClose} selected={location.pathname === '/swap'}><Link to={'/swap'} className="menu-item">Swap</Link></MenuItem>
								<MenuItem onClick={handleClose} selected={location.pathname === '/envia'}><Link to={'/envia'} className="menu-item">Envia</Link></MenuItem>
								<MenuItem onClick={handleClose} selected={location.pathname === '/retira'}><Link to={'/retira'} className="menu-item">Retira</Link></MenuItem>
							</Menu>
							<Button
								component={NavLink}
								sx={{ textTransform: "none" }}
								
								to="/cuenta"
							>
								Cuenta
							</Button>
							<Button
								component={NavLink}
								sx={{ textTransform: "none" }}
								
								to="/calculadora"
							>
								Calculadora
							</Button>
							<Button
								className="button-dropdown"
								sx={{ textTransform: "none" }}
								onClick={() => window.open('https://docs.axencoin.finance/', '_blank', 'noopener,noreferrer')}
							>
								Documentos
							</Button>
						</Box>
						<Button
							variant="contained"
							size='large'
							id='BNB_CONNECT'
							className='text-truncate'
							style={{ borderRadius: 25 }}
						>
							{/* Desconectar */}
						</Button>
					</Toolbar>
					<div className='polygon-layout'>Axen</div>
					<div className='bolita'></div>
				</Container>
			</AppBar>

			<Container style={{ paddingBottom: 60 }}>
				{children}
			</Container>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						background: "rgba(0,0,0,0.7)",
						color: "white"
					},
				}}
				variant="temporary"
				anchor="right"
				open={open}
				onClose={handleDrawerClose}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose} sx={{ color: "white" }} >
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
					<Link to='/'>
						<img src={Logo} alt="Logo" className='logo-header' />
					</Link>
				</DrawerHeader>
				<List>
						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							selected={location.pathname === '/panel'}
							to="/panel"
						>
							<ListItemText primary="Panel" />
						</ListItemButton>

						<ListItemButton
							onClick={handleClickList}
							sx={{ textTransform: "none" }}
							selected={(location.pathname === '/compra' || location.pathname === '/recibe' || location.pathname === '/swap' || location.pathname === '/envia' || location.pathname === '/retira')}
						>
							<ListItemText primary="Compra AXN" />
							{openList ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse in={openList} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<ListItemButton
									component={NavLink}
									sx={{ textTransform: "none", pl: 4 }}
									selected={location.pathname === '/compra'}
									to="/compra"
								>
									<ListItemText primary="Compra" />
								</ListItemButton>

								<ListItemButton
									component={NavLink}
									sx={{ textTransform: "none", pl: 4 }}
									selected={location.pathname === '/recibe'}
									to="/recibe"
								>
									<ListItemText primary="Recibe" />
								</ListItemButton>

								<ListItemButton
									component={NavLink}
									sx={{ textTransform: "none", pl: 4 }}
									selected={location.pathname === '/swap'}
									to="/swap"
								>
									<ListItemText primary="Swap" />
								</ListItemButton>

								<ListItemButton
									component={NavLink}
									sx={{ textTransform: "none", pl: 4 }}
									selected={location.pathname === '/envia'}
									to="/envia"
								>
									<ListItemText primary="Envia" />
								</ListItemButton>

								<ListItemButton
									component={NavLink}
									sx={{ textTransform: "none", pl: 4 }}
									selected={location.pathname === '/retira'}
									to="/retira"
								>
									<ListItemText primary="Retira" />
								</ListItemButton>
							</List>
						</Collapse>

						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							selected={location.pathname === '/cuenta'}
							to="/cuenta"
						>
							<ListItemText primary="Cuenta" />
						</ListItemButton>

						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							selected={location.pathname === '/calculadora'}
							to="/calculadora"
						>
							<ListItemText primary="Calculadora" />
						</ListItemButton>

						<ListItemButton
							className="button-navigation"
							onClick={() => window.open('https://docs.axencoin.finance/', '_blank', 'noopener,noreferrer')}
						>
							<ListItemText primary="Documentos" />
						</ListItemButton>
				</List>
			</Drawer>

			<Footer />
		</div>
		// </ThemeProvider>
	)
}

export default Layout
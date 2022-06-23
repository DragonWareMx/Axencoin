import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './styles/style.css'

import Logo from './assets/Logopequeno.png'
import { Footer } from '../Footer'

import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

const Layout = () => {
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
								style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
								to="/panel"
							>
								Panel
							</Button>
							<Button
								sx={{ textTransform: "none" }}
								className="button-dropdown"
								onClick={handleClick}
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
										backgroundColor: "#0071ce"
									},
								}}
							>
								<MenuItem onClick={handleClose}><Link to={'/compra'} className="menu-item">Compra</Link></MenuItem>
								<MenuItem onClick={handleClose}><Link to={'/recibe'} className="menu-item">Recibe</Link></MenuItem>
								<MenuItem onClick={handleClose}><Link to={'/swap'} className="menu-item">Swap</Link></MenuItem>
								<MenuItem onClick={handleClose}><Link to={'/envia'} className="menu-item">Envia</Link></MenuItem>
								<MenuItem onClick={handleClose}><Link to={'/swap'} className="menu-item">Swap</Link></MenuItem>
							</Menu>
							<Button
								component={NavLink}
								sx={{ textTransform: "none" }}
								style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
								to="/cuenta"
							>
								Cuenta
							</Button>
							<Button
								component={NavLink}
								sx={{ textTransform: "none" }}
								style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
								to="/calculadora"
							>
								Calculadora
							</Button>
							<Button
								component={NavLink}
								sx={{ textTransform: "none" }}
								style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
								to="https://docs.axencoin.finance/"
								target={"_blank"}
								onClick={() => window.open('https://docs.axencoin.finance/', '_blank', 'noopener,noreferrer')}
							>
								Documentos
							</Button>
						</Box>
						<Button
							variant="contained"
							size='large'
							style={{ borderRadius: 25 }}
						>
							Desconectar
						</Button>
					</Toolbar>
					<div className='polygon-layout'>Axen</div>
					<div className='bolita'></div>
				</Container>
			</AppBar>

			<Container style={{ paddingBottom: 60 }}>
				<Outlet />
			</Container>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
					},
				}}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
					<Link to='/'>
						<img src={Logo} alt="Logo" className='logo-header' />
					</Link>
				</DrawerHeader>
				<List>
					<ListItem>
						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							style={isActive => ({ color: isActive.isActive ? "#0071ce" : "inherit" })}
							to="/panel"
						>
							<ListItemText primary="Panel" />
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							style={isActive => ({ color: isActive.isActive ? "#0071ce" : "inherit" })}
							to="/compra"
						>
							<ListItemText primary="Compra AXN" />
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							style={isActive => ({ color: isActive.isActive ? "#0071ce" : "inherit" })}
							to="/cuenta"
						>
							<ListItemText primary="Cuenta" />
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							style={isActive => ({ color: isActive.isActive ? "#0071ce" : "inherit" })}
							to="/calculadora"
						>
							<ListItemText primary="Calculadora" />
						</ListItemButton>
					</ListItem>

					<ListItem>
						<ListItemButton
							component={NavLink}
							sx={{ textTransform: "none" }}
							style={isActive => ({ color: isActive.isActive ? "#0071ce" : "inherit" })}
							to="https://docs.axencoin.finance/"
							target={"_blank"}
							onClick={() => window.open('https://docs.axencoin.finance/', '_blank', 'noopener,noreferrer')}
						>
							<ListItemText primary="Documentos" />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>

			<Footer />
		</div>
		// </ThemeProvider>
	)
}

export default Layout
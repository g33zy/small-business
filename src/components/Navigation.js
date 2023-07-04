import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import cookie from "cookie";

const Navigation = () => {
    const navigate = useNavigate();

    const cookies = cookie.parse(document.cookie);
    
    return (
        <AppBar position="relative" sx={{bgcolor:'#2fb170'}}>
            <Toolbar>
                <IconButton color="inherit" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {/* <li className="nav-list-item">
                        <Link to="/details">Details</Link>
                    </li> */}
                    {/* <li className="nav-list-item">
                        <Link to="/add">Add</Link>
                    </li> */}
                    {cookies.loggedIn ? <li
                        className="nav-list-item"
                        onClick={() => {
                            document.cookie = cookie.serialize("loggedIn", null, {
                                maxAge: 0,
                                });
                                navigate("/");
                        }} style={{cursor: 'pointer', textDecoration: 'underline'}}
                    >
                        Logout
                    </li> : <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li> }
                    
                    
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from 'cookie'

function Login(props) {
  console.log(props)
    const navigate = useNavigate()
    const [state, setState] = useState({
        username: "",
        password: ""
    })


    const handleChange = (e) => {
        const newState = {...state}
        newState[e.target.name] = e.target.value
        setState(newState)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        document.cookie = cookie.serialize('loggedIn', 'true', { maxAge: 6000 });
        props.userInfo(state.username)
        navigate("/")
    }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={handleLogin}>
          <TextField
            required
            onChange={handleChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default Login
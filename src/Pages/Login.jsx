import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { useLoginUserMutation } from "../store/slice/Login.slice";

function CustomTextField({ label, onChange, ...props }) {
  return (
    
    <TextField
      label={label}
      fullWidth
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#009688",
          },
        "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
          transform: "translate(14px, -6px) scale(0.75)",
        },
        "& .MuiInputLabel-outlined": {
          "&.Mui-focused": {
            color: "#009688",
          },
        },
        ...props.sx,
      }}
      {...props}
    />
  );
}

const Homepage = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState();

  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await loginUser({ UserName: username, Password: password }).unwrap();
      // console.log('Login successful:', result);

      localStorage.setItem("accessToken", result.token);
      navigate('/')

    } catch (error) {
      // console.error('Login failed:', error);
    } finally {
      setTimeout(() => {
        setLoading(false); 
        setError("Invalid username or password");
      }, 1000); 
   }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div>
      {loading && <Loader open={loading} />}

      <Typography variant="h5" align="center" style={{ marginTop: "78px" }}>
        For access please send an email to&nbsp;
        <span style={{ color: "black", fontWeight: "bold" }}>
          firoj.shaikh@sumasoft.net&nbsp;
        </span>
        with your registered <br></br>client id
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="center-container">
            <div className="icon-circle">
              <LockIcon />
            </div>
            <div>
              <h3>Sign in</h3>
            </div>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomTextField
                label="User Name *"
                fullWidth
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextField
                label="Password *"
                fullWidth
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor: "#009688" }}
                style={{ backgroundColor: "#009688" }}
                disabled={isLoading}              >
                Sign In
              </Button>
              {error && <div style={{ color: "red", textAlign: "center", marginTop:'15px' }}>{error}</div>} 
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};
export default Homepage;

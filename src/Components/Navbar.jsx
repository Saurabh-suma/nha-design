import React , {useEffect} from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  // boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
});

const BrandTypography = styled(Typography)({
  flexGrow: 1,
  color: "#009688",
});

const LogoutButton = styled(Button)({
  backgroundColor: "#009688",
  color: "white",
  marginRight: "1rem",
  "&:hover": {
    backgroundColor: "#009688",
  },
});

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  

  // useEffect(() => {
  //   // Clear token on component mount
  //   localStorage.removeItem("accessToken");
  // }, []);


  return (
    <StyledAppBar position="static">
      <Toolbar>
        <BrandTypography variant="h6">NHA</BrandTypography>

        <LogoutButton variant="contained" onClick={handleLogout}>
          LOGOUT
        </LogoutButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;

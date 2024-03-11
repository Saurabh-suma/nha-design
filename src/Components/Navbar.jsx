// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-shadow">
//       <a className="navbar-brand ms-3" href="/" style={{ color: "#009688" }}>
//         NHA
//       </a>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav ms-auto">
//           <button
//             type="button"
//             className="btn me-4"
//             style={{ backgroundColor: "#009688", color: "white" }}
//           >
//             LOGOUT
//           </button>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-shadow">
//       <div className="container-fluid">
//         <a className="navbar-brand ms-3" href="/" style={{ color: "#009688" }}>
//           NHA
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <button
//                 type="button"
//                 className="btn me-4"
//                 style={{ backgroundColor: "#009688", color: "white" }}
//               >
//                 LOGOUT
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
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
    navigate("/login");
  };

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

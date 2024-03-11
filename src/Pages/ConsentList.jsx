import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button, Modal } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AppBar, Toolbar, InputBase, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Loader from "../Components/Loader";
import Modalform from "../Components/Modalform";

const ConsentList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleRefresh = () => {
    setShowLoader(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  const [rowData] = useState([
    {
      name: "Firoz Firoz Shaikh",
      id: "firozshaikh.f@sbx",
      status: "Consent Expired",
      createdAt: "02/02/2023 09:15",
      grantedOn: "-",
      expiryOn: "-",
    },
    {
      name: "vijay vijay kharkar",
      id: "vijay.v@sbx",
      status: "Consent Expired",
      createdAt: "02/02/2023 09:15",
      grantedOn: "-",
      expiryOn: "-",
    },
    {
      name: "saurabh kumar mahajan",
      id: "saurabh.s@sbx",
      status: "Consent Expired",
      createdAt: "02/02/2023 09:15",
      grantedOn: "06/12/2020 08:15",
      expiryOn: "-",
    },
    {
      name: "Kaushal Shivaji Chaudhari",
      id: "kaushal.k@sbx",
      status: "Consent Expired",
      createdAt: "02/02/2023 09:15",
      grantedOn: "22/05/2021 12:15",
      expiryOn: "22/09/2022 02:40",
    },
    {
      name: "SUma Soft Aundh",
      id: "sumasoft.s@sbx",
      status: "Consent Expired",
      createdAt: "04/02/2014 09:15",
      grantedOn: "04/09/2016",
      expiryOn: "16/08/2018",
    },
    {
      name: "SUma Soft Aundh",
      id: "sumasoft.s@sbx",
      status: "Consent Expired",
      createdAt: "04/02/2014 09:15",
      grantedOn: "04/09/2016",
      expiryOn: "16/08/2018",
    },
    {
      name: "SUma Soft Aundh",
      id: "sumasoft.s@sbx",
      status: "Consent Expired",
      createdAt: "04/02/2014 09:15",
      grantedOn: "04/09/2016",
      expiryOn: "16/08/2018",
    },
    {
      name: "SUma Soft Aundh",
      id: "sumasoft.s@sbx",
      status: "Consent Expired",
      createdAt: "04/02/2014 09:15",
      grantedOn: "04/09/2016",
      expiryOn: "16/08/2018",
    },
    {
      name: "SUma Soft Aundh",
      id: "sumasoft.s@sbx",
      status: "Consent Expired",
      createdAt: "04/02/2014 09:15",
      grantedOn: "04/09/2016",
      expiryOn: "16/08/2018",
    },
    {
      name: "Rohit rohit shama",
      id: "rohit.r12345@sbx",
      status: "Consent Expired",
      createdAt: "04/02/2014 09:15",
      grantedOn: "04/09/2016",
      expiryOn: "16/08/2018",
    },
    {
      name: "SUma Soft Aundh",
      id: "sumasoft.s@sbx",
      status: "Consent Expired",
      createdAt: "04/02/2014 09:15",
      grantedOn: "04/09/2016",
      expiryOn: "16/08/2018",
    },
    // Add more data as needed
  ]);

  const columnDefs = [
    {
      headerName: "Name",
      field: "name",
      headerClass: "custom-header",
      height: 150,
    },
    {
      headerName: "Health ID",
      field: "id",
      headerClass: "custom-header",
      height: 150,
    },
    {
      headerName: "Request Status",
      field: "status",
      headerClass: "custom-header",
    },
    {
      headerName: "Consent Created on",
      field: "createdAt",
      headerClass: "custom-header",
    },
    {
      headerName: "Consent Granted on",
      field: "grantedOn",
      headerClass: "custom-header",
    },
    {
      headerName: "Consent Expiry on",
      field: "expiryOn",
      headerClass: "custom-header",
    },
  ];

  const filteredData = rowData.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    // item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // item.createdAt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // item.grantedOn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // item.expiryOn.toLowerCase().includes(searchQuery.toLowerCase())
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar />

      <div className="mt-5  main">
        <div>
          <Button
            variant="contained"
            className="mb-4"
            style={{
              backgroundColor: "#009688",
              color: "white",
              fontFamily: "Roboto, sans-serif",
              fontSize: "13px",
              fontWeight: "bold",
            }}
            onClick={handleOpenModal}
          >
            NEW CONSENT REQUEST
          </Button>
          <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-title"
          >
            <Modalform open={showModal} handleClose={handleClose} />
          </Modal>
        </div>

        <AppBar
          position="static"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 4px rgba(0,0,0.2,0.8)",
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="navbar-brand"
              style={{ color: "black", fontSize: "24px" }}
            >
              CONSENT LIST
            </div>

            <div className="search-container">
              <IconButton>
                <SearchOutlinedIcon className="icon-search" fontSize="medium" />
              </IconButton>
              <InputBase
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
                style={{ marginLeft: "-1.5rem" }}
              />
              <IconButton onClick={handleRefresh}>
                <RefreshIcon className="refresh" />
              </IconButton>
              <Loader open={showLoader} />
            </div>
          </Toolbar>
        </AppBar>

        <div
          className="ag-theme-alpine"
          style={{
            height: "308px",
            "--ag-header-cell-hover-background-color": "#009688",
          }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={5}
            rowData={filteredData}
            domLayout="autoHeight"
            rowHeight={55}
            defaultColDef={{
              cellStyle: {
                display: "flex",
                alignItems: "center",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsentList;

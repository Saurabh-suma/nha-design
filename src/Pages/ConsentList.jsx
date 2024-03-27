import React, { useState, useEffect } from "react";
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
import { useGetAllDataQuery } from "../store/slice/Consent.slice";



const ConsentList = () => {  
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [userToken , setUserToken] = useState('')
  const [rowData, setRowData] = useState([]);

  const { data: UserData } = useGetAllDataQuery({ userToken });

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



  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setUserToken(storedAccessToken);
    }
  }, []);

  console.log(UserData?.data);


  useEffect(() => {
    const consentRequests = UserData?.data?.consentRequestId;
    const filteredData = [];

    if (consentRequests) {
      Object.keys(consentRequests).forEach((requestId) => {
        const consentData = consentRequests[requestId].consent;
        filteredData.push({
          requestId: requestId,
          name: consentData.requester.name,
          id: consentData.patient.id,
          createdAt: new Date(
            consentRequests[requestId].timestamp
          ).toLocaleString(),
          grantedOn: new Date(
            consentData.permission.dataEraseAt
          ).toLocaleString(),
          expiryOn: new Date(
            consentData.permission.dateRange.to
          ).toLocaleString(),
          status: consentRequests[requestId].status
        });
      });
    }
    setRowData(filteredData);
  }, [UserData]);

  const handleSearchInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchQuery(searchValue);
    const filteredRows = rowData.filter((row) =>
      row.name.toLowerCase().includes(searchValue)
    );
    setRowData(filteredRows);
  };


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
      headerName: "Request Status",
      field: "status",
      headerClass: "custom-header",
    },
  
    {
      headerName: "Consent Expiry on",
      field: "expiryOn",
      headerClass: "custom-header",
    },
  ];


  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

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
            rowData={rowData}
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

import React, { useState } from "react";
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Typography,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodayIcon from "@mui/icons-material/Today";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import { useGetSessionTokenQuery, useGetDataQuery } from "../store/slice/Consent.slice";

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#009688",
          "&.Mui-checked": {
            color: "#009688",
          },
        },
      },
    },
  },
});

const Modalform = ({ open, handleClose }) => {

  const { data: sessionData, error: sessionError, isLoading: sessionLoading } = useGetSessionTokenQuery();

  // Call the useGetDataQuery hook only once when component mounts
  const { data: fetchData, error: fetchError, isLoading: fetchLoading } = useGetDataQuery({ accessToken: sessionData?.accessToken }, { skip: sessionLoading });

  // console.log("888888888888888", fetchData)
  // console.log("7777777777777",sessionData)

  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState({
    opConsultation: false,
    diagnosticReports: false,
    dischargeSummary: false,
    prescription: false,
    immunizationRecord: false,
    healthDocumentRecord: false,
    wellnessRecord: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked: isChecked } = event.target;
    setChecked((prevChecked) => ({
      ...prevChecked,
      [name]: isChecked,
    }));
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const style = {
    width: "95%",
    height: "95%",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
  };

  const getInputStyles = (focusColor, selectedColor) => ({
    sx: {
      "&:focus": {
        borderColor: focusColor,
      },
      "&.Mui-focused:after": {
        borderColor: selectedColor,
      },
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{
        display: "flex",
        p: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ ...style, width: "80%" }}>
        <Grid container justifyContent="end">
          <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
        </Grid>

        <Grid
          item
          sx={{
            mt: 4,
            ml: 4,
            color: "rgb(0, 0, 0)",
            padding: "5px 0px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          <h2 id="child-modal-title">Consent request form</h2>

          <hr
            style={{
              color: "rgb(0, 0, 0)",
              width: "95%",
              borderBottom: "1px solid",
              borderBottomColor: "black",
            }}
          />

          <div
            style={{
              overflow: "auto",
              height: "calc(100vh - 200px)",
              padding: "20px",
              border: "none",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <span>All the fields are mandatory.</span>
                <Box mt={2} />
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>

            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={3.5}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Patient Identifier
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="standard" fullWidth>
                  <TextField
                    id="input-with-icon-adornment"
                    margin="normal"
                    size="small"
                    sx={{ width: "14.70rem" }}
                    variant="standard"
                    InputProps={{
                      ...getInputStyles("black", "#009688"),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography
                            variant="body1"
                            sx={{ marginRight: "-10px" }}
                          >
                            @sbx
                          </Typography>
                          <IconButton>
                            <ArrowDropDownIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <IconButton sx={{ ml: "-85px" }}>
                  <SearchOutlinedIcon
                    className="icon-search icon-modal"
                    fontSize="medium"
                  />
                </IconButton>
              </Grid>
            </Grid>

            <Box mt={3.4} />

            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={3.5}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Purpose of request
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    variant="standard"
                    InputProps={getInputStyles("black", "#009688")}
                    endAdornment={
                      <InputAdornment position="end">
                        <ArrowDropDownIcon />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box mt={2.6} />

            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={3.5}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Health info from
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="standard" fullWidth>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    maxDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    customInput={
                      <TextField
                        id="input-with-icon-adornment"
                        margin="normal"
                        size="small"
                        variant="standard"
                        InputProps={{
                          style: { color: "black" },
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment position="end">
                              <TodayIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Box mt={2} />

            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={3.5}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Health info to
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="standard" fullWidth>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    maxDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    customInput={
                      <TextField
                        id="input-with-icon-adornment"
                        margin="normal"
                        size="small"
                        variant="standard"
                        InputProps={{
                          style: { color: "black" },
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment position="end">
                              <TodayIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Box mt={4} />

            <ThemeProvider theme={theme}>
              <Grid container alignItems="center mt-1" spacing={1}>
                <Grid item xs={3.5}>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Health info type
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs={7}
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.opConsultation}
                          onChange={handleCheckboxChange}
                          name="opConsultation"
                        />
                      }
                      label="OP Consultation"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.diagnosticReports}
                          onChange={handleCheckboxChange}
                          name="diagnosticReports"
                        />
                      }
                      label="Diagnostic Reports"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.dischargeSummary}
                          onChange={handleCheckboxChange}
                          name="dischargeSummary"
                        />
                      }
                      label="Discharge Summary"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.prescription}
                          onChange={handleCheckboxChange}
                          name="prescription"
                        />
                      }
                      label="Prescription"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.immunizationRecord}
                          onChange={handleCheckboxChange}
                          name="immunizationRecord"
                        />
                      }
                      label="Immunization Record"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.healthDocumentRecord}
                          onChange={handleCheckboxChange}
                          name="healthDocumentRecord"
                        />
                      }
                      label="Health Document Record"
                    />
                  </Grid>
                  <Grid item xs={14}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.wellnessRecord}
                          onChange={handleCheckboxChange}
                          name="wellnessRecord"
                        />
                      }
                      label="Wellness Record"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </ThemeProvider>

            <Box mt={4} />

            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={3.5}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Consent Expiry
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="standard" fullWidth>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() + 1)
                      )
                    }
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    customInput={
                      <TextField
                        id="input-with-icon-adornment"
                        margin="normal"
                        size="small"
                        variant="standard"
                        InputProps={{
                          style: { color: "black" },
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment position="end">
                              <TodayIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Box mt={5} />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#009688",
                color: "white",
                fontFamily: "Roboto, sans-serif",
                fontSize: "13px",
                fontWeight: "bold",
                margin: "auto", 
                display: "block", 
              }}
            >
              REQUEST CONSENT
            </Button>
          </div>
        </Grid>
      </Box>
    </Modal>
  );
};
export default Modalform;

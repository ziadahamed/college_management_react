import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField"; 
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "dob", headerName: "Date of Birth", width: 150 },
  { field: "gender", headerName: "Gender", width: 120 },
  { field: "bloodGroup", headerName: "Blood Group", width: 130 },
  { field: "contactNumber", headerName: "Contact Number", width: 180 },
  { field: "address", headerName: "Address", width: 250 },
];

export default function StudentDashboard() {
  const [rows, setRows] = React.useState([
    {
      id: 1,
      firstName: "Ziad",
      lastName: "Ahamed",
      dob: "2002-04-10",
      gender: "Male",
      bloodGroup: "O+",
      contactNumber: "+91 9876543210",
      address: "123 Main St, City A",
    },
    {
      id: 2,
      firstName: "Sameer",
      lastName: "Mohamed",
      dob: "1992-06-15",
      gender: "Male",
      bloodGroup: "B+",
      contactNumber: "+91 9876543221",
      address: "456 Market St, City B",
    },
    {
      id: 3,
      firstName: "Shaheen",
      lastName: "Mohamed",
      dob: "1992-06-15",
      gender: "Male",
      bloodGroup: "B+",
      contactNumber: "+91 9876543221",
      address: "456 west St, City A",
    },

    {
      id: 3,
      firstName: "yoonus",
      lastName: "Mohamed",
      dob: "1990-08-24",
      gender: "Male",
      bloodGroup: "O+",
      contactNumber: "+91 9876543221",
      address: "456 east St, City c",
    },

    {
      id: 5,
      firstName: "Mohamed",
      lastName: "yaseen",
      dob: "1989-11-15",
      gender: "Male",
      bloodGroup: "B+",
      contactNumber: "+91 9876543221",
      address: "456 south St, City z",
    },

    {
      id: 6,
      firstName: "mohamed",
      lastName: "Mahsouk",
      dob: "1997-06-11",
      gender: "Male",
      bloodGroup: "AB+",
      contactNumber: "+91 9876543221",
      address: "456 north St, City B",
    },
  ]);

  const [faculties] = React.useState([
    { id: 1, name: "Prof.Mydeen", subject: "Mathematics" },
    { id: 2, name: "Dr. Mohaideen", subject: "Physics" },
    { id: 3, name: "Prof. Ibrahim", subject: "Chemistry" },
    { id: 4, name: "Dr. Riyaz Ahamed", subject: "Income Tax" },
    { id: 5, name: "Prof. Safi", subject: "Data Analytics" },
  ]);

  const [openAddEdit, setOpenAddEdit] = React.useState(false);
  const [openAssignFaculty, setOpenAssignFaculty] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState(null);
  const [selectedFaculty, setSelectedFaculty] = React.useState("");

  const [formData, setFormData] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    contactNumber: "",
    address: "",
  });

  // Open Add/Edit Student Dialog
  const handleAddClick = () => {
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      contactNumber: "",
      address: "",
    });
    setOpenAddEdit(true);
  };

  const handleEditClick = (selectedRow) => {
    setFormData(selectedRow);
    setOpenAddEdit(true);
  };

  // Open Assign Faculty Dialog
  const handleAssignFacultyClick = (selectedRow) => {
    setSelectedStudent(selectedRow);
    setOpenAssignFaculty(true);
  };

  const handleLogout = () => {
    // Logic for logging out
    window.location.href = "/login"; // Assuming "/login" is your login page route
  };

  const handleSave = () => {
    if (formData.id) {
      setRows(rows.map((row) => (row.id === formData.id ? formData : row)));
    } else {
      setRows([...rows, { ...formData, id: rows.length + 1 }]);
    }
    setOpenAddEdit(false);
  };

  const handleAssignSave = () => {
    alert(
      `Student ${selectedStudent.firstName} ${selectedStudent.lastName} has been assigned to ${selectedFaculty.name} for ${selectedFaculty.subject}.`
    );
    setOpenAssignFaculty(false);
  };

  return (
    <AppProvider
      navigation={[{ segment: "Faculty-dashboard", title: "Faculty Dashboard" }]}
      theme={{}}

      

    >
      <DashboardLayout>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              View All Students
            </Typography>
            <Button variant="contained" color="error" onClick={handleLogout}>
                  Log Out
                </Button>
          </Toolbar>
          
        </AppBar>
        <PageContainer sx={{ backgroundColor: "white", minHeight: "100vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" onClick={handleAddClick}>
                Add Student
              </Button>
            </Grid>
            <Grid item xs={12}>

            <Grid container spacing={2} mb={3}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ backgroundColor: "#e3f2fd", display: "flex", justifyContent: "space-between", padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">No of Faculty</Typography>
                  <Typography variant="h4" color="primary">
                    58
                  </Typography>
                </CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "blue", width: 50, height: 50 }}>F</Avatar>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ backgroundColor: "#ffebee", display: "flex", justifyContent: "space-between", padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">No of Students</Typography>
                  <Typography variant="h4" color="error">
                    234
                  </Typography>
                </CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "red", width: 50, height: 50 }}>S</Avatar>
                </Box>
              </Card>
            </Grid>
          </Grid>

              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={[
                    ...columns,
                    {
                      field: "actions",
                      headerName: "Actions",
                      width: 250,
                      renderCell: (params) => (
                        <Box display="flex" gap={1}>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleEditClick(params.row)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleAssignFacultyClick(params.row)}
                          >
                            Assign to Student
                          </Button>
                        </Box>
                      ),
                    },
                  ]}
                  checkboxSelection
                />
              </div>
            </Grid>
          </Grid>

          {/* Add/Edit Student Dialog */}
          <Dialog open={openAddEdit} onClose={() => setOpenAddEdit(false)}>
            <DialogTitle>{formData.id ? "Edit Student" : "Add Student"}</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="First Name"
                fullWidth
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Last Name"
                fullWidth
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Date of Birth"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Gender"
                fullWidth
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Blood Group"
                fullWidth
                value={formData.bloodGroup}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Contact Number"
                fullWidth
                value={formData.contactNumber}
                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Address"
                fullWidth
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenAddEdit(false)}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </DialogActions>
          </Dialog>

          {/* Assign Faculty Dialog */}
          <Dialog open={openAssignFaculty} onClose={() => setOpenAssignFaculty(false)}>
            <DialogTitle>Assign Student</DialogTitle>
            <DialogContent>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Assign a Student to {selectedStudent?.firstName} {selectedStudent?.lastName}.
              </Typography>
              <Select
                fullWidth
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                {faculties.map((faculty) => (
                  <MenuItem key={faculty.id} value={faculty}>
                    {faculty.name} - {faculty.subject}
                  </MenuItem>
                ))}
              </Select>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenAssignFaculty(false)}>Cancel</Button>
              <Button onClick={handleAssignSave} variant="contained" color="primary">
                Assign
              </Button>
            </DialogActions>
          </Dialog>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

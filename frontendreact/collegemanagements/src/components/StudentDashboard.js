import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function StudentDashboard() {
  const [editOpen, setEditOpen] = React.useState(false);
  const [viewSubjectsOpen, setViewSubjectsOpen] = React.useState(false);

  const [studentDetails, setStudentDetails] = React.useState({
    firstName: "Ziad Ahamed",
    lastName: "Ahamed Rasul Mohaideen",
    dob: "15th July 2003",
    gender: "Male",
    bloodGroup: "O+",
    contactNumber: "+91 9854514755",
    address: "15/25, East Street, Anna Nagar, Chennai,600032, Tamil Nadu ",
    classroom: "1st Block",
    dateOfEntry: "1 January 2024",
    status: "Active",
  });

  const subjects = [
    { subject: "Mathematics", faculty: "Prof. Mydeen" },
    { subject: "Physics", faculty: "Dr. Mohaideen" },
    { subject: "Chemistry", faculty: "Prof.Ibrahim" },
    {faculty: "Dr. Riyaz Ahamed", subject: "Income Tax" },
    {  faculty: "Prof. Safi", subject: "Data Analytics" },
  ];

  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const handleViewSubjectsOpen = () => setViewSubjectsOpen(true);
  const handleViewSubjectsClose = () => setViewSubjectsOpen(false);

  const handleEditSubmit = () => {
    // Logic for saving edited details goes here.
    setEditOpen(false);
  };

  const handleLogout = () => {
    // Logic for logging out
    window.location.href = "/login"; // Assuming "/login" is your login page route
  };

  return (
    <AppProvider
      navigation={[{ segment: "student-dashboard", title: "Student Dashboard" }]}
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
        <PageContainer sx={{ backgroundColor: "white", minHeight: "100vh", padding: 3 }}>
          {/* Top Cards */}
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

          {/* Student Profile */}
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Student Profile - {studentDetails.firstName} {studentDetails.lastName}
              </Typography>
              <Grid container spacing={2}>
                {/* Profile Picture */}
                <Grid item xs={12} sm={4} md={3}>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Avatar sx={{ width: 120, height: 120 }} />
                  </Box>
                </Grid>

                {/* Personal Details */}
                <Grid item xs={12} sm={8} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Personal Details
                  </Typography>
                  <Typography>
                    <strong>Gender:</strong> {studentDetails.gender}
                  </Typography>
                  <Typography>
                    <strong>Date of Birth:</strong> {studentDetails.dob}
                  </Typography>
                  <Typography>
                    <strong>Blood Group:</strong> {studentDetails.bloodGroup}
                  </Typography>
                  <Typography>
                    <strong>Contact Number:</strong> {studentDetails.contactNumber}
                  </Typography>
                  <Typography>
                    <strong>Address:</strong> {studentDetails.address}
                  </Typography>
                </Grid>

                {/* Class Details */}
                <Grid item xs={12} sm={12} md={3}>
                  <Typography variant="h6" gutterBottom>
                    Class Details
                  </Typography>
                  <Typography>
                    <strong>Classroom:</strong> {studentDetails.classroom}
                  </Typography>
                  <Typography>
                    <strong>Date of Entry:</strong> {studentDetails.dateOfEntry}
                  </Typography>
                  <Typography>
                    <strong>Status:</strong> {studentDetails.status}
                  </Typography>
                </Grid>
              </Grid>

              {/* Actions */}
              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleViewSubjectsOpen}>
                  View Subjects & Faculty
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleEditOpen} sx={{ mr: 2 }}>
                  Edit Details
                </Button>
               
              </Box>
            </CardContent>
          </Card>
        </PageContainer>

        {/* Dialog for Viewing Subjects and Faculty */}
        <Dialog open={viewSubjectsOpen} onClose={handleViewSubjectsClose}>
          <DialogTitle>Subjects & Faculty</DialogTitle>
          <DialogContent>
            {subjects.map((item, index) => (
              <Typography key={index}>
                <strong>{item.subject}:</strong> {item.faculty}
              </Typography>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleViewSubjectsClose}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* Dialog for Editing Student Details */}
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>Edit Student Details</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              value={studentDetails.firstName}
              onChange={(e) => setStudentDetails({ ...studentDetails, firstName: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              value={studentDetails.lastName}
              onChange={(e) => setStudentDetails({ ...studentDetails, lastName: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Date of Birth"
              value={studentDetails.dob}
              onChange={(e) => setStudentDetails({ ...studentDetails, dob: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Gender"
              value={studentDetails.gender}
              onChange={(e) => setStudentDetails({ ...studentDetails, gender: e.target.value })}
            />

          <TextField
              fullWidth
              margin="normal"
              label="Blood Group"
              value={studentDetails.bloodGroup}
              onChange={(e) => setStudentDetails({ ...studentDetails, bloodGroup: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Contact Number"
              value={studentDetails.contactNumber}
              onChange={(e) => setStudentDetails({ ...studentDetails, contactNumber: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Address"
              multiline
              rows={2}
              value={studentDetails.address}
              onChange={(e) => setStudentDetails({ ...studentDetails, address: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={handleEditSubmit} variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </DashboardLayout>
    </AppProvider>
  );
}

import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutDialog from "./LogoutDialog";
import { UserLogout } from "../services/api/authServices";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [openLogout, setOpenLogout] = React.useState(false);
  const handleLogout = async () => {
    try {
      await UserLogout();
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err: any) {
      alert(err.response?.error || "Login failed. Please try again.");
    }
  };
  return (
    <AppBar position="sticky" elevation={0} className="!bg-[#001525] shadow-md">
      <Toolbar className="flex justify-end items-center">
        <div className="flex items-center gap-3">
          <Typography variant="body1" className="text-white">
            Elon Musk{" "}
            {/* once get token from login api, replace this with dynamic data */}
          </Typography>
          <Avatar
            className="!bg-red-500 cursor-pointer"
            onClick={() => setOpenLogout(true)}
          >
            <LogoutIcon fontSize="small" />
          </Avatar>
        </div>
      </Toolbar>
      <LogoutDialog
        open={openLogout}
        onClose={() => setOpenLogout(false)}
        onConfirm={handleLogout}
      />
    </AppBar>
  );
};

export default Header;

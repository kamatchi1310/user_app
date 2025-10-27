import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { LogoutProps } from "../Types";

const LogoutDialog: React.FC<LogoutProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        className: "rounded-2xl",
      }}
    >
      <DialogTitle className="text-center text-lg font-semibold text-gray-800 border-b pb-2">
        <Logout fontSize="small" className="mr-1 text-blue-600" />
        Logout
      </DialogTitle>

      <DialogContent className="!py-5 text-center">
        <Typography className="text-gray-600">
          Are you sure you want to log out from your account?
        </Typography>
      </DialogContent>

      <DialogActions className="flex justify-center gap-3 !pb-5">
        <Button
          onClick={onClose}
          variant="outlined"
          color="inherit"
          className="!px-6 !rounded-sm secondaryButton"
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="primary"
          className="!px-6 !rounded-sm primaryButton"
        >
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;

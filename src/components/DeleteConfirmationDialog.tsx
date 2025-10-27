import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";
import { DeleteConfirmDialogProps } from "../Types";

const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        className: "rounded-2xl p-2 sm:p-4",
      }}
    >
      <div className="flex justify-between items-center pb-2 border-b">
        <DialogTitle className="!p-0 text-lg font-semibold">
          Delete User
        </DialogTitle>
      </div>

      <DialogContent className="flex flex-col items-center text-center mt-4">
        <WarningAmberIcon className="text-amber-500 !text-5xl mb-3" />
        <Typography variant="body1" className="text-gray-700">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Typography>
      </DialogContent>

      {/* Footer */}
      <DialogActions className="flex justify-end gap-2 mt-2 border-t pt-2">
        <Button
          onClick={onClose}
          variant="outlined"
          color="inherit"
          className="!capitalize secondaryButton"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          variant="contained"
          color="error"
          className="!bg-red-600 hover:!bg-red-700 !capitalize"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmDialog;

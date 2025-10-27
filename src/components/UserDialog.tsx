import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserDialogProps } from "../Types";

const validationSchema = Yup.object({
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "Too short!"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Too short!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  avatar: Yup.string()
    .url("Must be a valid URL")
    .required("Profile image link is required"),
});

const UserDialog: React.FC<UserDialogProps> = ({
  open,
  onClose,
  onSubmit,
  title,
  formValues,
}) => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
      onClose();
    },
  });

  useEffect(() => {
    if (open && formValues) {
      formik.setValues(formValues);
    } else if (open && !formValues) {
      formik.resetForm();
    }
  }, [open, formValues]);

  useEffect(() => {
    if (!open) formik.resetForm();
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        className: "rounded-2xl p-2 sm:p-4",
      }}
    >
      <div className="flex justify-between items-center border-b pb-2">
        <DialogTitle className="!p-0 text-lg font-semibold">
          {title}
        </DialogTitle>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <DialogContent className="mt-4 space-y-4">
          <div className="font-medium text-[#555555]">
            <span className="required">*</span>First Name
          </div>
          <TextField
            name="first_name"
            fullWidth
            required
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
            placeholder="Please enter first name"
            className="userdialog-textfield !mb-4"
          />
          <div className="font-medium text-[#555555]">
            <span className="required">*</span>Last Name
          </div>
          <TextField
            name="last_name"
            fullWidth
            required
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
            placeholder="Please enter last name"
            className="userdialog-textfield !mb-4"
          />
          <div className="font-medium text-[#555555]">
            <span className="required">*</span>Email
          </div>
          <TextField
            name="email"
            fullWidth
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Please enter email"
            className="userdialog-textfield !mb-4"
          />
          <div className="font-medium text-[#555555]">
            <span className="required">*</span>Profile Image Link
          </div>
          <TextField
            name="avatar"
            fullWidth
            required
            value={formik.values.avatar}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.avatar && Boolean(formik.errors.avatar)}
            helperText={formik.touched.avatar && formik.errors.avatar}
            placeholder="Please enter profile image link"
            className="userdialog-textfield !mb-4"
          />
        </DialogContent>

        <DialogActions className="border-t mt-4 pt-2 flex justify-end gap-2">
          <Button
            variant="outlined"
            color="inherit"
            onClick={onClose}
            className="secondaryButton"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="primaryButton"
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserDialog;

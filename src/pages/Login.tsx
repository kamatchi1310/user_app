import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Card,
  Box,
  InputAdornment,
} from "@mui/material";
import { LockOutline, PersonOutline } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { loginForm } from "../Types";
import { UserLogin } from "../services/api/authServices";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (values: loginForm) => {
    try {
      const data: any = await UserLogin(values);
      localStorage.setItem("token", data?.data?.token);
      navigate("/users");
    } catch (err: any) {
      alert(err.response?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-md">
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Box className="flex items-center border rounded px-2 py-1 mb-3 ">
                <TextField
                  name="email"
                  placeholder="Email Address"
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutline className="text-gray-300" />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                />
              </Box>

              <Box className="flex items-center border rounded px-2 py-1 mb-3 ">
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutline className="text-gray-300 " />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Remember me"
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="!mt-3 !bg-blue-500 !mb-8"
              >
                Log in
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};
export default Login;

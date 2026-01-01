import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import toast from "react-hot-toast";

// Doğrulama kuralları
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Geçersiz e-posta formatı")
    .required("E-posta zorunludur"),
  password: Yup.string().required("Şifre zorunludur"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Giriş başarılı!");
        resetForm();
      })
      .catch(() => {
        toast.error("Giriş yapılamadı. E-posta veya şifre hatalı.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 400 }}>
        <Typography component="h1" variant="h5" align="center" mb={2}>
          Giriş Yap
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              {/* E-posta */}
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="E-posta"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              {/* Şifre */}
              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Şifre"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Giriş Yap
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

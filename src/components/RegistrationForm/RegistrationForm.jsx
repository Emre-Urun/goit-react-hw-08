import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import toast from "react-hot-toast";

// Form doğrulama şeması (Yup)
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "İsim en az 3 karakter olmalı")
    .required("İsim zorunludur"),
  email: Yup.string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta zorunludur"),
  password: Yup.string()
    .min(7, "Şifre en az 7 karakter olmalı")
    .required("Şifre zorunludur"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // Redux register işlemini başlat
    dispatch(register(values))
      .unwrap() // Hata varsa catch bloğuna düşmesi için unwrap kullanıyoruz
      .then(() => {
        toast.success("Kayıt başarılı! Hoşgeldiniz.");
        resetForm();
      })
      .catch(() => {
        toast.error("Kayıt başarısız. Lütfen bilgileri kontrol edin.");
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
      {/* Form Arkaplan Kartı */}
      <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 400 }}>
        <Typography component="h1" variant="h5" align="center" mb={2}>
          Kayıt Ol
        </Typography>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              {/* İsim Alanı */}
              <TextField
                fullWidth
                margin="normal"
                id="name"
                name="name"
                label="Ad Soyad"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              {/* E-posta Alanı */}
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="E-posta Adresi"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              {/* Şifre Alanı */}
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
                sx={{ mt: 3, mb: 2 }}
              >
                Kayıt Ol
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

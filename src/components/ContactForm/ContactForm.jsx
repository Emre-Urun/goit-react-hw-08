import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import toast from "react-hot-toast";

// Validasyon Şeması
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "İsim en az 3 karakter olmalı")
    .max(50, "İsim çok uzun")
    .required("İsim zorunludur"),
  number: Yup.string()
    .min(3, "Numara en az 3 karakter olmalı")
    .required("Numara zorunludur"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Kişi başarıyla eklendi!");
        resetForm();
      })
      .catch(() => {
        toast.error("Kişi eklenirken bir hata oluştu.");
      });
  };

  return (
    <Box
      sx={{
        marginBottom: 4,
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
      }}
    >
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <TextField
              size="small"
              id="name"
              name="name"
              label="Ad Soyad"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ flexGrow: 1 }}
            />

            <TextField
              size="small"
              id="number"
              name="number"
              label="Telefon Numarası"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
              sx={{ flexGrow: 1 }}
            />

            <Button
              type="submit"
              variant="contained"
              startIcon={<PersonAddIcon />}
              sx={{ height: 40 }}
            >
              Ekle
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

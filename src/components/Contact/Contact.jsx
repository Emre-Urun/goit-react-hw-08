import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import toast from "react-hot-toast";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Kişi silindi"))
      .catch(() => toast.error("Silme işlemi başarısız"));
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        {/* İsim Alanı */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <PersonIcon sx={{ marginRight: 1, color: "primary.main" }} />
          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </Box>

        {/* Telefon Alanı - Tıklanabilir Link */}
        <Box
          component="a"
          href={`tel:${number}`}
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "text.secondary",
            "&:hover": { color: "primary.main" }, // Üzerine gelince renk değişsin
          }}
        >
          <PhoneIcon sx={{ marginRight: 1, fontSize: 20 }} />
          <Typography variant="body1">{number}</Typography>
        </Box>
      </CardContent>

      {/* Sil Butonu */}
      <Box
        sx={{
          padding: 2,
          paddingTop: 0,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton aria-label="delete" color="error" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

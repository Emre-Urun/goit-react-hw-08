import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (contacts.length === 0) {
    return (
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mt: 4 }}
      >
        Kişi bulunamadı.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {contacts.map((contact) => (
        <Grid item xs={12} sm={6} md={4} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </Grid>
      ))}
    </Grid>
  );
}

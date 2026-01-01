import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Loader } from "../../components/Loader/Loader";
import { Helmet } from "react-helmet-async";
import Typography from "@mui/material/Typography";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Kişilerim - Phonebook</title>
      </Helmet>

      <Typography variant="h4" component="h2" gutterBottom>
        Kişilerim
      </Typography>

      <ContactForm />
      <SearchBox />

      {isLoading ? <Loader /> : <ContactList />}
    </>
  );
}

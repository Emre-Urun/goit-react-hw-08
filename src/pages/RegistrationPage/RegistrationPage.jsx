import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Helmet } from "react-helmet-async"; // Sayfa başlığını değiştirmek için

export default function RegistrationPage() {
  return (
    <div>
      <Helmet>
        <title>Kayıt Ol - Phonebook</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
}

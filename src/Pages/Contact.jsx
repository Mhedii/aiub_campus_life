import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
  >
    <ContactForm />
  </GoogleReCaptchaProvider>
);

export default Contact;

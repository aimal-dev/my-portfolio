import { getContact } from "@/lib/actions";
import ContactClient from "./ContactClient";

export default async function ContactPage() {
  const contactInfo = await getContact();
  return <ContactClient contactInfo={contactInfo} />;
}

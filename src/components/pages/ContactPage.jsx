import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormMap from "@/components/contact/ContactFormMap";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactSocial from "@/components/contact/ContactSocial";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team for questions about courses, enrollment, or partnerships.",
};

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormMap />
      <ContactFaq />
      <ContactSocial />
    </main>
  );
}
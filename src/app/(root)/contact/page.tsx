import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import EmailForm from "./EmailForm";
import SocialMediaLinks from "./SocialMediaLinks";

export const metadata: Metadata = {
  title: "Contact | Yoga Viveka",
  description:
    "Get in touch with me through our contact page, where you can find links to my social media profiles and a convenient email form. Don't hesitate to reach out—I'm here to connect and ready to respond to your messages.",
  alternates: {
    canonical: "https://yogaviveka/contact",
  },
};

export default function Contact() {
  return (
    <div className="p-8">
      <PageTitle title="Contact" description="Reach me out." />
      <SocialMediaLinks />
      <EmailForm />
    </div>
  );
}

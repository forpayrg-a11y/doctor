import Hero from "./_components/Hero";
import WhatsAppDialog from "./_components/WhatsAppDialogComponent";
import BeforeAfter from "./_components/BeforeAfter";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <BeforeAfter></BeforeAfter>
      <WhatsAppDialog></WhatsAppDialog>
    </main>
  );
}
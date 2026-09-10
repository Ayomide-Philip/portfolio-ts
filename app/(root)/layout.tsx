import AuraBackground from "@/components/AuraBackground";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuraBackground>
      <div className="flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </AuraBackground>
  );
}

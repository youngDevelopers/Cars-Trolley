import { Footer, Navbar } from "@/components";
import "./globals.css";


export const metadata = {
  title: "Car Trolley",
  description: "Discover the best Cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

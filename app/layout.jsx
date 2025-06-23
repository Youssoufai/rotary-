import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Speaker Tajudeen Abbas",
  description: "Official Website of the Hon Speaker",
  icons: {
    icon: "/coa.webp",          // Default icon
    shortcut: "/coa.webp",      // For Safari, iOS
    apple: "/coa.webp" // Optional
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-open">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

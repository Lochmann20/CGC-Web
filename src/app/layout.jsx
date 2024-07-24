
import Menu from "@/app/components/Menu";
import "./globals.css";

export const metadata = {
  title: "CGC Wargaming",
  description: "Welcome to CGC Wargaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Menu />
        {children}
      </body>
    </html>
  );
}

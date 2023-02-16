import "./globals.css";
import Nav from "./auth/Nav";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variables: "--font-roboto",
});
export default function RootLayout({ children }) {
  return (
    <html lang='en'>

      <head />
      <body className={`mx-5 md:mx-48 ${roboto.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

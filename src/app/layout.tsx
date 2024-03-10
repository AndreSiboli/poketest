import "./globals.scss";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar/Index";
import { SearchProvider } from "@/context/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokédex",
  description: "",
  author: "André Siboli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <Navbar />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}

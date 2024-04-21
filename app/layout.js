import Header from "@/components/Header";
import { getDocuments } from "@/lib/doc";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nxt-Notes A documentation website",
  description: "A documentation website",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  console.log(allDocuments);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='h-full lg:ml-72 xl:ml-80'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

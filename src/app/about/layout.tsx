
import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
         <Navbar />
       {children}
      

        </main>
      </body>
    </html>
  );
}

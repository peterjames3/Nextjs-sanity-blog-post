import type { Metadata } from "next";
import { inter } from "@/app/ui/font";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Transition from "@/app/ui/Transition";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/theme-provider";
import ScrollToTop from "@/app/components/ScrollToTop";

//Static metadata
// export const metadata: Metadata = {
//   title: "Insights on Modern Technology and Health & Wellness",
//   description:
//     "Dive into tutorials, tips, and the latest trends in Technology and Health & Wellness.",
// };
//<title>{title.content}</title>
export const metadata: Metadata = {
  title:{
    template: '%s | Hanzo Blog ',
    default:'Insights on Modern Technology and Health & Wellness',
  },
  description: "Dive into tutorials, tips, and the latest trends in Technology and Health & Wellness.",
  keywords:['Hanzo blog', 'Health & Wellness Tips', "Trending Technologies"],
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      
      <body className={`${inter.variable}  antialiased  `}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
      <Navbar />
    
          <Transition>{children}</Transition>
       <ScrollToTop />
        <Footer />
        </ThemeProvider>
      </body>
   
    </html>
  );
}

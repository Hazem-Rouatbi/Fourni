import "@/app/globals.css";
import NavBar from "@/components/navbar/page";
import Providers from "../components/providers";

import { ThemeProvider } from "@/components/theme-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="h-full">
        <head />
        <body className="relative h-full font-sans antialiased">
          <Providers>
            <main>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              <NavBar></NavBar>
              {children}
          </ThemeProvider>
            </main>
            </Providers>
        </body>
      </html>
    </>
  );
}

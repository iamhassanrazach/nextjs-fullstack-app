import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Night",
  description: "Pick the movie for our next movie night",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

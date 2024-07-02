import { Red_Hat_Text } from 'next/font/google';
import "./globals.css";

const redHatText = Red_Hat_Text({
  weight: ['700'],
  subsets: ['latin'],
});


export const metadata = {
  title: "Launch Countdown",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={redHatText.className}>{children}</body>
    </html>
  );
}

import { Noto_Sans_Thai } from 'next/font/google'
import "./globals.css";
const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'], // Ensures Thai characters load properly
  weight: ['400', '700'], // Choose the required weights
  variable: '--font-noto-sans-thai' // Optional: Define a CSS variable
})

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={notoSansThai.className}>
      <body>{children}</body>
    </html>
  )
}

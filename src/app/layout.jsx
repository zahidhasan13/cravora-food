import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import ProductProvider from "@/context/ProductContext";
import Footer from "@/components/shared/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Cravora — Discover Food You'll Love",
    template: "%s | Cravora",
  },
  description:
    "Cravora is a modern food discovery and ordering platform where you can explore delicious foods, discover new flavors, save favorites, and order your favorite meals with ease.",
  keywords: [
    "Cravora",
    "food discovery",
    "food ordering",
    "online food ordering",
    "restaurant food",
    "delicious food",
    "food finder",
    "food delivery",
  ],
  authors: [{ name: "Cravora" }],
  creator: "Cravora",
  publisher: "Cravora",

  openGraph: {
    title: "Cravora — Discover Food You'll Love",
    description:
      "Discover delicious food, explore new flavors, find your favorites, and enjoy a seamless food ordering experience with Cravora.",
    siteName: "Cravora",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cravora — Discover Food You'll Love",
    description:
      "Discover delicious food, explore new flavors, and enjoy a seamless food ordering experience with Cravora.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />

          <main className="pb-20 md:pb-0">
            <ProductProvider>{children}</ProductProvider>
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

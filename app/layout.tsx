import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover the Perfect Anime for Your Mood | FeelGoodAnime",
  description: "Welcome to FeelGoodAnime, your go-to destination for personalized anime recommendations tailored to your mood. Whether you're looking for something uplifting, heartwarming, action-packed, or relaxing, our curated lists help you find the perfect anime to match your feelings. Dive into a world of anime that resonates with your emotions and enhances your viewing experience. Browse by mood, genre, or theme, and uncover hidden gems that will leave a lasting impression. FeelGoodAnime is here to connect you with the right stories, making every watch session a meaningful one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

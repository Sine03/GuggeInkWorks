import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Update the path according to your project structure
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GuggeInkWorks",
  description: "GuggeInkWorks - Your Description Goes Here",
  // Add more meta tags here, such as keywords, author, etc.
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add more meta tags here for SEO, e.g., keywords, author, etc. */}
        <meta name="keywords" content="your, keywords, here" />
        <meta name="author" content="Your Name" />
        {/* Open Graph tags for better social media sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="https://your-website-url.com" />
        {/* Twitter card tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="your-image-url.jpg" />
        {/* Add the favicon link tag */}
        <link rel="icon" href="/g.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

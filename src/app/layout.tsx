import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mastu Touch - Professional Makeup Artist in Ilorin, Nigeria | Bridal & Event Makeup",
  description: "Award-winning makeup artist in Ilorin with 4+ years experience. Specializing in bridal makeup, special events, photoshoots & makeup classes. Book your transformation today! Available nationwide.",
  keywords: [
    "makeup artist Ilorin",
    "bridal makeup Nigeria",
    "professional makeup artist",
    "wedding makeup Ilorin",
    "event makeup artist",
    "photoshoot makeup",
    "makeup classes Ilorin",
    "beauty artist Nigeria",
    "Mastu Touch",
    "certified makeup artist",
    "bridal glam Nigeria",
    "special event makeup",
    "editorial makeup",
    "makeup artist near me",
    "best makeup artist Ilorin"
  ],
  authors: [{ name: "Mastu Touch" }],
  creator: "Mastu Touch",
  publisher: "Mastu Touch",
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://mastu-touch.vercel.app", // Replace with actual domain
    siteName: "Mastu Touch - Professional Makeup Artist",
    title: "Mastu Touch - Professional Makeup Artist in Ilorin, Nigeria",
    description: "Transform your look with professional makeup artistry. Bridal, events, photoshoots & classes. 4+ years experience, 500+ happy clients. Book now!",
    images: [
      {
        url: "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872994/IMG_7576_esdqox.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Mastu Touch - Professional Makeup Artist",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Mastu Touch - Professional Makeup Artist",
    description: "Transform your beauty with professional makeup artistry in Ilorin, Nigeria. Bridal, events & photoshoots. Book your session today!",
    images: ["https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872994/IMG_7576_esdqox.jpg"], // Replace with actual image
    creator: "@mastu_touch_",
  },

  // Verification tags
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Robots meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional metadata
  category: "Beauty & Personal Care",
  classification: "Makeup Artist, Beauty Services",
  
  // App-specific metadata
  applicationName: "Mastu Touch",
  
  // Alternate languages (if you add translations later)
  alternates: {
    canonical: "https://mastu-touch.vercel.app", // Replace with actual domain
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest for PWA (optional)
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags */}
        <meta name="geo.region" content="NG-KW" />
        <meta name="geo.placename" content="Ilorin" />
        <meta name="geo.position" content="8.4799;4.5418" />
        <meta name="ICBM" content="8.4799, 4.5418" />
        
        {/* Business Schema.org markup for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Mastu Touch",
              "image": "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872994/IMG_7576_esdqox.jpg",
              "description": "Professional makeup artist specializing in bridal makeup, special events, and photoshoots in Ilorin, Nigeria",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ilorin",
                "addressRegion": "Kwara State",
                "addressCountry": "NG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.4799",
                "longitude": "4.5418"
              },
              "url": "https://mastu-touch.vercel.app",
              "telephone": "+2347045009095", // Replace with actual number
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://instagram.com/mastu_touch_",
                "https://wa.me/234XXXXXXXXXX" // Replace with actual WhatsApp
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Makeup Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Makeup",
                      "description": "Professional bridal makeup services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Special Event Makeup",
                      "description": "Makeup for birthdays, parties and celebrations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Photoshoot Makeup",
                      "description": "Professional makeup for photoshoots and editorial work"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Makeup Classes",
                      "description": "Learn professional makeup techniques"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Person Schema for the makeup artist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mastu Touch",
              "jobTitle": "Professional Makeup Artist",
              "description": "Certified makeup artist with 4+ years of experience specializing in bridal and event makeup",
              "url": "https://mastu-touch.vercel.app",
              "image": "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872994/IMG_7576_esdqox.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ilorin",
                "addressRegion": "Kwara State",
                "addressCountry": "Nigeria"
              },
              "sameAs": [
                "https://instagram.com/mastu_touch_"
              ],
              "knowsAbout": [
                "Bridal Makeup",
                "Special Event Makeup",
                "Editorial Makeup",
                "Makeup Artistry",
                "Beauty Consulting"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
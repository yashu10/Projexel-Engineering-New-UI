import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const BASE_URL = "https://projexelengineering.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    // 51 chars — EPC + Ahmedabad keywords front-loaded
    default: "EPC & Industrial Solutions Ahmedabad | Projexel",
    template: "%s | Projexel Engineering",
  },
  // 155 chars — keyword-first, compelling, within 150-160 char limit
  description:
    "EPC & turnkey industrial solutions in Ahmedabad, Gujarat. Electrical, instrumentation & mechanical fabrication — trusted by JSW Steel, Coca-Cola & Amul.",
  keywords:
    "EPC contractor, turnkey projects, industrial engineering, E&I, mechanical fabrication, Ahmedabad, Gujarat, India",
  openGraph: {
    type: "website",
    siteName: "Projexel Engineering",
    title: "EPC & Industrial Solutions Ahmedabad | Projexel Engineering",
    description:
      "EPC & turnkey industrial solutions in Ahmedabad, Gujarat. Electrical, instrumentation & mechanical fabrication — trusted by JSW Steel, Coca-Cola & Amul.",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projexel Engineering — Turnkey EPC & Industrial Solutions, Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPC & Industrial Solutions Ahmedabad | Projexel Engineering",
    description:
      "EPC & turnkey industrial solutions in Ahmedabad, Gujarat. Electrical, instrumentation & mechanical fabrication.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "Projexel Engineering",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/images/logo.png`,
      },
      image: `${BASE_URL}/og-image.png`,
      description:
        "Projexel Engineering is a premier EPC (Engineering, Procurement & Construction) contractor offering Turnkey EPC, Electrical & Instrumentation (E&I), Mechanical Fabrication, and Industrial Automation services across Gujarat and India.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "1004, Sudarshan Saket, Behind Godrej Garden City, Chainpur Road, Jagatpur",
        addressLocality: "Ahmedabad",
        postalCode: "382470",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      telephone: "+918000369880",
      email: "projexel.engr@gmail.com",
      areaServed: [
        { "@type": "State", name: "Gujarat" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "EPC Contracting",
        "Electrical & Instrumentation",
        "Mechanical Fabrication",
        "Process Piping",
        "Industrial Automation",
        "Zero Liquid Discharge Systems",
        "Water Treatment Plants",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}

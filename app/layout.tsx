import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";

export const metadata: Metadata = {
  title: "Jayalakshmi Furniture Store | Kushalnagar, Coorg - Premium Solid Wood Furniture",
  description:
    "Explore luxury handcrafted solid teak, rosewood & sheesham furniture at Jayalakshmi Furniture Store, Kushalnagar. Featuring luxury sofas, orthopedic mattresses, dining tables, beds and custom carpentry with free delivery across Coorg & Mysore.",
  keywords: [
    "furniture store kushalnagar",
    "jayalakshmi furniture",
    "wooden furniture coorg",
    "teak wood sofa kushalnagar",
    "solid wood dining table kushalnagar",
    "best mattress store kushalnagar"
  ],
  openGraph: {
    title: "Jayalakshmi Furniture Store | Kushalnagar Flagship Showroom",
    description: "Premium Solid Wood Living, Sofas, Beds, Dining & Mattresses in Kushalnagar, Coorg.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛋️</text></svg>" />
      </head>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

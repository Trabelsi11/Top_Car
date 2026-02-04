import "./globals.css";

export const metadata = {
  title: "Top Car | Agence de location de voitures",
  description:
    "Top Car propose des locations flexibles de voitures premium, SUV et citadines partout au Maroc."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

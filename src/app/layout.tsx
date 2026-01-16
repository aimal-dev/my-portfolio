import "./globals.scss";

export const metadata = {
  title: "Muhammad Aimal | Frontend Engineer",
  description: "Creative frontend engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}

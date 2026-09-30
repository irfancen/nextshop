export const metadata = {
  title: "Nextshop",
  description: "A fullstack Next.js app: pages and API routes in one upload.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          maxWidth: 640,
          margin: "48px auto",
          padding: "0 16px",
        }}
      >
        {children}
      </body>
    </html>
  );
}

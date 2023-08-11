export const metadata = {
  title: 'M-Texx Блог',
  description: 'Администрация',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

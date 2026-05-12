export const metadata = {
  verification: {
    google: 'ALXbPx-mOkZZQmvEtp4llpp1oa9JRNApDTGjWbKO5Y0',
  },
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
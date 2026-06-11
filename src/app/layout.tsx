import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Pizza Palace', description: 'Order pizza online' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
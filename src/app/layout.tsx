import type { Metadata } from 'next'
import './css/globals.css'
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: 'Portfolio - BLART Nicolas',
  description: 'Portfolio professionnel de Blart Nicolas, développeur informatique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr">
    <head>
        <title>Portfolio - BLART Nicolas</title>
    </head>
    <body className={"homepage"}>
    <div className={"navbar"}>
        <Header/>
    </div>
        <div className={"content"}>
            {children}
        </div>
        </body>
    </html>
  )
}

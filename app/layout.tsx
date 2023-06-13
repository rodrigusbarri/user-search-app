import Navbar from './components/Navbar'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Busqueda de usuarios en Github',
  description: 'Esta es una app de prueba de habilidades técnicas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className='grid h-screen place-content-center bg-gray-500'>
          <div className='sm:w-[500px] md:w-[600px] lg:w-[700px]'>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

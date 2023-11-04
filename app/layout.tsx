'use client'
import {Quicksand} from 'next/font/google'
import {Nav} from '@/comp'
import '../styles/index.scss'
import { store, persistor } from '@/lib/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import type { Metadata } from 'next'
import {Provider as ReduxProvider} from "react-redux"
import {Cart} from '@/comp'


 const metadata: Metadata = {
  title: 'Shopping List App',
  description: 'Generated by create next app',
}

const quickSand = Quicksand({
  weight: '400',
  subsets: ['latin'],
  style: 'normal'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head></head>
        <body className={quickSand.className}>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Nav/>
              <section id='main_section'>
                {children}
                  <aside>
                    <Cart />
                  </aside>
              </section>
            </PersistGate>
          </ReduxProvider>
        </body>
      </html>
  )
}

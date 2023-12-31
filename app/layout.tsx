 'use client'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Quicksand} from 'next/font/google'
import {Nav} from '@/containers'
import '../styles/index.scss'
import { store, persistor } from '@/lib/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import type { Metadata } from 'next'
import {Provider as ReduxProvider} from "react-redux"
import {Cart} from '@/containers'


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
                <ToastContainer/>
                {children}
                <Cart />
              </section>
              <div id='portal'/>
            </PersistGate>
          </ReduxProvider>
        </body>
      </html>
  )
}

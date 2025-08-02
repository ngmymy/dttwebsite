// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical fonts to prevent FOUC */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap"
          rel="stylesheet"
        />
        
        {/* Inline critical CSS to prevent FOUC */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              font-family: "Roboto Slab", Arial, Helvetica, sans-serif !important;
            }
            
            /* Prevent layout shift during font loading */
            .responsive-header {
              font-family: "Roboto Slab", serif !important;
            }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
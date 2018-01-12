import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          {styleTags}
          <style>{`
            body {
              background: #de6262; /* fallback for old browsers */
              background: -webkit-linear-gradient(to right, #de6262, #ffb88c); /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to right, #de6262, #ffb88c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              font-family: Helvetica, Sans-serif;
            }
          `}
          </style>
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import firebase from 'firebase'

const initFirebase = () => {
  console.log("initializing firebase");
  var config = {
    apiKey: "AIzaSyDFcCwKExcbowCADH5eZyzjCG1gBL7igA4",
    authDomain: "audiosurvey-51bd7.firebaseapp.com",
    databaseURL: "https://audiosurvey-51bd7.firebaseio.com",
    projectId: "audiosurvey-51bd7",
    storageBucket: "",
    messagingSenderId: "294339718190"
  };
  firebase.initializeApp(config);
}

export default class Doc extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{``}</style>
        </Head>
        <body className="">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

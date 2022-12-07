import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
        <Html>
            <Head>
            <meta name="description" content="Generated by create next app" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
}

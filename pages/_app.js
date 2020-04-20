import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <Head>
                    <title>The Unofficial Blog</title>
                    <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
                </Head>
                <Component {...pageProps} />
            </div>
        );
    }
}

export default MyApp;
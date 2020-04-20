import Header from './Header';
import Head from 'next/head'

const Layout = props => (
    <div className="complete ">
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300" rel="stylesheet" />
        </Head>
        <Header />
        {props.children}
        <style jsx>{`
            .complete {
                font-family: 'Manrope', sans-serif;
                width: 100%;
                letter-spacing: 0.4px;  
                  }
            @media (max-width: 800px) {
                font-size: 9px;
            }
        `}
        </style>
    </div>
);

export default Layout;
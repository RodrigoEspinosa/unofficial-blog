import Layout from '../components/MyLayout';

export default function About() {
    return (
        <Layout>
            <div className="container">
                <h1>About this unofficial blog:</h1>
                <p>This app was created by Andrés Martín, an Uruguayan self-taught developer.</p>
                <p>It was created using React.js and its framework Next.js.
                All pages are dynamic, meaning that their content is being created on the spot, based on the user's input.</p>
                <p>That's why this app can be any show's unofficial blog!</p>

                <br />
                <p>We hope you enjoy it!</p>
                <br />
                <p>XOXO</p>
                <br /><br />
                <br />
                <br />
                <br />
                <p className="thanks">Special thanks to TV MAZE's API. We're getting all of our information from there.</p>
            </div>
            <style jsx>{`
                .container {
                    padding: 8%;
                }
                .thanks {
                    font-size: 11px;
                }
                @media (max-width: 800px){
                   .thanks {
                       font-size: 9px;
                   }
                `}
            </style>
        </Layout>
    );
}
import Link from 'next/link';

const linkStyle = {
    marginRight: 35,
    marginLeft: 10
};

const headerStyle = {
    border: '1px solid #DDD',
    padding: '5px',
    width: '80%',
    position: 'absolute',
    left: '49.5%',
    transform: 'translate(-50%, -50%)',
    top: '20px',
}

const Header = () => (
    <div style={headerStyle}>

        <Link href="/">
            <a style={linkStyle}>Search again</a>
        </Link>


        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
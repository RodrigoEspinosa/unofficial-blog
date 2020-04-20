import Link from 'next/link';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Cast = props => (

    <Layout>
        <h1 className="title">{props.show.name}'s Unofficial Blog</h1>
        <div className="container">
            <div className="list">
                <h2>Crew</h2>
                {props.crew.length > 0 ? <ul>
                    {props.crew.map(person => (
                        <li key={person.person.id} >
                            <Link href="/crew/person/[id]" as={`/crew/person/${person.person.id}`}>
                                <a>{person.type}........{person.person.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul> : <p>OMG! We don't seem to have this information... This is really embarrassing.</p>}

            </div>
            <div className="img">{props.show.image ? <img src={props.show.image.original} /> : <div />}</div>
        </div>
        <style jsx>{`
           .title {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0px;
            margin-top: 7vh;
        }
        .list {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 5;
            margin: 0;
                padding: 0;
                align-items: center;
                justify-content: center;
                
                flex: 1;
text-align: center
        }
        li {
            list-style-type: none;
                height: 10vh;
                display: flex;
                align-items: center;
                padding-left: 2vw;
                justify-content: space-between;
                border: 1px solid #DDD;
        }
        .img {
            grid-column-start: 3;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 5;
                justify-self: center;
                margin-top: 7vh;
                margin-left: 2vw;
        }
        .img img {
           height: 90vh;       
    }
        .container {
            padding-top: 15px;
            justify-content: stretch;   
            align-content: stretch;     
            display: flex;
            grid-template-columns: 7vw 35vw 20vw 20vw ;
            grid-template-rows: 10vh 40vh 30vh 15vh;
            margin-left: 4%; 
            margin-right: 6%;      
         }
         @media (max-width: 800px){

            .characterImg img {
                object-fit: cover;
               max-height: 5vh;         
        }
            .container {
                padding-top: 15px;
                justify-content: stretch;   
                align-content: stretch;     
                display: flex;
                grid-template-columns: 20vw 20vw 20vw 20vw ;
                grid-template-rows: 12vh 25vh 20vh 19vh;
                margin-left: 9%; 
                margin-right: 9%;
                font-size: 9px;   
                flex-direction: column-reverse;    
             }
             .img {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 3;
                justify-self: center;
                margin: 0;
                text-align: center;
            }
            .img img {
                height: 35vh;
        }
            .list {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 3;
                grid-row-end: 5;       
            }
            li {
                list-style-type: none;
                height: 5vh;
                text-align: left;
            }
            .title {
                text-align: center;
            }
          }
        `}
        </style>
    </Layout>
);

Cast.getInitialProps = async function (context) {
    const { id } = context.query;
    const [show, data] = await Promise.all([
        fetch(`https://api.tvmaze.com/shows/${id}`).then(r => r.json()),
        fetch(`https://api.tvmaze.com/shows/${id}/crew`).then(r => r.json()),
    ])

    return {
        show,
        crew: data.map(entry => entry)
    };
};

export default Cast;
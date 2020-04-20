import Link from 'next/link';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Episodes = props => (
    <Layout>
        <div className="container">
            <h1 className="title">{props.show.name}'s Unofficial Blog</h1>
            <div className="list">
                <h2>All seasons!</h2>
                <ul>

                    {props.seasons.map(season => (
                        <li key={season.id} >
                            <div>
                                {season.premiereDate ? <Link href="/season/[id]" as={`/season/${season.id}`}>
                                    <a>Season {season.number} - {season.premiereDate} / {season.endDate} </a>

                                </Link>
                                    :
                                    <p>Season {season.number}</p>
                                }
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
            <div className="img">{props.show.image ? <img src={props.show.image.original} /> : <noimg />}</div>
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
        }
        ul {
            border: 1px solid #DDD;
        }
        .list {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 5;
            margin: 0;
                padding: 0;
                align-items: center;
                justify-content: center;
                text-align: center;
        }
        li {
            list-style-type: none;
                height: 13vh;
                display: flex;
                align-items: center;
                justify-content: center;
        }
        .img {
            grid-column-start: 3;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 5;
                justify-self: center;
                margin-top: 20px;
        }
        .img img {
            object-fit: cover;
           max-height: 100%;         
    }
        .container {
            padding-top: 15px;
            justify-content: stretch;   
            align-content: stretch;     
            display: grid;
            grid-template-columns: 20vw 20vw 20vw 20vw ;
            grid-template-rows: 10vh 40vh 20vh 19vh;
            margin-left: 11%; 
            margin-right: 6%;      
         }
         @media (max-width: 800px){
            Layout {
                font-size: 10px;
            }
            .container {
                padding-top: 15px;
                justify-content: stretch;   
                align-content: stretch;     
                display: grid;
                grid-template-columns: 20vw 20vw 20vw 20vw ;
                grid-template-rows: 8vh 35vh 20vh 19vh;
                margin-left: 9%; 
                margin-right: 9%;
                font-size: 9px;     
             }
             .img {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 3;
                justify-self: center;
            }
            .summary {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 3;
                grid-row-end: 4;
            }
            .list {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 3;
                grid-row-end: 5;    
                padding-top: 5vh;        
            }
            li {
                list-style-type: none;
                height: 6vh;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: -7vw;
            }
          }
        `}
        </style>

    </Layout>
);

Episodes.getInitialProps = async function (context) {
    const { id } = context.query
    const [show, seasons] = await Promise.all([
        fetch(`https://api.tvmaze.com/shows/${id}`).then(r => r.json()),
        fetch(`https://api.tvmaze.com/shows/${id}/seasons`).then(r => r.json()),
    ])

    return {
        show,
        seasons: seasons.map(entry => entry)
    };
};

export default Episodes
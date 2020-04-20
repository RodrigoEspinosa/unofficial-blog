import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Session = props => (
    <Layout>
        <div className="container">
            <ul className="list">
                <h2 className="title">Season {props.completeSeason[0].season}</h2>
                {props.completeSeason.map(episode => (
                    <li key={episode.id}>
                        <Link href="/season/episode/[id]" as={`/season/episode/${episode.id}`}>
                            <a>Episode {episode.number}........{episode.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="img">{props.completeSeason[0].image ? <img src={props.completeSeason[0].image.original} /> : <div />}</div>
        </div>
        <style jsx>{`

        .list {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 5;
            margin: 0;
            padding-top: 5vh;
                align-items: center;
                justify-content: center;
                text-align: center

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
                grid-row-start: 1;
                grid-row-end: 5;
                justify-self: center;
                margin-top: 20px;
                display: flex;
         justify-content: center;
         align-items: center;
        }
        .img img {
            object-fit: cover;
           max-height: 100%;  
           max-width: 100%;       
    }
        .container {
            padding-top: 25px;
            justify-content: stretch;   
            align-content: stretch;     
            display: grid;
            grid-template-columns: 20vw 20vw 20vw 20vw ;
            grid-template-rows: 10vh 40vh 20vh 19vh;
            margin-left: 6%; 
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
                grid-template-rows: 15vh 15vh 20vh 19vh;
                margin-left: 9%; 
                margin-right: 9%;
                font-size: 9px;     
             }
             .img {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 1;
                grid-row-end: 3;
                justify-self: center;
                padding-top: 2vh
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
                padding: 0;
                margin-left: -2vw;                 
            }
            li {
                list-style-type: none;
                height: 4vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
          }
        `}
        </style>
    </Layout>
);

Session.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/seasons/${id}/episodes`);
    const data = await res.json();

    return {
        completeSeason: data.map(entry => entry)
    };
};

export default Session;
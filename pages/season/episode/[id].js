import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Episode = props => (

    <Layout>
        <div className="container">
            <h1 className="title">Season {props.episode.season} - Episode {props.episode.number}</h1>
            <div className="list">
                <h2>{props.episode.name}</h2>

                <div>{props.summary ? <div><p>{props.summary.replace(/<[^>]*>?/gm, '')}</p></div> : <div />}</div>

                <p>Airdate: {props.episode.airdate}</p>
            </div>
            <div className="img">{props.episode.image ? <img src={props.episode.image.original} /> : <div />}</div>
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
        .list {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 4;
            padding-top: 8vh
        }
        .img {
            grid-column-start: 3;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 4;
                justify-self: center;
                margin-top: 20px;
                margin-left: 3vw;
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
                    grid-template-rows: 8vh 42vh 20vh 19vh;
            margin-left: 9%; 
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
                grid-template-rows: 7vh 15vh 10vh 19vh;
                margin-left: 9%; 
                margin-right: 9%;
                font-size: 9px;     
             }
             .title {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 1;
                grid-row-end: 2;
                display: flex;
                align-items: center;
                justify-content: center;
            }
             .img {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 4;
                justify-self: center;
                margin: 0px;
            }
            .list {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 3;
                grid-row-end: 5;     
                padding-top: 11vh
            }
          }
        `}
        </style>
    </Layout>
)
    ;

Episode.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/episodes/${id}`);
    const data = await res.json();

    return {
        episode: data,
        summary: data.summary
    };
};

export default Episode;
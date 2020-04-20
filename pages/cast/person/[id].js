import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Person = props => (
    <Layout>
        <div className="container">

            <div className="personInfo">
                <h1>{props.personData.name}</h1>
                <div> {props.personData.birthday ? <h3>Born: {props.personData.birthday}, {props.personData.country.name}</h3> : <div />} </div>
                <div>{props.personData.deathday ? <h3>Dead: {props.personData.deathday}</h3> : <div />}</div>
            </div>


            <div className="img">
                {props.personData.image ? <img src={props.personData.image.original} /> : <div />}
            </div>


            <ul className="list">
                {props.actorData.map(show => (
                    <li key={show._embedded.show.id}>
                        <div className="showInfo">
                            <h3>{show._embedded.show.name} ({show._embedded.show.network ? show._embedded.show.network.name : show._embedded.show.webChannel.name})</h3>

                            <h4>{show._embedded.show.genres.join(" / ")}</h4>
                            <p>{show._embedded.show.summary.substring(3, show._embedded.show.summary.length - 4).replace(/<[^>]*>?/gm, '')}</p>
                        </div>
                        <div className="showImg">{show._embedded.show.image ? <img src={show._embedded.show.image.original} /> : <div />}</div>

                    </li>
                ))}
            </ul>
        </div>
        <style jsx>{`
        .container {
            padding-top: 25px;
            justify-content: stretch;   
            align-content: stretch;     
            display: grid;
            grid-template-columns: 20vw 20vw 20vw 20vw ;
            grid-template-rows: 35vh 40vh 20vh 19vh;
            margin-left: 6%; 
            margin-right: 6%;      
         }
         .personInfo {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 2;
            padding: 10%;
            width: 40vw;
         }
         .img {
            grid-column-start: 3;
                grid-column-end: 5;
                grid-row-start: 1;
                grid-row-end: 2;
                justify-self: right;
                margin-top: 20px;
        }
        .img img {
            object-fit: cover;
           max-height: 100%;         
    }
         .list {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 5;
        }
        li {
            list-style-type: none;
            height: 50vh; 
                padding-left: 2vw;
                border: 1px solid #DDD;
                margin-right: -2.5vw;
        }
        .showImg img {
            object-fit: cover;
           max-height: 50vh; 
           float: right;      
    }
        .showInfo {
            float: left;
            width: 55vw
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
                display: grid;
                grid-template-columns: 20vw 20vw 20vw 20vw ;
                grid-template-rows: 18vh 25vh 20vh 19vh;
                margin-left: 9%; 
                margin-right: 9%;
                font-size: 7px;     
             }
             .img {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 1;
                grid-row-end: 2;
    
            }
            .list {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 5;
                margin-left: -9vw;    
                margin-right: -1vw;
            }
            li {
                list-style-type: none;
                height: 30vh;
                text-align: left;
                margin-bottom: 25px;
            }
            .showInfo {
                width: 22vh
            }
            .showImg img {
                max-height: 30vh; 
            }
          }   
      `}</style>
    </Layout>
);

Person.getInitialProps = async function (context) {
    const { id } = context.query;

    const [personData, actorData] = await Promise.all([
        fetch(`https://api.tvmaze.com/people/${id}`).then(r => r.json()),
        fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`).then(r => r.json()),

    ])

    return {
        personData, actorData,

    };
};

export default Person;
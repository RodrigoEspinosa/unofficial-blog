import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Person = props => (
    <Layout>
        <div className="container">

            <div className="personInfo">
                <h1>{props.personData.name}</h1>
            </div>

            <div className="img">
                {props.personData.image ? <img src={props.personData.image.original} /> : <noimg />}
            </div>


            <ul className="list">
                {props.crewData.map(show => (
                    <li key={show.id}>

                        <div className="showInfo">
                            <p >{show.type}: {show._embedded.show.name} ({show._embedded.show.network ? show._embedded.show.network.name : show._embedded.show.webChannel.name})</p>
                        </div>
                        <div className="showImg">{show._embedded.show.image ? <img src={show._embedded.show.image.original} /> : <noimg />}</div>
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
            margin-left: 8%; 
            margin-right: 6%;      
         }
         .personInfo {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 2;
            padding: 10%;
            width: 40vw;
            float: left;
            padding: 15%;

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
                height: 30vh;
                padding-left: 2vw;
                border: 1px solid #DDD;
        }
        .showImg img {
            object-fit: cover;
           max-height: 30vh; 
           float: right;      
    }
        .showInfo {
            float: left;
            width: 50vw;
            padding-top: 5vh;
            padding-left: 4vw;
            font-size: 25px;
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
                margin-right: 4vw
    
            }
            .list {
                grid-column-start: 1;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 5;
                margin-left: -10vw;    
            }
            li {
                list-style-type: none;
                height: 20vh;
                text-align: left;
                margin-bottom: 25px;
            }
            .showInfo {
                width: 20vh;
                font-size: 10px;
            }
            .showImg img {
                max-height: 20vh; 
            }
            .personInfo {
                padding: 30%;
            }
          }
      `}</style>
    </Layout>
);

Person.getInitialProps = async function (context) {
    const { id } = context.query;

    const [personData, crewData] = await Promise.all([
        fetch(`https://api.tvmaze.com/people/${id}`).then(r => r.json()),
        fetch(`https://api.tvmaze.com/people/${id}/crewcredits?embed=show`).then(r => r.json()),

    ])

    return {
        personData, crewData,

    };
};

export default Person;
import Link from 'next/link';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Cast = props => (

    <Layout>
        <div className="container">
            <h1 className="title">{props.show.name}'s Unofficial Blog</h1>
            <ul className="list">
                <h2>Cast</h2>
                {props.cast.map(person => (
                    <li key={person.person.id} >
                        <Link href="/cast/person/[id]" as={`/cast/person/${person.person.id}`}>
                            <a>{person.person.name}........{person.character.name}</a>

                        </Link>
                        <div className="characterImg">{person.person.image ? <img src={person.person.image.original} /> : <img src={person.character.image.original} />}</div>
                    </li>
                ))}
            </ul>
            <div className="img">{props.show.image ? <img src={props.show.image.original} /> : <div />}</div>
        </div>
        <style jsx="true"
            global="true">{`

        .characterImg img {
            object-fit: cover;
           max-height: 10vh;         
    }
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
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 5;
            margin: 0;
                padding: 0;
                align-items: center;
                justify-content: center;
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
                text-align: left;
        }
        .img {
            grid-column-start: 3;
                grid-column-end: 5;
                grid-row-start: 2;
                grid-row-end: 5;
                justify-self: center;
                margin-left: 2vw;
                margin-top: 8.2vh;
        }
        .img img {
            object-fit: cover;
           max-height: 100%; 
           max-width: 100%;

    }
        .container {
            padding-top: 15px;
            justify-content: stretch;   
            align-content: stretch;     
            display: grid;
            grid-template-columns: 7vw 35vw 20vw 20vw ;
            grid-template-rows: 10vh 40vh 40vh 25vh;
            margin-left: 6%; 
            margin-right: 6%;      
         }
         @media (max-width: 800px){
            Layout {
                font-size: 10px;
            }
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
                grid-template-rows: 8vh 25vh 20vh 19vh;
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
                margin: 0;
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
          }
       `}
        </style>

    </Layout>
);

Cast.getInitialProps = async function (context) {
    const { id } = context.query;
    const [show, data] = await Promise.all([
        fetch(`https://api.tvmaze.com/shows/${id}`).then(r => r.json()),
        fetch(`https://api.tvmaze.com/shows/${id}/cast`).then(r => r.json()),
    ])
    return {
        show,
        cast: data.map(entry => entry)
    };
};

export default Cast;
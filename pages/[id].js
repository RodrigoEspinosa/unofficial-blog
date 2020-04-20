import Link from 'next/link';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import React from "react"


const Blog = props => (
    <Layout>
        <h1 className="title">{props.data.name}'s unofficial Blog</h1>
        <div className="container">

            <div className="summary">

                <p>{props.data.summary.replace(/<[^>]*>?/gm, '')}</p>
                <p>{props.data.genres.length > 0 ? "Genre: " + props.data.genres.join(" / ") : <noimg />}</p>
                <p>Network: {props.data.network ? props.data.network.name + " - " + props.data.network.country.name : props.data.webChannel.name}</p>
                <p>Status: {props.data.status}</p>
                <br />
                <br />
                <div className="lista">
                    <ul >
                        <li className="episodes">
                            <Link href="/seasons/${props.data.id}" as={`/seasons/${props.data.id}`}>
                                <a>Episodes</a>
                            </Link>
                        </li>
                        <li className="cast">
                            <Link href="/cast/${props.data.id}" as={`/cast/${props.data.id}`}>
                                <a>Cast</a>
                            </Link></li>
                        <li className="crew">
                            <Link href="/crew/${props.data.id}" as={`/crew/${props.data.id}`}>
                                <a>Crew</a>
                            </Link></li>
                    </ul>
                </div>
            </div>

            <div className="img">{props.data.image ? <img src={props.data.image.original} /> : <div />}</div>
        </div>
        <style jsx>{`
            
            .summary {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 2;
                grid-row-end: 3;
                padding: 10px 15px 10px 20px;
                flex: 1;
            }
            .list {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 3;
                grid-row-end: 5;       
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
                  height: 90vh;
  
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
                margin-top: 7vh;
            }
            .container {
                    padding-top: 15px;
                    justify-content: stretch;   
                    align-content: stretch;     
                    display: flex;
                    margin-left: 5%; 
                    margin-right: 6%;
                 }
            ul {
                margin: 0;
                padding: 0;
            }
            li {
                list-style-type: none;
                height: 13vh;
                display: flex;
                align-items: center;
                justify-content: center;

            }
            .episodes {
                background-color: #F4F4F4;
            }
            .cast {
                background-color: white;
            }
            .crew {
                background-color: #F4F4F4;
            }
            @media (max-width: 800px){
                Layout {
                    font-size: 10px;
                }
                .img img {
                    height: 35vh;
            }
                .container {
                    padding-top: 15px;
                    justify-content: stretch;   
                    align-content: stretch;     
                    display: flex;
                    grid-template-columns: 20vw 20vw 20vw 20vw ;
                    grid-template-rows: 8vh 42vh 20vh 19vh;
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
                    text-align:center;
                    margin-top: 0vh;
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
                    grid-row-start: 4;
                    grid-row-end: 5;            
                }
                li {
                    list-style-type: none;
                    height: 6vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
              }
       `}
        </style>
    </Layout>
)

Blog.getInitialProps = async function (context) {
    const { id } = context.query;

    const res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${id}`);
    const data = await res.json();
    console.log(id);
    return {
        data
    };
};

export default Blog

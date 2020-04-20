import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import React from "react"

const Choose = () => {

    const [show, setShow] = useState("")
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async function (data) {
        await setShow(data.name)
        console.log(show)

    }

    const PostLink = props => (
        <Link href={"/[id]"} as={`/${props.id}`}>
            <a>Let's go!</a>
        </Link>
    );

    return (
        <div className="indexContainer">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300" rel="stylesheet" />
            </Head>
            <form className="indexForm" onSubmit={handleSubmit(onSubmit)} >
                <label>
                    Pick a show:
                </label>
                <input
                    className="input"
                    type="text" name="name"
                    placeholder="Mad Men, The Wire..."
                    ref={register({
                        required: true,
                        validate: async value => {
                            const res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}`)
                            if (res.ok) {
                                const data = await res.json()
                                console.log(data.name)
                                return data.name.length > 0
                            } else {
                                setShow("")
                                return <p>Don't be silly!</p>
                            }
                        }
                    })}
                />
                {errors.name && <p className="error">Don't be silly! That's not a show...</p>}
                <div>{show ? <div /> : <input className="button" type="submit" value="I'm ready" />}</div>
                <div key={show}>
                    {show.length > 0 ? <div>
                        <div className="link"><PostLink id={show} /></div> <p className="quote">"Wild Thoughts" - Dj Khaled, 2017</p></div> : <p>Please!</p>}
                </div>
            </form>
            <style jsx>{`
                .indexContainer {
                    position: absolute; top: 0; left: 0;
                    width: 100%; 
                    height: 100%;
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Manrope', sans-serif;
                    letter-spacing: 0.4px;  
                    
                }
                .indexForm {
                    background-color: #33C7DE;
                    margin-bottom: 6vh;
                    padding: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                    flex-direction: column;
                    jusfity-content: space-between;
                    height: 35vh;
                    width: 20vw;
                    
                }
                input {
                    padding: 10px;
                }
                .indexForm > * {
                    margin: 10px;
                }       
                .button {
                    display:inline-block;
                     padding:0.35em 1.2em;
                    font-size: 13px;
                     border:0.1em solid #FFFFFF;
                     margin:1em 0.3em 0.3em 0;
                     border-radius:0.12em;
                     box-sizing: border-box;
                     text-decoration:none;
                    background-color: transparent;
                     font-weight:300;
                     color:#FFFFFF;
                     text-align:center;
                     transition: all 0.2s;
                }
                .button:hover{
                     color:#000000;
                     background-color:#FFFFFF;
                }
                .quote {
                    font-size: 11px;
                }   
                .error {
                    font-size: 11px;
                }     
                @media (max-width: 800px){
                    .indexForm {
                        width: 40vw;
                        font-size: 12px;
                    }
                    .quote {
                        font-size: 10px;
                    }
                }               
            `}
            </style>
        </div>
    )
}

export default Choose
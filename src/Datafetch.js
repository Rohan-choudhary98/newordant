
import { useEffect, useState } from "react";
import './Fetchitem.css'
import {  Link } from "react-router-dom";

function Datafetch() {
    const [User, Setuser] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(response => response.json())
            .then(json => Setuser((json).slice(0, 152)))
    }, []);
    console.log(User);
    const imgs='./stars/'
    return (
        <div>
          {/* naviten */}
            <div className="navbar"><h1 className="navitem">TV<span>SHOW</span></h1></div>
            {/* MAin container */}
         <div className="cardcontainer">
                {User.map((data) => {
                    return (
                        <>
                        <Link key={data.id} to={`/Singlepage/${data.id}`} >
                            <div className="maincontainer">
                                <div className='container'>
                                    <img style={{width:"10rem",height:"10rem"}} src={data.image?.medium} alt=""></img>
                                    <div className='SocialMediaIcon'>
                                    <h2>{data.name}</h2>
                                    {data.rating?.average / 2}<img id='rating' src={imgs.concat(`${String(Math.floor(data.rating.average / 2))}.jpg`)} alt=''/>
                                         <h4>{data.season}</h4> 
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default Datafetch;
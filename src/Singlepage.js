
import React, { useState, useEffect } from 'react'
import {  useParams ,useNavigate} from 'react-router-dom';
import './Fetchitem.css';

const Singlepage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, Setdata] = useState([]);
    const [datacast, setCast] = useState([])
    const getData = async () => {
        try {
            let res = await fetch(`https://api.tvmaze.com/shows/${id}`)
            let data = await res.json()
            let castres = await fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
            let castdata = await castres.json();
            console.log(castdata, 'cst');
            setCast(castdata)
            Setdata(data)
        } catch (error) {

        }

    }    

    useEffect(() => {

        getData()

    }, []);
    console.log(data)
    console.log(data, id);
    const imgs='./stars/'
    return (
        <>
     <span><button onClick={() => navigate(-1)}>Go back</button></span>
        {/* show item fetched from show api */}
            <div className='mainpage'>
                <div className="app">
                    <div className="details">
                        <div className="big-img">
                            <img style={{ width: "25rem", height: "20rem" }} src={data.image?.original} className="singleimage" alt=""></img>
                        </div>
                        <div className="box">
                            <div className="row">
                                <h2> MOVIE Name:-<span>{data?.name}</span></h2>
                                <h2>STATUS:-<span>{data.status}</span></h2>
                                <h3>LANGUAGE:-<span>{data.language}</span></h3>
                            </div>
                            <p>{data.summary}</p>
                            {data.rating?.average / 2}<img id='rating' src={imgs.concat(`${String(Math.floor(data.rating?.average / 2))}.jpg`)} alt=''/>
                        </div>
                        {/* cast item fetched from cast api */}
                        <div className='staringmain'>
                        <div className='starring'>
                            <h2 style={{ fontSize: '50px', marginLeft: '50px' }}>Starring</h2>
                            {datacast?._embedded?.cast?.map
                                ((item, index) => {
                                    return (
                                        <div key={index} className='inner'>
                                            <img src={item?.person?.image?.medium} className='stars'  alt=""/>
                                            <p className='fonts'>{item?.person?.name}</p>
                                            <p className='fonts'>as</p>
                                            <p className='fonts'>{item?.character?.name}</p>
                                        </div>
                                    )
                                })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlepage;
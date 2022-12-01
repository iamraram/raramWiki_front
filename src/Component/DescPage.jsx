import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom";


function DescPage() {

    let getLocation = useLocation();
    const returnValue = getLocation.search.toString()
    let file_title = ""
    let file_desc = ""

    console.log(returnValue)

    const getInfo = async () => {

        await fetch(`http://localhost:4000/file${returnValue}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                file_title = result.title;
                file_desc = result.desc
            })
        }

    window.onload = () => {
        getInfo()
    }

    return ( 
        <div className='ain_parent'>
            <div className="ain">
                <Link to="/" className="back_press"></Link>
                <div className="file_title">
                    {file_title}
                </div>
            </div>
            <div className="file_edited">
            {file_desc}
            </div>
        </div>
)
}

export default DescPage;
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom";


function DescPage() {

    let getLocation = useLocation();
    const returnValue = getLocation.search.toString()
    const decodeUri = decodeURI(returnValue).split("?title=")[1]

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    console.log(`${decodeUri}`)

    const getInfo = async () => {

        await fetch(`http://localhost:4000/file${returnValue}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                for (let i = 0; i < result.length; i ++) {
                    console.log(result[i].title )
                    if (result[i].title === decodeUri) {
                        console.log('success')
                        setTitle(result[i].title)
                        setDesc(result[i].desc)
                        break
                    }
                }
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
                    {title}
                </div>
            </div>
            <div className="file_edited">
            {desc}
            </div>
        </div>
)
}

export default DescPage;
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchResult() {
    let getLocation = useLocation();
    const returnValue = getLocation.search.toString().split("?value=")[1]
    const decodeUri = decodeURI(returnValue);
    const splited = decodeUri.split("+").join(" ")
    let arrayList = []

    const getDocumentsLength = async () => {
        await fetch(`http://localhost:4000/search?title=${splited}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => show(result))
        }

       window.onload = () => {
         getDocumentsLength()
    }

    const show = (list) => {
        console.log(list.length)
        console.log(list)

        for (let i = 0; i < list.length; i ++) {
            arrayList.push(
                <Link to={`/file/${list[i].title}`}>
                    <div className="resultText">
                        <div className='resultTextFirstChild'>
                            <div className='descTitle'>{list[i].title}</div>
                            <div className='descEdit'>익명의 유저</div>
                        </div>
                        <div className='descPreview'>{list[i].desc}</div>
                    </div>
                </Link>
            )
            console.log(arrayList)
        }
    }


    // 여기 고쳐야 함


    return (
        <div className="result">
            <form method="GET" action="/search" id="search" className="searchForm" autoComplete="off">
                <input type="text" className="searchBar" placeholder={splited} name="value"/>
                <input type="submit" value="" className="searchImage"/>
            </form>
            {arrayList}
        </div>
    )
}

export default SearchResult;
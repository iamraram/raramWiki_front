import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

function SearchResult() {
    let getLocation = useLocation();
    const returnValue = getLocation.search.toString().split("?value=")[1]
    const decodeUri = decodeURI(returnValue);
    const splited = decodeUri.split("+").join(" ")

    const [textData, setTextData] = useState('')

    return (
        <div className="result">
            <form method="GET" action="/search" id="search" className="searchForm" autoComplete="off">
                <input type="text" className="searchBar" placeholder={splited} name="value"/>
                <input type="submit" value="" className="searchImage"/>
            </form>
            <div className="resultText">
                <div className='resultTextFirstChild'>
                    <div className='descTitle'>이하람</div>
                    <div className='descEdit'>30분 전 편집</div>
                </div>
                <div className='descPreview'>미리보기: 이하람은 후라길인데 후라길이 중독성이 또...</div>
            </div>
            <div className="resultText">
                <div className='resultTextFirstChild'>
                    <div className='descTitle'>이하람</div>
                    <div className='descEdit'>30분 전 편집</div>
                </div>
                <div className='descPreview'>미리보기: 이하람은 후라길인데 후라길이 중독성이 또...</div>
            </div>
            <div className="resultText">
                <div className='resultTextFirstChild'>
                    <div className='descTitle'>이하람</div>
                    <div className='descEdit'>30분 전 편집</div>
                </div>
                <div className='descPreview'>미리보기: 이하람은 후라길인데 후라길이 중독성이 또...</div>
            </div>
        </div>
    )
}

export default SearchResult;
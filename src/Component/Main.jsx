import React, { useState } from 'react';
import { Link } from "react-router-dom";

function MainPage() {
    
    const [text, setText] = useState('')

    const getDocumentsLength = async () => {
       await fetch('http://localhost:4000/value', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result =>
                setText(result)
            );
    }

      window.onload = () => {
        getDocumentsLength()
    }

    return (
        <div>
            <div className="searchBox">
                <div className="searchBox_child">
                    <div className="searchText">
                        관심있는 주제 검색하기
                    </div>
                    <form method="GET" action="/search" id="search" className="searchForm" autoComplete="off">
                        <input type="text" className="searchBar" placeholder="검색어를 입력하세요" name="value"/>
                        <input type="submit" value="" className="searchImage"/>
                    </form>
                    <div className="infoText">
                        원하는 결과가 나오지 않는다면&nbsp;
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link to="/newDocument">
                            문서 만들기
                        </Link>
                    </div>
                    <div className="infoText noMargin">
                        현재 {text}개의 문서가 있습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
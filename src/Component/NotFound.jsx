import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div className="bodyText">
            <div className="Notfound_text">
                찾을 수 없는 페이지입니다.
            </div>
            <Link to="/">
                홈으로 이동하기
            </Link>
        </div>
    )
}

export default NotFound;
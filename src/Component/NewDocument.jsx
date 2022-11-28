import React, { useState } from 'react';

function NewDocument() {
    const existName = ['박희찬', '이하람']
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [desc, setDesc] = useState('')
    const [searchBar, setSearchBar] = useState(['searchBar'])
    const [btnColor, setBtnColor] =  useState(['grayColor'])
    const [already, setAlready] = useState(['centerBackground'])
    let submitText = []
    
    const makeJson = () => {
        if (submitText.length >= 2) {
            submitText.pop()
            submitText.pop()
        }
        submitText.push(text)
        submitText.push(desc)
        console.log(submitText)
    }

    const onTextChange = (event) => {
        console.log(event.target.value)
        existName.forEach(element => {
            if (element === (event.target.value || event.target.value.replace(" ","")))  {
                setShow(true)
                setSearchBar('searchBar redCaution')
            }
            else {
                setShow(false)
                setSearchBar('searchBar')
            }
        })
        setText(event.target.value)
    }

    const onDescChange = (event) => {
        if (event.target.value.length >= 10 && (!show && text.length >= 1)) {
            setBtnColor('grayColor blueColor')
            setAlready('centerBackground showBackground')
        }
        else {
            setBtnColor('grayColor')
            setAlready('centerBackground')
        }
        setDesc(event.target.value)
    }

    return (
        <div className="result">
            <form method="GET" action="/upload" id="search" className="searchForm smallForm" autoComplete="off">
                <input type="text" className={searchBar} placeholder="문서 제목을 입력하세요" name="value" value={text} onChange={onTextChange}/>
                { show &&
                    <div className="caution">
                        이미 존재하는 문서명입니다. 다른 문서명을 입력해주세요.
                    </div> 
                }
                <textarea className="desc" placeholder="문서 내용을 입력하세요" value={desc} onChange={onDescChange}></textarea>
            </form>
            <button className={btnColor} onClick={makeJson}>문서 만들기</button>
            <div className={already}>내용은 10자 이상이어야 합니다.</div>
        </div>
    )
}

export default NewDocument;
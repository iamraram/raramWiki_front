import React, { useState } from 'react';

let existName = []

function NewDocument() {
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [desc, setDesc] = useState('')
    const [searchBar, setSearchBar] = useState(['searchBar'])
    const [btnColor, setBtnColor] =  useState(['grayColor'])
    const [already, setAlready] = useState(['centerBackground'])

    const onloads = () => {
        fetch(`http://localhost:4000/file`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                for (let i = 0; i < result.length; i ++) {
                    existName.push(result[i].title)
                }
            })
    }

    window.onload = () => {
        onloads()
    }

    const onTextChange = (event) => {
        existName.forEach(element => {
            if (element === event.target.value)  {
                console.log(element, event.target.value)
                console.log(show, searchBar, btnColor)

                setShow(true)
                setSearchBar('searchBar redCaution')
                setBtnColor('grayColor')

                console.log(show, searchBar, btnColor)
            }
            else {
                setShow(false)
                setSearchBar('searchBar')
                if (!event.target.value.length >= 2) {
                    setBtnColor('grayColor blueColor')
                }
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

    const handleSubmit = (event) => {
        if (btnColor === 'grayColor blueColor') {
            console.log("뀨") 
            fetch(`http://localhost:4000/new?title=${text}&desc=${desc}`,{
                method : "POST",
            })
                .then(response => response.json())
                .then(result =>
                    alert(result)
                );
        }
        else {
            event.preventDefault()
        }
    }

    return ( 
        <div className="result">
            <form onSubmit={handleSubmit} id="search" className="searchForm smallForm" autoComplete="off">
                <input type="text" className={searchBar} placeholder="문서 제목을 입력하세요" name="value" value={text} onChange={onTextChange}/>
                { show &&
                    <div className="caution">
                        이미 존재하는 문서명입니다. 다른 문서명을 입력해주세요.
                    </div> 
                }
                <textarea className="desc" placeholder="문서 내용을 입력하세요" value={desc} onChange={onDescChange}></textarea>
                <button type="submit" className={btnColor}>문서 생성</button>
            </form>
            <div className={already}>내용은 10자 이상이어야 합니다.</div>
        </div>
    )
}

export default NewDocument;
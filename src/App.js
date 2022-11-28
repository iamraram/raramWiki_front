import './App.css';
import MainPage from './Component/Main'
import NotFound from './Component/NotFound'
import NewDocument from './Component/NewDocument'
import Header from './Component/Header'

import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import SearchResult from "./Component/SearchResult";

function App() {
    return (
    <div className="App">
        <Header />
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route path="/newDocument" element={<NewDocument/>}/>
                <Route path="/search" element={<SearchResult/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;

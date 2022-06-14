import {Header} from './components/Header';
import{useState,useEffect, useMemo} from 'react';
// import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Sidebar } from './components/Sidebar';
function App(){
    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState("");
    
    const GetTopAnime = async()=>{
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(data => data.json());

            setTopAnime(temp.top.slice(0,5))
            console.log("hola soy top anime");
    }

    useEffect(() => {
        GetTopAnime();
        
    }, [])



    const handleSearch = e =>{
        e.preventDefault();
        FetchAnime(search);
        setSearch('');
        
    }

    const FetchAnime = async(query)=>{
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)

            .then(data => data.json());
            console.log(temp.results);
            setAnimeList(temp.data);
    }
    
    
    return (
        <div className="App">
            <Header/>
            <div className="content-wrap">
                <Sidebar topAnime={topAnime}/>
                <MainContent
                    handleSearch={handleSearch}
                    search = {search}
                    animeList={animeList}
                    setSearch={setSearch}
                />
            </div>
        </div>
    );
}

export default App;
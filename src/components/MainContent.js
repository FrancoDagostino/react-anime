import React from 'react'
import AnimeCard from './AnimeCard'
function MainContent({handleSearch,search,animeList,setSearch}) {
  return (
    <main>
       <div
       className="main-head"
       >
           <form className="search-box"
            onSubmit={handleSearch}
           >
               <input
               type="search"
               placeholder="search for anime..."
               required
               value={search}
               onChange={e => setSearch(e.target.value)}
               />
           </form>
       </div>
       <div className="anime-list">
           {animeList.map(anime=>(
               <AnimeCard
                anime={anime}
                key={anime.mal_id}
               />
           ))}
       </div>
    </main>
  )
}

export default MainContent
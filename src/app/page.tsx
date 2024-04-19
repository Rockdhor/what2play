'use client';
import { useState } from 'react';

function Header() {
  return(
    <div className="navbar bg-base-200 place-self-auto shadow-lg">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">what2play</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      🎮
    </button>
  </div>
</div>
  )
}
function Hero() {
  return (
    <div className="hero">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Find what you're playing next.</h1>
      <p className="py-6">I'm feeling...</p>
    </div>
  </div>
</div>
  )
}
function Option({genre, modal}) {
  
  return (
      
      <button 
      onClick={() => modal.onClick(genre.id)}
      key={genre.id} 
      className="btn text-lg md:text-2xl m-1 md:py-8 md:h-32 text-center ">
      {genre.feeling}
      </button>
    
  )
  }
function Options(modal: Function){
    let genreList = [
      { id: 4, genre: 'Action', feeling: '💥 Thrill-Seeking' },
      { id: 51, genre: 'Indie', feeling: '🦴 Unique' },
      { id: 3, genre: 'Adventure', feeling: '🥾 Adventurous' },
      { id: 5, genre: 'RPG', feeling: '⚔️ Inmersive' },
      { id: 10, genre: 'Strategy', feeling: '🤓 Strategic' },
      { id: 2, genre: 'Shooter', feeling: '🔫 Competitive' },
      { id: 40, genre: 'Casual', feeling: '🕶️ Casual' },
      { id: 14, genre: 'Simulation', feeling: '🧺 Realistic' },
      { id: 7, genre: 'Puzzle', feeling: '🧩 Resourceful' },
      { id: 11, genre: 'Arcade', feeling: '🕹️ Achieving' },
      { id: 83, genre: 'Platformer', feeling: '🦘 Agile' },
      { id: 1, genre: 'Racing', feeling: '🏎️ Fast' },
      { id: 59, genre: 'Massively Multiplayer', feeling: '🐉 Epic' },
      { id: 15, genre: 'Sports', feeling: '🏈 Athletic' },
      { id: 6, genre: 'Fighting', feeling: '🥊 Feisty' },
      { id: 19, genre: 'Family', feeling: '👨‍👩‍👧‍👦 Cooperative' },
      { id: 28, genre: 'Board Games', feeling: '♟️ Different' },
      { id: 34, genre: 'Educational', feeling: '📖 Curious' },
      { id: 17, genre: 'Card', feeling: '🃏 Lucky' }
    ]
    let genres = genreList.map(i => <div>{<Option genre={i} key={i.id} modal={modal}/>}</div>)
  return(
    <div className="flex flex-wrap 4/5 md:w-3/5 self-center justify-around  ">
      {
        genres
      }
    </div>
  )
}

function Modal({results, index, setIndex}){
  function click(c: number) {
    c = index + c
    
    c = c < 0 ? 19 :
        c > 19  ? 0 :
        c
        console.log(c)
        setIndex(c)
  }
  return(
  <dialog id="my_modal" className="modal">
        {
          results.length == 0 ? "loading"
          :
          <div className="modal-box max-w-none w-1/10 md:w-2/4">
          <div className="w-64 md:w-full rounded-box">
            <div className="w-full flex flex-col">
            <div className="navbar place-self-auto flex flex-wrap justify-between">
  <div className="">
    <a style={{wordBreak : 'break-word'}} target="_blank" href={"https://www.google.com/search?q="+results[index].title} className="btn btn-ghost text-xl text-balance">{results[index].title}</a>
  </div>
  <div className="flex flex-wrap">
    {
      results[index].genres.map((g:string)=> {
        return <div className="badge badge-primary">{g}</div>
      })
    }
  </div>
</div>
            <h1 className="text-lg md:text-4xl pb-1"></h1>
              <img src={results[index].image} className="w-full max-h-90" alt="Tailwind CSS Carousel component" />
              <div className='flex flex-wrap justify-around py-4'>
              {
      results[index].tags.map((t:string)=> {
        return <div className="badge badge-primary mb-2">{t}</div>
      })
    }
              </div>
              <div className="flex justify-between">
                <button onClick={() =>click(-1)} className="btn btn-secondary">⬅️ Previous</button><button onClick={() =>click(1)} className="btn btn-secondary">Next ➡️</button>
              </div>
              </div> 
          </div>
        </div>
        }
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
  )
}

export default function Home() {
  /*
  const apiUrl = "https://api.rawg.io/api/genres?key=a3b3771fcdb545bc871666e674d6f05e"
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data["results"].map((i: { index: any; name: any; }) => ({"id":i.id, "genre":i.name, "feeling":i.name})));
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  [
    { id: 4, genre: 'Action', feeling: 'Action' },
    { id: 51, genre: 'Indie', feeling: 'Indie' },
    { id: 3, genre: 'Adventure', feeling: 'Adventure' },
    { id: 5, genre: 'RPG', feeling: 'RPG' },
    { id: 10, genre: 'Strategy', feeling: 'Strategy' },
    { id: 2, genre: 'Shooter', feeling: 'Shooter' },
    { id: 40, genre: 'Casual', feeling: 'Casual' },
    { id: 14, genre: 'Simulation', feeling: 'Simulation' },
    { id: 7, genre: 'Puzzle', feeling: 'Puzzle' },
    { id: 11, genre: 'Arcade', feeling: 'Arcade' },
    { id: 83, genre: 'Platformer', feeling: 'Platformer' },
    { id: 1, genre: 'Racing', feeling: 'Racing' },
    {
      id: 59,
      genre: 'Massively Multiplayer',
      feeling: 'Massively Multiplayer'
    },
    { id: 15, genre: 'Sports', feeling: 'Sports' },
    { id: 6, genre: 'Fighting', feeling: 'Fighting' },
    { id: 19, genre: 'Family', feeling: 'Family' },
    { id: 28, genre: 'Board Games', feeling: 'Board Games' },
    { id: 34, genre: 'Educational', feeling: 'Educational' },
    { id: 17, genre: 'Card', feeling: 'Card' }
  ]
  */
  
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]);

  function search (id:string)  {
    setResults([])
    setIndex(0)
    
    // Define the API URL
    const apiUrl = 'https://api.rawg.io/api/games?key=a3b3771fcdb545bc871666e674d6f05e&genres='+id;

// Make a GET request
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        data = data["results"].slice(0,20).map(i => 
          ({
            "title":i.name,
            "image":i.background_image,
            "genres":i.genres.map((g)=>g.name),
            "tags":i.tags.filter((t)=>t.language=="eng").splice(0,8).map((t)=>t.name.charAt(0).toUpperCase() + t.name.slice(1))
        })
        )
        setResults(data)
        document.getElementById('my_modal').showModal()
      })
      .catch(error => {
        console.error('Error:', error);
      });
      }

  return (
    <div className="flex justify-center flex-col">
      <Header/>
      <Hero/>
      <Options onClick={search}/>
      <Modal results={results} index={index} setIndex={setIndex}/>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';

function Header() {
  return(
    <div className="navbar bg-base-200 place-self-auto shadow-lg">
  <div className="flex-1">
    <p className="btn btn-ghost text-xl">what2play</p>
  </div>
  <div className="flex-none">
  <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="coffee" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>
</div>
  )
}
function Hero() {
  const phrases = [
    "Now with dark mode!",
    "As seen on TV!",
    "Awesome!",
    "May contain nuts!",
    "Limited edition!",
    "More polygons!",
    "It's here!",
    "More than 500 sold!",
    "Holy cow, man!",
    "Oh man!",
    "Fat free!",
    "Ask your doctor!",
    "Legal in Finland!"
  ]
  const [phrase, setPhrase] = useState(phrases[Math.floor(Math.random() * phrases.length)]);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className="hero">
  <div className="hero-content text-center">
    <div className="max-w-md flex flex-col">
      <h1 className="text-5xl font-bold">Find what you&#39;re playing next.</h1>
      {isClient && <div className="minecraft text-primary w-content place-self-end">
      {
        phrase
      } 🎮
      </div>}
      <p className="py-6">I&#39;m feeling...</p>
    </div>
  </div>
</div>
  )
}
function Option({genre, modal}: {genre:any, modal:any}) {
  
  return (
      
      <button 
      onClick={() => modal.onClick(genre.id)}
      key={genre.id} 
      className="btn text-lg md:text-2xl m-1 md:py-8 md:h-32 text-center ">
      {genre.feeling}
      </button>
    
  )
  }
function Options(modal: any){
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
    let genres = genreList.map(i => <div key={i.id}>{<Option genre={i} key={i.id} modal={modal}/>}</div>)
  return(
    <div className="flex flex-wrap 4/5 md:w-3/5 self-center justify-around  ">
      {
        genres
      }
    </div>
  )
}

function Modal({results, index, setIndex}:{results:any,index:any,setIndex:any}){
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
        {results.length == 0 ? <span className="loading loading-dots loading-lg"></span> :
          <div className="modal-box max-w-none w-1/10 md:w-2/4">
          <div className="w-64 md:w-full rounded-box">
            <div className="w-full flex flex-col">
               <div><div className="navbar place-self-auto flex flex-wrap justify-between">
               <div className="">
                 <a style={{wordBreak : 'break-word'}} target="_blank" href={"https://www.google.com/search?q="+results[index].title} className="btn btn-ghost text-xl text-balance">{results[index].title}</a>
               </div>
               <div className="flex flex-wrap">
                 {
                   results[index].genres.map((g:string)=> {
                     return <div className="badge badge-primary" key={g}>{g}</div>
                   })
                 }
               </div>
             </div>
                         <h1 className="text-lg md:text-4xl pb-1"></h1>
                           <img src={results[index].image} className="w-full max-h-90" alt="Tailwind CSS Carousel component" />
                           <div className='flex flex-wrap justify-around py-4'>
                           {
                   results[index].tags.map((t:string)=> {
                     return <div className="badge badge-primary mb-2" key={t}>{t}</div>
                   })
                 }
                           </div>
                           <div className="flex justify-between">
                             <button onClick={() =>click(-1)} className="btn btn-secondary">⬅️ Previous</button><button onClick={() =>click(1)} className="btn btn-secondary">Next ➡️</button>
                           </div></div>
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
        data = data["results"].slice(0,20).map((i: { name: any; background_image: any; genres: any[]; tags: any[]; }) => 
          ({
            "title":i.name,
            "image":i.background_image,
            "genres":i.genres.map((g: { name: any; })=>g.name),
            "tags":i.tags.filter((t: { language: string; })=>t.language=="eng").splice(0,8).map((t: { name: string; })=>t.name.charAt(0).toUpperCase() + t.name.slice(1))
        })
        )
        setResults(data)
        let modal:any = document.getElementById('my_modal')
        modal!.showModal()
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

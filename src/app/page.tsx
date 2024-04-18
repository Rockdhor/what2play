'use client';
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
function Option({genre}) {
  let modal = () => {
    document.getElementById('my_modal').showModal()
  }
  return (
    <div>
      <button 
      onClick={modal}
      key={genre.id} 
      className="btn text-lg md:text-2xl md:py-8 md:h-32 text-center">
      {genre.feeling}
      </button>
    </div>
  )
  }
function Options(){
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
    let genres = genreList.map(i => <div>{<Option genre={i} key={i.id}/>}</div>)
  return(
    <div className="flex flex-wrap 4/5 md:w-3/5 self-center justify-evenly">
      {
        genres
      }
    </div>
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
  
  return (
    <div className="flex justify-center flex-col">
      <Header/>
      <Hero/>
      <Options/>
      <dialog id="my_modal" className="modal">
        <div className="modal-box w-auto">
          
        <div className="w-64 md:w-96 carousel rounded-box">
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
    <p></p>
  </div> 
  
</div>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

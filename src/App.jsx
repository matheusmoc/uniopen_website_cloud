
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Relation from './components/Relation'

const App = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6e00a5]/80"
      >
      <main className='bg-black'>
        <Navbar />
        <Hero />
        <Highlights />
        <Relation />
      </main>
    </div>
  )
}

export default App

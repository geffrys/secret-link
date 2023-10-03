import RoutesPG from './routes/RoutesPG'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Notes from './components/Notes'

export default function App() {
  return (
    <main>
      <Navbar />
      <section className='each_page'>
        <RoutesPG/>
      </section>
      <Footer className="foot"/>
      <Notes />
    </main>
  )
}

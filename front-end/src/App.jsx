import RoutesPG from './routes/RoutesPG'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import OnlineStatus from './components/OnlineStatus'


export default function App() {
  return (
    <main>
      <Navbar />
      <OnlineStatus />
      <section className='each_page'>
        <RoutesPG/>
      </section>
      <Footer className="foot"/>
    </main>
  )
}

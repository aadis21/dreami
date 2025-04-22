import AdminDashboard from './Pages/admin/AdminDashboard'
import Fotter from './Pages/Global/Fotter/Fotter'
import Nav from './Pages/Global/Nav/Nav'
import VideoCarousel from './Pages/Global/videoCrousal/Videocrousal'
//import Landing from './Pages/Landing/Landing'
import Approutes from './routes/Approutes'

function App() {
  return (
    <>
       <Nav />
       <Approutes />
      <Fotter /> 
      {/* <AdminDashboard /> */}
      {/* <VideoCarousel/> */}
    </>
  )
}

export default App

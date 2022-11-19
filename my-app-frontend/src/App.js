import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './components/Static/Home';
import CriticsForm from './components/Critics/CriticsForm';
import CriticsList from './components/Critics/CriticsList';
import GangsterFilmsForm from './components/GangsterFilms/GangsterFilmsForm';
import GangsterFilmsList  from './components/GangsterFilms/GangsterFilmsList';
import ReviewsEdit from './components/Reviews/ReviewsEdit';
// import ReviewsForm from './components/ReviewsForm';
import ReviewsList from './components/Reviews/ReviewsList';
import { ReviewsProvider } from './context/reviewsContext';
import { GangsterFilmsProvider } from './context/gangsterFilmsContext';
import { CriticsProvider } from './context/criticsContext';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>

      <GangsterFilmsProvider>
        <Routes>
          <Route path="/gangster_films" element={<GangsterFilmsList />} /> 
          <Route path="/gangster_films/new" element={<GangsterFilmsForm />} /> 
        
        </Routes>
        <ReviewsProvider>
        <Routes>
          <Route path="/reviews" element={<ReviewsList />} /> 
          {/* <Route path="/reviews/new" element={<ReviewsForm />} />  */}
          <Route path="/reviews/:id/edit" element={<ReviewsEdit />} /> 
      
        </Routes>
      </ReviewsProvider>
      </GangsterFilmsProvider>

      <CriticsProvider>
        <Routes>
          <Route path="/critics/new" element={<CriticsForm />} /> 
          <Route path="/critics" element={<CriticsList />} /> 
          </Routes>
      </CriticsProvider>

      {/* <ReviewsProvider>
        <Routes>
          <Route path="/reviews" element={<ReviewsList />} /> 
          <Route path="/reviews/new" element={<ReviewsForm />} /> 
          <Route path="/reviews/:id/edit" element={<ReviewsEdit />} /> 
          <Route path="/reviews" element={<ReviewsCard />} /> 
        </Routes>
      </ReviewsProvider> */}

    </Router>
     
   
  );
}

export default App;

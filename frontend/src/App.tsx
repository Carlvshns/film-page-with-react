
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './pages/create';
import CreateSearch from './pages/create/create-search';
import Film from './pages/film';
import Genre from './pages/genre';
import Listing from './pages/listing';
import Search from './pages/search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path="/" element={<Listing />} />
         <Route path="/create" element={<Create />} />
         <Route path="/create-search">
           <Route path=":movieName" element={<CreateSearch />} />
         </Route>
         <Route path="/film">
           <Route path=":movieUuid" element={<Film />} />
         </Route>
         <Route path="/search">
           <Route path=":movieName" element={<Search />} />
         </Route>
         <Route path="/genre">
           <Route path=":movieGenre" element={<Genre />} />
         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;

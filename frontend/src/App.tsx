
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './pages/create';
import Form from './pages/form';
import Genre from './pages/genre';
import Listing from './pages/Listing';
import Search from './pages/search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path="/" element={<Listing />} />
         <Route path="/create" element={<Create />} />
         <Route path="/form">
           <Route path=":movieUuid" element={<Form />} />
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

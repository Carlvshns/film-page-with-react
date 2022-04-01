import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './pages/form';
import Listing from './pages/Listing';
import Search from './pages/search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path="/" element={<Listing />} />
         <Route path="/form">
           <Route path=":movieId" element={<Form />} />
         </Route>
         <Route path="/search">
           <Route path=":movieName" element={<Search />} />
         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import TvPage from "./pages/TvPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<MainPage/>}/>
        <Route  path="/tv/*" >
          <Route  path="" element={<TvPage/>}/>
          <Route  path=":id" element={<TvDetail/>}/>
        </Route>
        <Route  path="/movie/:id" element={<MovieDetail/>}/>
        
        
      </Routes>
    </Router>
  );
}

export default App;

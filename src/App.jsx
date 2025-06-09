import Recipes from './components/Recipes';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path={'/recipes/:idMeal'} element={<Recipes/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './home/home.js';
import { ParallaxProvider } from 'react-scroll-parallax';

export function App() {
  return (
    <ParallaxProvider>
        <Router>
            <Routes>
              <Route path='/' element={<Home/>}>
    
              </Route>
            </Routes>
        </Router>
    </ParallaxProvider>
  );
}



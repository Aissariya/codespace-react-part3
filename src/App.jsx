import './App.css';
import Home from './Home';
import About from './About';
import Posts from './Posts';

import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/Posts?fname=Aissariya&lname=Thongpang">Post Greeting</Link></li>
      <li><Link to="/Posts/1">Post id1</Link></li>
      <li><Link to="/Posts/2">Post id2</Link></li>

    </ul>
  </div>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/posts/:id" element={<Posts/>}/>
  </Routes>


  </BrowserRouter>);
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import "aos/dist/aos.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Works from './components/Works';
import Footer from './components/Footer';
import Post from './components/Post';
import AOS from "aos";
function App() {
  AOS.init({
    duration: 1200
  });
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/works/:slug" component={Post} />
          <Route path="/works" component={Works} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;

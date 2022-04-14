import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';
import NotFound from './components/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
  
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path= "/">
            <AnimeList />
          </Route>

          <Route exact path= "/AnimeDetails/:id">
            <AnimeDetails />
          </Route>

          <Route path = "*">
              <NotFound />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

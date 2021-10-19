
import Homepage from'./Homepage';
import Main from './Main';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
        
        <div className="content">
            <Switch>
              <Route exact path="/">
                  <Main />
              </Route>
              
                <Route exact path="/Homepage">
                  <Homepage />
                </Route>
              
              
              
  
            </Switch>
          
          </div>
       </div>
      </Router>
      
    );
  }
  
export default App;

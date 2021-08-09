import React from 'react'
import Wms_connection from './components/Wms_connection'
import Wms_map from './components/Wms_map'

import 'antd/dist/antd.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
        <div>
          <Switch>
          <Route path='/' exact component={Wms_connection}/>
          <Route path='/Water_map'  component={Wms_map}/>
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;

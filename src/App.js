import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import { Home, Join ,Login,UserInfo } from './pages';
class App extends Component {
  render(){
    return(
      <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Join" component={Join}/>
          <Route path="/Login" component={Login}/>
          <Route path="/UserInfo" component={UserInfo}/>
      </div>
    );
  };
}

export default App;

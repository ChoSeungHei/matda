import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import { Home, Join ,Login,UserInfo,AddReview } from './pages';
class App extends Component {
  render(){
    return(
      <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Join" component={Join}/>
          <Route path="/Login" component={Login}/>
          <Route path="/UserInfo" component={UserInfo}/>
          <Route path="/AddReview" component={AddReview}/>
      </div>
    );
  };
}

export default App;

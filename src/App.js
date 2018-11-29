import React, { Component } from 'react';
import Form from './components/Form';
import Logout from './components/Logout';


class App extends Component {
  constructor(props) {
     super(props);

     this.state = {
       activeTab: '1',
       isAuthorized: false
     };
   }

   logout = () => {
     this.setState({
       isAuthorized: false
     })
   }

   login = () => {
     this.setState({
       isAuthorized: true
     });
   }

   toggle = (tab) => () => {
     if (this.state.activeTab !== tab) {
       this.setState({
         activeTab: tab
       });
     }
   }

   render() {
     const { isAuthorized } = this.state;
     return (
     <div>
       {isAuthorized
         ? (
          <Logout logout={this.logout} />
         )
         : (
            <Form autorisation={this.login}/>
         )
       }
     </div>
   )
  }
}

export default App;

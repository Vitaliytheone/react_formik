import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Registration from './Registration';
import Autorisation from './Autorisation';

class Form extends Component {
  constructor(props) {
     super(props);

     this.state = {
       activeTab: '1'
     };
   }

   toggle = (tab) => () => {
     if (this.state.activeTab !== tab) {
       this.setState({
         activeTab: tab
       });
     }
   }

   render() {
     return (
           <Row className="justify-content-center my-2">
             <Col xs="4">
               <Nav tabs>
                 <NavItem>
                   <NavLink
                     className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={ this.toggle('1') }
                   >
                     Registration
                   </NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink
                     className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={ this.toggle('2')}
                   >
                     Autorisation
                   </NavLink>
                 </NavItem>
               </Nav>
               <TabContent activeTab={this.state.activeTab}>
                 <TabPane tabId="1">
                   <Row>
                     <Col>
                       <Registration changeTab={this.toggle('2')} />
                     </Col>
                   </Row>
                 </TabPane>
                 <TabPane tabId="2">
                   <Row>
                     <Col>
                       <Autorisation login={this.props.autorisation} />
                     </Col>
                   </Row>
                 </TabPane>
               </TabContent>
             </Col>
           </Row>
   )
  }
}

export default Form;

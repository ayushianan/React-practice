import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
//import { Media } from 'reactstrap';
import Menu from './components/MenuComponent';
//import { DISHES }  from './shared/dishes';
import Main from './components/MainComponent';

//import React from 'react';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class App extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {
      //      dishes: DISHES
//};
  //  this.toggle = this.toggle.bind(this);
    //this.state = {
      //isOpen: false
    //};
  //}
  //toggle() {
    //this.setState({
      //isOpen: !this.state.isOpen
    //});
  //}
  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
    //return (
      //<div>
    //    <Navbar color="light" light expand="md">
      //    <NavbarBrand href="/">reactstrap</NavbarBrand>
        //  <NavbarToggler onClick={this.toggle} />
          //<Collapse isOpen={this.state.isOpen} navbar>
            //<Nav className="ml-auto" navbar>
              //<NavItem>
                //<NavLink href="/components/">Components</NavLink>
        //      </NavItem>
          //    <NavItem>
            //    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              //</NavItem>
              //<UncontrolledDropdown nav inNavbar>
                //<DropdownToggle nav caret>
                  //Options
  //              </DropdownToggle>
    //            <DropdownMenu right>
      //            <DropdownItem>
        //            Option 1
          //        </DropdownItem>
            //      <DropdownItem>
              //      Option 2
                //  </DropdownItem>
                  //<DropdownItem divider />
                  //<DropdownItem>
                    //Reset
      //            </DropdownItem>
        //        </DropdownMenu>
          //    </UncontrolledDropdown>
            //</Nav>
      //    </Collapse>
        //</Navbar>
      //  <div className="App">
      // <Main />
     //</div>

      //</div>
    //);
  }
}

//class App extends React.Component {
  //render() {
    //return (
      //<div className="App">
        //<Navbar dark color="primary">
          //<div className="container">
            //<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          //</div>
        //</Navbar>
      //</div>
    //);
  //}
//}

//export default App;

/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Navbar as NavbarB, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../assets/img/white_logo.svg';
import './Navbar.scss'; // Tell webpack that Button.js uses these styles



export class Navbar extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        // this.handleChange = this.handleChange.bind(this);
    }


    // handleChange(event) {
    //     let regex = new RegExp("^[a-zA-Z ]+$");
    //     if (regex.test(event.target.value)) {
    //         this.setState({value: event.target.value});
    //     } else {
    //         if(event.target.value.length === 0){
    //             this.setState({value: ''});
    //         }
    //         return false
    //     }
    // } 
    
  
    render(){
        // const { handleSearch } = this.props
        return(
            <NavbarB className="navbar-style" bg="light" expand="lg">
            <NavbarB.Brand href="#">
                <img className="test" width="50%" src={logo}/>
            </NavbarB.Brand>
            <NavbarB.Toggle aria-controls="navbarScroll" />
            <NavbarB.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                    <Nav.Link className="link-a" href="#action1">APPLICATION</Nav.Link>
                    <NavDropdown className="link-a" title="SEARCH" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form> */}
                <NavDropdown className="link-user" title="ADMIN" id="navbarScrollingDropdown">
                </NavDropdown>
            </NavbarB.Collapse>
            </NavbarB>
        )
    }
}
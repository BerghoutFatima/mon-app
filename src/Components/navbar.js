import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { Dropdown, DropdownButton } from "react-bootstrap";
import List from './list'

 class Navbar extends Component {
  constructor(props){
    super(props)
    this.state =  { 
      forms: [],
      requiredItem:'',
      selectedCategory:'Filtrer par catégorie'
    };
        
    } 
    
    setRequiredItem(category){
      this.setState({requiredItem : category})
      this.setState({selectedCategory : category})
    }
    
    render() {
        return (
          <div >
          <nav className="navbar navbar-expand-lg navbar navbar-dark navColor navbar fixed-top">
            <img className="logo" src ="/matious.png" alt=""/>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <ul className="navbar-nav mr-auto">
      
      <DropdownButton id="dropdown-basic-button" variant="warning" style={{color: "white"}} title={this.state.selectedCategory}>
        <Dropdown.Item  onClick={() => {
                this.setRequiredItem("Embedded Flash Storage")}}>Embedded Flash Storage</Dropdown.Item>
        <Dropdown.Item  onClick={() => {
                this.setRequiredItem("GPU & Edge AI")}}>GPU & Edge AI</Dropdown.Item>
      </DropdownButton>
    </ul>
    </form>
  </div>
</nav>
<div>
<List category={this.state.requiredItem}></List>
</div>
</div>
            
          );
        
    }
}
export default Navbar;


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
function ProfilComponent(props) {
  return (
    <div style={{backgroundColor:"blue",textAlign:"center"}}>
      <h1 style={{backgroundColor:"green",color:"#FFF",width:500}}>{props.fullName}</h1>
      <h2 style={{backgroundColor:"red",color:"#FFF", width:500}}>{props.profession}</h2>
      <p style={{backgroundColor:"yellowgreen",color:"#fff",width:500}}>{props.bio}</p>
      <img src={props.myimage} alt='iphone13' style={{width:500,border:'2px white solid'}}/>
      <p><Button variant="light" onClick={props.handleName} style={{border:'2px #1B1A17 solid'}}>Alert </Button></p>
    </div>
  )
}
  ProfilComponent.defaultProps={fullName:"Abdoulaye Diallo", bio:"Etudiant Full Stack Gomycode",
  profession:'Developpeur WEB'}

  ProfilComponent.propTypes={
    stringProp: PropTypes.string
    }

export default ProfilComponent;
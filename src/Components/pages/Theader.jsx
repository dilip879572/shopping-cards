import React,{Component} from "react";
import '../styles/Theader.css';

export default class Theader extends Component{
  render = () =>{
      return(
        <React.Fragment>
          <div className="container-fluid">
            <div className="row theader text-bg-dark">
                <div className="col-sm-4">+91 8795720084| +91 6307661853</div>
                <div className="col-sm-4">dilip.879572@gmail.com</div>
                <div className="col-sm-4">DILIP KUMAR</div>
            </div>
          </div>
        </React.Fragment>
      )
  }
}
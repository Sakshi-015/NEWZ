import React, { Component } from 'react';
import {getNews} from '../actions/DataCall.js';
import './NewzCard.css';


class NewzCard extends Component {

  constructor(props){
    super(props);

    this.state = {
        data:[],
        urlLink: this.props.url,
    };
  
  }
  
          componentDidMount(){
            getNews(this.state.urlLink).then((res)=>{
              console.log(res);
              this.setState({
                data:res.data.articles
              });
            })
          }
  render() {
 
    //     return null;
       const {data} = this.state;
        
    
    return (
      <div>
        <div className="container colo">
        <div className="row">

          {
              data && data.length>0 && data.map((obj,index)=>(
                 <>
                 <div className="col-sm-6 mt-5">
          <div className="card">
            <img className="card-img-top" src={obj.urlToImage} alt="Card image"/>
            <div className="card-body">
              <h5 className="card-title">{obj.title}</h5>
              <p className="card-text">{obj.description}</p>
                <a href={obj.url} target="_blank" className="btn btn-dark">Read More...</a>  
            </div>
          </div>
        </div>
                </>
              ))
          }
       


      </div>
      </div>
      </div>

    );
  }
}

export default NewzCard;
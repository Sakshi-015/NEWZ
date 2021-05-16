import React from 'react';
import './NewzNav.css';
import NewzCard from './NewzCard';


class NewzNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { showNav: true, link: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=adcfbd941d7d4877af76660311716563"};
        this.toggleNav = this.toggleNav.bind(this);
       this.indiaNews = this.indiaNews.bind(this);
    }
    
    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    
    indiaNews(){
        this.setState({ 
            link: "https://newsapi.org/v2/top-headlines?country=in&apiKey=4d9e2198e3cf43cabf347c77f09b8d34"
        })
    }



    render() {
        const { showNav } = this.state   
    return (
        <div>
        <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-sm-between position-fixed zNav">
    <table className="zNav">
        <tr>
            <td align="center" className="navTD">
                <div><img src="https://i.ibb.co/G3ByJZx/Logos.png" height="120"></img></div>
            </td>
            <td><button className="navbar-toggler" type="button" onClick={this.toggleNav}><span className="navbar-toggler-icon"></span></button></td>
        </tr>
        <tr> 
            <td className="navTD" >  
                <div className= {(showNav ? 'show' : '') + 'collapse navbar-collapse justify-content-sm-center'} id="navbarCollapse">
                <ul className="nav navUL">
                    <li className="nav-item navLi" align="center" ><a className="nav-link" onClick={this.indiaNews} >India News</a></li>
                    <li className="nav-item navLi" align="center" ><a className="nav-link"  >Global News</a></li>
                    <li className="nav-item navLi" align="center" ><a className="nav-link"  >Sports News</a></li>
                    <li className="nav-item navLi" align="center" ><a className="nav-link"  >Finance News</a></li>
                </ul> 
            </div>
        </td>
        </tr>
    </table>    
</nav>
    </div>
    <div>
    <div className="sizedBox"></div>
      <NewzCard url={this.state.link}></NewzCard>
    </div>
    </div>
    );
}  
}
export default NewzNav;
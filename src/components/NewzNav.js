import React from 'react';
import './NewzNav.css';
import NewzCard from './NewzCard';
import logo from './whiteglobe.gif';


class NewzNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { showNav: true, inAct: "d-block", techAct: "d-none",gloAct: "d-none",finAct: "d-none",inActive: "text-primary" ,gloActive:"text-muted",techActive:"text-muted" ,finActive:"text-muted" };
        this.toggleNav = this.toggleNav.bind(this);
       this.indiaNews = this.indiaNews.bind(this);
       this.globalNews = this.globalNews.bind(this);
       this.financeNews = this.financeNews.bind(this);
       this.techNews = this.techNews.bind(this);
    }

    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    
    indiaNews(){
        this.setState({ 
            inAct : "d-block",
            techAct: "d-none",
            gloAct: "d-none",
            finAct: "d-none",
            inActive : "text-primary",
            gloActive:"text-muted",
           techActive:"text-muted",
            finActive:"text-muted",

        })
    }
    techNews(){
        this.setState({ 
            inAct : "d-none",
            techAct: "d-block",
            gloAct: "d-none",
            finAct: "d-none",
            inActive:"text-muted",
            gloActive:"text-muted",
           techActive: "text-primary",
            finActive:"text-muted",
        })
    }
    globalNews(){
        this.setState({ 
            inAct : "d-none",
            techAct: "d-none",
            gloAct: "d-block",
            finAct: "d-none",
            inActive:"text-muted",
            gloActive: "text-primary",
           techActive:"text-muted",
            finActive:"text-muted",
        })
    }
    financeNews(){
        this.setState({ 
            inAct : "d-none",
            techAct: "d-none",
            gloAct: "d-none",
            finAct: "d-block",
            inActive:"text-muted",
            gloActive:"text-muted",
           techActive:"text-muted",
            finActive: "text-primary",
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
            <div><img src={logo}  height = "140em" ></img></div>
            </td>
            <td><button className="navbar-toggler" type="button" onClick={this.toggleNav}><span className="navbar-toggler-icon"></span></button></td>
        </tr>
        <tr> 
            <td className="navTD" colSpan={2}>  
                <div className= {(showNav ? 'show' : '') + 'collapse navbar-collapse justify-content-sm-center'} id="navbarCollapse">
                <ul className="nav navUL">
                    <li className="nav-item navLi" align="center" ><a className={"nav-link "+  this.state.inActive} onClick={this.indiaNews} >India News</a></li>
                    <li className="nav-item navLi" align="center" ><a className={"nav-link "+  this.state.gloActive}  onClick={this.globalNews}>Global News</a></li>
                    <li className="nav-item navLi" align="center" ><a className={"nav-link "+  this.state.techActive} onClick={this.techNews} >Tech News</a></li>
                    <li className="nav-item navLi" align="center" ><a className={"nav-link "+  this.state.finActive}  onClick={this.financeNews}>Business News</a></li>
                </ul> 
            </div>
        </td>
        </tr>
        <tr><td colSpan={2}><div class="grad-bar"></div></td></tr>
        
    </table>    
   
</nav>

    </div>
    <div>
    <div className="sizedBox"></div>
      <div className={this.state.techAct}><NewzCard url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=adcfbd941d7d4877af76660311716563"></NewzCard></div>
      <div className={this.state.inAct}><NewzCard url="https://newsapi.org/v2/top-headlines?country=in&apiKey=4d9e2198e3cf43cabf347c77f09b8d34"></NewzCard></div>
      <div className={this.state.gloAct}><NewzCard url="https://newsapi.org/v2/top-headlines?language=en&apiKey=4d9e2198e3cf43cabf347c77f09b8d34"></NewzCard></div>
      <div className={this.state.finAct}><NewzCard url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4d9e2198e3cf43cabf347c77f09b8d34"></NewzCard></div>
    </div>
    </div>
    );
}  
}
export default NewzNav;
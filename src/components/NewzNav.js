import React from 'react';
import './NewzNav.css';
import NewzCard from './NewzCard';
import logo from './whiteglobe.gif';
import $ from "jquery";
class NewzNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            showNav: true, 
            inAct: "d-block",
             techAct: "d-none",
             gloAct: "d-none",
             finAct: "d-none",
             inActive: "text-primary" ,
             gloActive:"text-muted",
             techActive:"text-muted" ,
             finActive:"text-muted" ,
             scrollTop:0,
        
        };
        this.toggleNav = this.toggleNav.bind(this);
       this.indiaNews = this.indiaNews.bind(this);
       this.globalNews = this.globalNews.bind(this);
       this.financeNews = this.financeNews.bind(this);
       this.techNews = this.techNews.bind(this);
       this.handleScroll = this.handleScroll.bind(this);
    }

    
    handleScroll(event){
        var scrollTop = $(window).scrollTop();
console.log(scrollTop,"scrollTop");
   
        this.setState({
            scrollTop: scrollTop
        });
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    
     
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
        const { showNav,scrollTop } = this.state   
    return (
        <div>
        <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-sm-between position-fixed zNav">
    <table className="zNav">
        <tr>
            {
                <>
                 <td style = {{width: "10%"}}className="navTD">
                <div><img src={logo} height = "140em" ></img></div>
                </td>
                <td  align="center"style = {{width: "60%",}} className="navTD">
                <div><p className="tagLine">READ THE WORLD TODAY !</p></div>
                </td>
                </>
            }
          
            <td><button className="navbar-toggler" type="button" onClick={this.toggleNav}><span className="navbar-toggler-icon"></span></button></td>
        </tr>
        <tr> 
            <td className="navTD" colSpan={3}>  
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
        <tr><td colSpan={3}><div class="grad-bar"></div></td></tr>
        
    </table>    
   
</nav>

    </div>
    <div>
    <div className="sizedBox"></div>
      <div data-aos="fade-up" data-aos-delay="750" className={this.state.techAct}><NewzCard url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5dcfad53dc434ce0b65aa28c4951f114"></NewzCard></div>
      <div  data-aos="fade-up" data-aos-delay="750" className={this.state.inAct}><NewzCard url="https://newsapi.org/v2/top-headlines?country=in&apiKey=5dcfad53dc434ce0b65aa28c4951f114"></NewzCard></div>
      <div  data-aos="fade-up" data-aos-delay="750" className={this.state.gloAct}><NewzCard url="https://newsapi.org/v2/top-headlines?language=en&apiKey=5dcfad53dc434ce0b65aa28c4951f114"></NewzCard></div>
      <div data-aos="fade-up" data-aos-delay="750"  className={this.state.finAct}><NewzCard url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5dcfad53dc434ce0b65aa28c4951f114"></NewzCard></div>
    </div>
    </div>
    );
}  
}
export default NewzNav;
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './Layout.js'
import GridItem from '../components/Grid/GridItem.jsx'
import Card from '../components/Card/Card.jsx'
import CardHeader from '../components/Card/CardHeader.jsx'
import CardBody from '../components/Card/CardBody.jsx'
import GridContainer from '../components/Grid/GridContainer.jsx'
import dashboardStyle from "../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import loader from "../assets/img/loader.gif";
import 'isomorphic-fetch'

class Stories extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comics: [],
            links: [{link: '/', name: 'Characters'},{link: '/comics', name: 'Comics'},{link: '/events', name: 'Events'},{link: '/stories', name: 'Stories'}],
            load: false,
        }
    }

  

    componentDidMount(){
        let parent = this;
        fetch('http://gateway.marvel.com/v1/public/stories?ts=1995&apikey=304bf468bf68eb9e3b86094a7c7ecc17&hash=0af9fadbe28e6ebd60335f47eddaf60a')

        .then(
            function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            response.json().then(function(data) {
                let content = data.data.results;
                parent.setState({
                    comics: content,
                    load: true,
                })
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
        
    }

    render(){
        const {classes} = this.props;
       let card = this.state.comics.map((item, i) => (
        item.thumbnail.path+"."+item.thumbnail.extension != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"?
                <GridItem md={4} key={item+i}>
                <Card key={item}>
                <CardHeader>
                    <img src={item.thumbnail.path+"."+item.thumbnail.extension} width="100%" height="200px"/>
                </CardHeader>
                <CardBody style={{fontSize: '14px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', textAlign: 'center'}} key={i}>
                    
                    <p data-toggle="collapse" data-target={"#collapseExample"+i} aria-expanded="false" aria-controls={"collapseExample"+i} style={{cursor: 'pointer'}}>{item.title}</p>
                   
                    <div className="collapse" id={"collapseExample"+i} style={{fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: 'normal'}}>
                            {item.description == "" ? "Not description!" : item.description}
                    </div>
                </CardBody>
                </Card>
            </GridItem> : null
       ));
        return (

            <div>
            <Header links={this.state.links}/>
            {this.state.load ? 
            <div className="container">
            <GridContainer><div style={{textAlign: 'center', fontFamily: 'Roboto sans,serif', fontSize: '40px',  width: '100%'}}>Marvel Comics</div></GridContainer>
            <GridContainer style={{backgroundColor: '#e0dede', marginBottom: '30px', boxShadow: 'rgba(248, 249, 249, 0.15) 0px 4px 20px 0px, rgba(224, 222, 226, 10) 0px 7px 10px -5px'}}>
                {card}
            </GridContainer>
            <footer className="footer text-muted fixed text-center " style={{fontStyle: 'italic', padding: '10px'}}>@Marvel-comics 2019</footer>
            </div>:
            <div style={{
                top: '0',
                left: '0', 
                left: '0', 
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(224, 222, 222,.5)',
                opacity: '0.9',
                zIndex: '100',
                position: 'fixed',
                display: 'flex',
                alignItems:  'center',
                justifyContent: 'center'
                }}>
                <div >
                    <img src={loader}/>
                    <div style={{textAlign: 'center'}}>Loadig...</div>
                </div>
            </div>
            }
            </div>
        )
    }
}

export default withStyles(dashboardStyle)(Stories);
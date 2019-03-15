import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.js';
import GridItem from '../../components/Grid/GridItem.jsx'
import Card from '../../components/Card/Card.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import CustomInput from '../../components/CustomInput/CustomInput.jsx'
import withStyles from "@material-ui/core/styles/withStyles";
import "../../assets/css/login.css"
class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			emailError: "",
			email: "", 
		}
	}

	verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }

  change(event, type, stateNameEqualTo, maxValue) {
    if (String(type)==="email"){
      this.setState({
          email: event.target.value
        });
        if (this.verifyEmail(event.target.value)) {
          this.setState({ emailError: "success" });
        } else {
          this.setState({ emailError: "error" });
        }
    }
  }

	render(){
		return(
			<div className="container">
				<GridContainer className="containerCentral">
					<GridItem md={4} sm={6} xs={12} style={{justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%'}}>
						<div>
							<CardHeader style={{textAlign:  'center', backgroundColor: '#ccc', borderRadius: '3px'}}>
								<h1 className="log">Log<small className="in">In</small></h1>
							</CardHeader>

							<CustomInput
			                    labelText="Email"
			                    id="email"
			                    formControlProps={{
			                      fullWidth: true
			                    }}
			                    inputProps={{
			                      type: "email",
			                      className:this.state.emailError,
			                      onChange: evt => this.change(evt,"email")
			                    }}
			                  />
							<CustomInput
			                    labelText="Password"
			                    id="name"
			                    formControlProps={{
			                      fullWidth: true
			                    }}
			                    inputProps={{
			                      type: "password",
			                      className:""
			                    }}
			                  />

			                  
						</div>
						<Card>
						<button className="btn btn-success">Login</button>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(dashboardStyle)(Login);
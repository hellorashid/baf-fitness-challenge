import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Input from '@material-ui/core/Input';

// import Danger from "components/Typography/Danger.jsx";
// import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import fire from '../../fire'
import indexRoutes from '../../routes/index'




const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
  }
};

// function LoginPage(props) {
class LoginPage extends React.Component { 
    constructor(props) {
        super(props);

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

        this.state = { email: 'email', password: '' };
      }

    handleSignUp = async event => {
        // event.preventDefault();
        // const { email, password } = event.target.elements;
        try {
            const user = await fire
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password);
            this.props.history.push("/dashboard");
        } catch (error) {
            alert(error);
        }
    };

    handleEmail(event) {
        this.setState({email: event.target.value});
      }

    handlePassword(event) { 
        this.setState({password: event.target.value})
    }

    render () {
    const { classes } = this.props;
    return (
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
            <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>
                Login
                </h4>
            </CardHeader>
            <CardBody>
            <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                            fullWidth: true,
                            value: this.state.value, 
                            onChange:this.handleEmail
                        }}
                    />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                            fullWidth: true, 
                            value: this.state.value, 
                            onChange:this.handlePassword, 
                        }}
                        inputProps={{
                            type: "password"
                        }}                      
                    />
                    </GridItem>
                </GridContainer>
            </CardBody>
            <CardFooter>
                <Button color="primary"
                onClick={ this.handleSignUp}
                >Login</Button>
                </CardFooter>
            </Card>
        </GridItem>
        </GridContainer>
    );
    }
} 

export default withStyles(styles)(LoginPage);

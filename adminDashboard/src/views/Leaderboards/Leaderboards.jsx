import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx"; 
import fire from '../../fire.js'; 



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
  }
};
// function TableList(props) {

let allEvents = [ 
  "Fitness Test", 
  "Free Throw"
]

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      allUsers: {}, 
      burpeesFemale: [], 
      burpeesMale: [], 
      test : 'hi'
     }; // <- set up react state
  }

  
  componentWillMount(){
      
    let leaderRef = fire.database().ref('leaderboard/burpees/female'); 
    leaderRef.orderByValue().on('value', snapshot => { 
    
        let topFemales = Object.entries(snapshot.val()) // Convert to array 

        let burpeesFemale = topFemales.map( user => { 
          
          let currentRef = fire.database().ref('users/' + user[0])
          let userInfo = {}
          
          currentRef.once('value', snapshot => { 
            userInfo.first_name = snapshot.val().first_name
            userInfo.last_name = snapshot.val().last_name
            userInfo.overall = snapshot.val().overall
            
            // console.log('maybe', snapshot.val().first_name)
          })
        
          return [user[0] , user[1], userInfo]
        })
        
        console.log('burpees: ', burpeesFemale)
        this.setState({burpeesFemale: burpeesFemale})
    })
  }

  render () { 
  const { classes } = this.props;
  const {burpeesFemale, test} = this.state;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Burpees</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Bike</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

            <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Fitness Test</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

            <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Free Throw</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

            <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Plank</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

            <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Push Ups</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

            <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Rope Pull</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

            <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Rowing</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

            <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Shuttle Run</h4>
            {/* <p className={classes.cardCategoryWhite}> subtitle </p> */}
          </CardHeader>
          <CardBody>
            <h4> Female </h4>
            <Table
              tableHeaderColor="primary" 
              tableHead={["First Name", "Last Name", "Score", "Overall"]} 
              tableData={ 
                [
                  ["Amanda", 'Benoitt', '11', '56'], 
                  ["Helen", 'Velez', '7', '87'], 
                  ["Maria", 'Mercado', '6', '79'], 

                ] 
            }
            />
          </CardBody>
        </Card>
      </GridItem>

      
   
    </GridContainer>
  );
    }
}

export default withStyles(styles)(TableList);

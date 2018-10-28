import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general";
import fire from '../../fire.js'; 

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0, 
    leadersMale: [], 
    leadersFemale: [],
    male1 : [], 
    male2 : [],
    male3 : [],
    female1 : [], 
    female2 : [],
    female3 : [],

  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('users/');
    messagesRef.on('value', snapshot => {
      /* Update React state when message is added at Firebase Database */
      console.log(snapshot.val())
      let allUsers = Object.values(snapshot.val())
      
      let allMales = allUsers.filter( user => user.gender === 0)
      let allFemales = allUsers.filter( user => user.gender === 1)

      console.log("Males" , allMales)
      console.log("Females" , allFemales)

      allMales.sort(function (a, b) {
        return b.overall - a.overall;
      });

      allFemales.sort(function (a, b) {
        return b.overall - a.overall;
      });

      this.setState({leadersMale: allMales})
      this.setState({leadersFemale: allFemales})

   
      
      // this.state.leadersMale[0].first_name, 
      
      let male_one = [ 
        '1', 
        allMales[0].first_name, 
        allMales[0].last_name,
        allMales[0].overall.toString()
      ] 
      let male_two = [ 
        '1', 
        allMales[1].first_name, 
        allMales[1].last_name,
        allMales[1].overall.toString()
      ] 
      let male_three = [ 
        '1', 
        allMales[2].first_name, 
        allMales[2].last_name,
        allMales[2].overall.toString()
      ] 
  
  
      this.setState({male1: male_one})
      this.setState({male2: male_two})
      this.setState({male3: male_three})
  
      //Females
      let female_one = [ 
        '1', 
        allFemales[0].first_name, 
        allFemales[0].last_name,
        allFemales[0].overall.toString()
      ] 
      let female_two = [ 
        '2', 
        allFemales[1].first_name, 
        allFemales[1].last_name,
        allFemales[1].overall.toString()
      ] 
      let female_three = [ 
        '3', 
        allFemales[2].first_name, 
        allFemales[2].last_name,
        allFemales[2].overall.toString()
      ] 
  
  
      this.setState({female1: female_one})
      this.setState({female2: female_two})
      this.setState({female3: female_three})
      
      console.log("😎", this.state.male1)

    })
  }

  componentDidMount () { 
    
    // let firstNames = allUsers.map(function (user) {
    //   let user_gender = 'Male'
    //   if (user.gender == 1) { 
    //     user_gender = 'Female'
    //   }
      
    //   let userInfo = [ 
    //     user.first_name, 
    //     user.last_name, 
    //     user.overall,
    //     user_gender,
    //   ]
    //   return userInfo
    // });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Fixed Issues</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Followers</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer> */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Attempts</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in attempts.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Total Users</h4>
                <p className={classes.cardCategory}>
                  Active users per day
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> last active users 22 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Attempts</h4>
                <p className={classes.cardCategory}>
                  Active Attempts Times
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> last attempt 13 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {/* <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Leaderboards:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Overall",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem> */}
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Leaderboards</h4>
                <p className={classes.cardCategoryWhite}>
                  Female
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Rank", "Name", "email", "score"]}
                  tableData={
                    [
                      this.state.female1,
                      this.state.female2,
                      this.state.female3,
                    ]
                }
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Male Leaderboards</h4>
                <p className={classes.cardCategoryWhite}>
                  Overall
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Rank", "Name", "email", "score"]}
                  tableData={ 
                    [
                      this.state.male1,
                      this.state.male2,
                      this.state.male3,
                    ]
                  }
                  // ['1', this.state.leadersMale[0].name, 'email', this.state.leadersMale[0].overall]
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

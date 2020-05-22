import React, { Component } from "react";
import { Tabs,Tab,Grid,Cell,Card,CardTitle, CardActions,Button,CardMenu, IconButton, CardText } from "react-mdl";
import { Link,NavLink } from "react-router-dom";


class Project extends Component{
    constructor(props) {
        super(props);
        this.state={activeTab:0}
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div> <h1>This is Project 1</h1>
                    {/*Project 1*/}
                <Card shadow={5} style={{ minWidth: "900px", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "600px",width:"900px", background:"url(https://media.tenor.com/images/f64b1294b92821b912ab6efdcee88fd2/tenor.gif) center/cover" }}>Project 1</CardTitle>
                    <CardText>
                        My group was inspired to collect information on the ISS (Space Station). We forged ahead with an API daily picture from NASA and imported information of asteroids and their proximity for collision with Earth
                        </CardText>
                        <CardActions border>
                            
                            <a href="https://rafaelestradajr.github.io/my-nasa-app/"colored>Live Demo </a>
                        </CardActions>
                                <CardMenu style={{ color: "#fff" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                    
                </Card>


       </div>         
                
                
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Project 2</h1>
                
                  {/*Project 2*/}
                  <Card shadow={5} style={{ minWidth: "900px", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "500px",width:"900px", background:"url(https://media.tenor.com/images/3d8acfe003b3f5fac41c25dd6bf00db6/tenor.gif) center/cover" }}>Project 2</CardTitle>
                    <CardText>
                    As a bored person at home during this quarantine with nothing to
do but listen to our kids scream and ask for their 32nd snack of
the afternoon praying for nap time to come. I need something to
 do. I need to let my frustrations out I need to blow shit up.

I give you Ships. The free to play game that kills useless
time in the day that is simple user friendly and just
plan fun. Fly around our world for an hour, 10 mins or your
kids entire nap. It doesn't matter.
                        </CardText>
                        <CardActions border>
                            
                             <a href="https://rafaelestradajr.github.io/Group-Project-2/"colored>Live Demo</a>
                        </CardActions>
                                <CardMenu style={{ color: "#fff" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                    
                </Card>

                
                </div>


                
            )
            
        } else if (this.state.activeTab === 2) {
            return (
                <div> <h1> Day Planner</h1>
                 {/*Day Planner*/}
                 <Card shadow={5} style={{ minWidth: "900px", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "500px",width:"900px", background:"url(https://media.tenor.com/images/9b9e18875e3c3219cb5295c7a7b02a4c/tenor.gif) center/cover" }}>Day Planner</CardTitle>
                    <CardText>
                    Computer program with sections for each day and the different times of the day, that helps you to organize everything you have to do.
                        </CardText>
                        <CardActions border>
                            
                        <Link to="/"colored>Live Demo</Link>
                        </CardActions>
                                <CardMenu style={{ color: "#fff" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                    
                </Card>

                
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>Password Generator</h1>
                {/*Random Number Generator*/}
                <Card shadow={5} style={{ minWidth: "900px", margin: "auto" }}>
                    <CardTitle style={{ color: "black", height: "500px",width:"900px", background:"url(https://media.tenor.com/images/316f122d6314e85568749c9e189b5066/tenor.gif) center/cover" }}>Password Generator</CardTitle>
                    <CardText>
                    A random number generator (RNG) is a device that generates a sequence of numbers or symbols that cannot be reasonably predicted better than by a random chance. Random number generators can be true hardware random-number generators (HRNG), which generate genuinely random numbers, or pseudo-random number generators (PRNG), which generate numbers that look random, but are actually deterministic, and can be reproduced if the state of the PRNG is known.
                        </CardText>
                        <CardActions border>
                            
                            <Button colored>Live Demo</Button>
                        </CardActions>
                                <CardMenu style={{ color: "#fff" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                    
                </Card>
                
                </div>
            )
        }
        
    }


    render() {
        return (
            <div className="category-tabs">

                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Day Planner</Tab>
                    <Tab>Password Generator</Tab>

                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}></div>

                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }

}
export default Project;
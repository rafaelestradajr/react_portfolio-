import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Rafael Estrada</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }} >My job in the Federal Government offered me the opportunity to exercise my capability to learn and execute new learned abilities. I am eager and excited to cross over to a new career path that offers the environment to nurture and develop my capacity to succeed in my new endeavor. I provide analysis and problem resolution support to all divisions. I provide system implementation and improvements support for existing applications. Develop and lead system implementation activity in new system applications. Provide, document, and maintain web applications for data collections and presentation in support of corporate information initiatives. 1) Front-end technology experience in essential front-end technologies like HTML5, CSS3, JavaScript. Knowledge of third-party libraries like jQuery, and React JS,Bootstrap 2) Development Languages JavaScript HTML (Structure) CSS (Designing) AJAX jQuery etc.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        (916-208-2047)
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        rafaelestrada@comcast.net
                                    </ListItemContent>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        https://www.linkedin.com/in/rafael-estrada-b005b3193
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                        https://github.com/rafaelestradajr
                                    </ListItemContent>
                                </ListItem>

                            </List>



                        </div>


                    </Cell>
                </Grid>

            </div>
        )
    }

}
export default Contact;
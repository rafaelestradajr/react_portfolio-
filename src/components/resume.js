import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{ height: "200px" }}
                            />

                        </div>
                        <h2 style={{ paddingTop: "2em" }}>Rafael Estrada</h2>
                        <h4 style={{ color: "dark-grey" }}>Full Stack Developer</h4>
                        <hr style={{
                            borderTop: "3px solid #833fb2", width: "50%"
                        }} />
                        <p style={{ width: "100", margin: "auto", paddingTop: "1em",fontSize:"20px" }}>Developed full-stack web applications which processed, analyzed, and rendered data visually.
Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.
Managed time-sensitive updates, including content changes and database upgrades.
Planned, wrote, and debugged web applications and software with complete accuracy. Maximized applications’ efficiency, data quality, scope, operability, and flexibility. </p>
                        <hr style={{
                            borderTop: "3px solid #833fb2", width: "50%"
                        }} />
                        <h5>Address</h5>
                        <p>Hacker Way Menlo Park, Ca (Facebook Address)</p>
                        <h5>Phone</h5>
                        <p>916-208-2047</p>
                        <h5>Email</h5>
                        <p>rafaelestrada@comcast.net</p>
                        <h5>Web</h5>
                        <p>https://rafaelestradajr.github.io</p>
                        <hr />


                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName={"UC Davis Professional Studies"}
                            schoolDescription={"Learned HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, and Git. "}
                        />

                        <Education
                            startYear={1982}
                            endYear={1984}
                            schoolName={"De Anza College"}
                            schoolDescription={"Studied Fortran, Cobol,Basic,Pascal "}
                        />
                        <Education
                            startYear={1985}
                            endYear={1987}
                            schoolName={"American River College"}
                            schoolDescription={"Studied RPG, this programming language is used for business applications. It is available with the IBM’s System I midrange computers. "}
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={1983}
                            endYear={2019}
                            jobName="US Postal Service"
                            jobDescription="Performed route evaluations, time studies, and various duties using handheld tech which synced to local data base
                            Achieved 10 percent or more of increased efficiency at district level. Supervised employees work, maintained Agency records and took action in the form of using technology to support our labor force."
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={75}

                        />
                        <Skills
                            skill="React"
                            progress={60}

                        />
                        <Skills
                            skill="MongoDB"
                            progress={55}

                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={85}

                        />
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default Resume;
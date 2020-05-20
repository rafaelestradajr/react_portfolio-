import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Aboutme extends Component{
    render() {
        return (
            <div className="aboutme-body">
                <Grid className="aboutme-grid">
                    <Cell col={6}>
                        <h2>Rafael Estrada</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                    </Cell>
                    <Cell col={6}>
                        
                        <h1>Job Seeker</h1>
                        <p style={{ width: "100", margin: "auto", paddingTop: "1em", fontSize: "20px" }}>I am fluent in Spanish and work well with people.  My time at UC Davis school has empowered me to seek job opportunities as a Full Stack Developer.<br /><p style={{ width: "100", margin: "auto", paddingTop: "1em", fontSize: "20px" }}> I completed boot camp at UC Davis and hope to work with companies of all sizes from all around the globe as a freelancer.</p><br /> Currently, i would enjoy working on JavaScript projects, where the experience and a deep understanding of architecture and theory are most impactful.</p><br />
                        <p style={{ width: "100", margin: "auto", paddingTop: "1em", fontSize: "20px" }}> I have created projects using Websockets, React, MongoDb,and Express.</p>
                        
                        </Cell>
</Grid>
         </div>
        )
    }

}
export default Aboutme;
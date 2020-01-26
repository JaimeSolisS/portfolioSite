import React, {Component} from 'react'; 
import {Grid, Cell} from 'react-mdl'
	

class Landing extends Component {
    render(){
        return(
            <div>
                <div style={{widht: '100%', margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img
                            src = "https://avatars0.githubusercontent.com/u/26722249?s=460&v=4"
                            alt = "avatar"
                            className = "avatar-img"
                            />
                            <div className="banner-text">
                                <h1>Full Stack Web Developer</h1>
                                <hr/>
                                <p>HTMl/CSS | JavaScript | React | React Native | NodeJS | MongoDB</p>

                                <div className="social-links">

                                    {/* LinkedIn*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>

                                     {/* Github*/}
                                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                    </a>

                                     {/* LinkedIn*/}
                                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>

                                </div>
                            </div>

                        </Cell>
                    </Grid>

                </div>
            </div>
        )
    }
}

export default Landing;
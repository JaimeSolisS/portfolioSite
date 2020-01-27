import React, {Component} from 'react'; 
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){ 
        if (this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                     {/*Project 1 */}
                     <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                     </CardText>
                    <CardActions border>
                      <Button colored href="https://www.google.com/" target="_blank">GitHub</Button>
                      <Button colored href="https://www.google.com/" target="_blank">nbViewer</Button>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>
                     </Card>

                       {/*Project 2 */}
                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                     </CardText>
                    <CardActions border>
                      <Button colored href="https://www.google.com/" target="_blank">GitHub</Button>
                      <Button colored href="https://www.google.com/" target="_blank">nbViewer</Button>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>
                     </Card>
                </div>

                

                
                
            )
        } else if (this.state.activeTab === 1){
            return(
            <div><h1>This is Python</h1></div>
            )
        } else if (this.state.activeTab === 2){
            return(
            <div><h1>This is Swift</h1></div>
            )
        } else if (this.state.activeTab === 3){
            return(
            <div><h1>This is Tableau</h1></div>
            )
        } 
    }

    
    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Jupyter Notebook</Tab>
                <Tab>Python</Tab>
                <Tab>Swift</Tab>
                <Tab>Tableau</Tab>
            </Tabs>
            
            
                <Grid>
                    <Cell col={12}>
                        <div className="content"> {this.toggleCategories()}</div>
                    </Cell>


                </Grid>
               
         
            </div>
        )
    }
}

export default Projects;
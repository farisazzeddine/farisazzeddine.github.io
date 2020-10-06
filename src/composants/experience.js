import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render(){
        return(
          <Grid>
             <Cell col={3}>
                  <p>{this.props.startYear} - {this.props.endYear}</p>
             </Cell>
             <Cell col={9}>
                  <h4 style={{marginTop:'0px'}}>{this.props.jobName} || <em><strong>{this.props.jobDescriptionn}</strong></em></h4>
                  
                  <p><br/>{this.props.jobDescription}<br/>{this.props.jjobDescription}<br/>{this.props.jjjobDescription}</p>
             </Cell>
          </Grid>  
        )
    }
}
export default Experience;
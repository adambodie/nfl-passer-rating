import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

export default class RatingButton extends Component {
    constructor(props) {
        super(props)
        this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
    }
    handleButtonSubmit(e) {
        this.props.handleSubmit(e.target.value)
    }
  render() {
      const { textColors, secondaryColors } = this.props;
      const styles = {
        color: textColors, 
        backgroundColor: secondaryColors,
        width: '219px',
        height: '56px'
    }
      return (
            <Grid item lg={4}>
                <Button 
                    size="large" 
                    onClick={this.handleButtonSubmit} 
                    variant="contained"
                    style={styles}
                    endIcon={<Icon>send</Icon>}
                    >
                        Submit
                </Button>
            </Grid>
      );
  }
}

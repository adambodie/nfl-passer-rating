import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core/'
import Modal from './Modal'
import RatingButton from './Button'
import { eValue } from '../values'

const fields = [
    {'name': 'completions'},
    {'name': 'attempts'},
    {'name': 'yards'},
    {'name': 'touchdowns'},
    {'name': 'interceptions'}
]

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            completions: '',
            attempts: '',
            yards: '',
            touchdowns: '',
            interceptions: '',
            passerRating: '',
            open: false,
            setOpen: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
   handleClose() {
        this.setState({
            setOpen: false,
            open: false
        });
    }
    handleReset(event){
    console.log(event)
    this.setState({
        passerRating: '', 
        completions: '', 
        attempts: '', 
        yards: '', 
        touchdowns: '', 
        interceptions: '',
        setOpen: false,
        open: false,
        
    })
}
    handleSubmit() {
        const { completions, attempts, yards, touchdowns, interceptions } = this.state
        let pattern = /\D/
        let a = parseFloat(completions)
        let b = parseFloat(attempts)
        let c = parseFloat(yards)
        let d = parseFloat(touchdowns);
        let e = parseFloat(interceptions)
     
        let values = [a,b,c,d,e]
        let result = eValue(a, b, c, d, e)
    
        values.forEach(value => {
            if (pattern.test(value) == true) {
                result = "Please try again"
            }      
        });
        if ( a > b ) {
            result = "More completions than attempts not allowed.  Try again."
        }
        if ( d > b ) {
            result = "More touchdowns than attempts not allowed.  Try again."
        }
        if ( e > b ) {
            result = "More interceptions than attempts not allowed.  Try again."
        }
        this.setState({
            passerRating: result, 
            completions: '', 
            attempts: '', 
            yards: '', 
            touchdowns: '', 
            interceptions: '',
            setOpen: true,
            open: true,
            
        });
        
    }
  render() {
      const { passerRating, open } = this.state
      const { textColors, secondaryColors, primaryColors } = this.props
      return (
        <Grid container spacing={1}>
            {fields.map((x, index) => (
                <Grid item lg={4} key={index}>
                    <TextField id={x.name} name={x.name} label={x.name.toUpperCase()} onChange={this.handleChange} variant="filled" defaultValue='0'/>
                </Grid>
            ))}
            <RatingButton 
                handleSubmit={this.handleSubmit} 
                textColors={textColors} 
               secondaryColors={secondaryColors} 
            />
            <Button 
                    size="large" 
                    onClick={this.handleReset} 
                    variant="contained"
                    >
                        Submit
                </Button>
            <Modal 
                passerRating={passerRating} 
                open={open} 
                handleClose={this.handleClose} 
                textColors={textColors} 
                secondaryColors={secondaryColors} 
                primaryColors={primaryColors}
            />
        </Grid>
      );
  }
}

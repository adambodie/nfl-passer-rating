import React, { Component } from 'react'
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

export default class Modal extends Component {
    constructor(props){
		super(props)
		this.handleModalClose = this.handleModalClose.bind(this)
	}
    handleModalClose(e) {
        this.props.handleClose(e.target.value)
    }
  render() {
      const { passerRating, open, textColors, secondaryColors, primaryColors } = this.props
      const styles = {
          head: {
            color: textColors, 
            backgroundColor: secondaryColors,
            textShadow: '4px 4px 8px ' + primaryColors,
            fontSize: '3em!important',
            width: '600px'
          },
          body: {
              height: '300px',
              fontSize: '2em'
          }
}
      return (
            <Dialog
                open={open}
                onClose={this.handleModalClose}
                aria-labelledby="simple-dialog-title"
                aria-describedby="simple-dialog-description"
                    >
                <DialogTitle id="simple-dialog-title" style={styles.head}>Passer Rating</DialogTitle>
                <DialogContent id="simple-dialog-description" style={styles.body}>{passerRating}</DialogContent>
                    <DialogActions>
                    <IconButton edge="start" color="inherit" onClick={this.handleModalClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    </DialogActions>
                </Dialog>
      )
  }
}

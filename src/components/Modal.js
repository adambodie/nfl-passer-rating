import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
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
                <MuiDialogTitle id="simple-dialog-title" style={styles.head}>Passer Rating</MuiDialogTitle>
                <MuiDialogContent id="simple-dialog-description" style={styles.body}>{passerRating}</MuiDialogContent>
                    <MuiDialogActions>
                    <IconButton edge="start" color="inherit" onClick={this.handleModalClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    </MuiDialogActions>
                </Dialog>
      )
  }
}

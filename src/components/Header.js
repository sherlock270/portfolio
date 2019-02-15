import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  lightTooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  }
})

function Header(props) {
  const { classes } = props;
  return (
    <div className='header'>
      <h1>Charles Cortinas</h1>
      <div className='icons'>
        <Tooltip title="LinkedIn" classes={{ tooltip: classes.lightTooltip }}>
          <a target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/charles-cortinas">
            <i className="fab fa-linkedin"></i>
          </a>
        </Tooltip>
        <Tooltip title="Github" classes={{ tooltip: classes.lightTooltip }}>
          <a target="_blank" rel="noopener noreferrer" href="http://github.com/sherlock270">
            <i className="fab fa-github-square"></i>
          </a>
        </Tooltip>
        <Tooltip title="Email: crcortinas@gmail.com" classes={{ tooltip: classes.lightTooltip }}>
          <a target="_blank" rel="noopener noreferrer" href="mailto:crcortinas@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </Tooltip>
        <Tooltip title="Phone: (512)695-8139" classes={{ tooltip: classes.lightTooltip }}>
          <a target="_blank" rel="noopener noreferrer" href="tel:5126958139">
            <i className="fas fa-mobile-alt"></i>
          </a>
        </Tooltip>
        <Tooltip title="Resume" classes={{ tooltip: classes.lightTooltip }}>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1YARdWiLOZq0RQGvxi3bc4l4gkVmEHFfmMc_x0cBc1wc/edit?usp=sharing">
            <i className="fas fa-file-alt"></i>
          </a>
        </Tooltip>
      </div>
    </div>
  )
}

export default withStyles(styles)(Header);

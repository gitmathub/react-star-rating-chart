import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import StarIcon from 'material-ui-icons/Star'
// import PersonIcon from 'material-ui-icons/Person'
import lightGreen from 'material-ui/colors/lightGreen'
import lime from 'material-ui/colors/lime'
import red from 'material-ui/colors/red'
import orange from 'material-ui/colors/orange'
import amber from 'material-ui/colors/amber'
import grey from 'material-ui/colors/grey'

import RatingChart from './RatingChart'
import _ from 'lodash'

const styles = {
  root: {
    width: '100%',
  },
  card: {
    // maxWidth: 670,
    margin: '0 auto',
    marginTop: '10px',
  },
  bigBox: {
    display: 'block',
    height: '100px',
    width: '100%',
    // border: '1px green solid',
  },
  outerAverageBox: {
    display: 'float',
    float: 'left',
    width: '20%',
    // border: '1px orange solid',
  },
  averageBox: {
    diplay: 'float',
    float: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    paddingTop: '10px',
    // border: '1px red solid',
  },
  average: {
    fontSize: '44px',
    lineHeight: '44px',
    fontWeight: '100',
    color: grey[500],
  },
  chart: {
    float: 'right',
    width: '75%',
    // border: '1px blue solid',
  },
  greyStars: {
    width: '16px',
    color: grey[400]
  },
  yellowStars: {
    width: '16px',
    color: amber[400]
  },
  greyPerson: {
    width: '18px',
    color: grey[400],
  },
  raterCount: {
  }
}

export class RatingStat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ratings: [0, 0, 0, 0, 0],
      colors: [lightGreen[300], lime[400], amber[300], orange[300], red[200]],
      ratingAverage: 0.0,
      raterCount: 0
    }
  }

  componentDidMount(){
    this.setState({
      ratings: this.props.ratings,
      ratingAverage: this.props.ratingAverage,
      raterCount: this.props.raterCount
    })
  }

  render() {
    const classes = this.props.classes
    const ratings = this.state.ratings
    const colors = this.state.colors
    const ratingAverage = this.state.ratingAverage
    const raterCount = this.state.raterCount

    return (
      <div className={classes.root}>
        <div className={classes.card}>
          <div className={classes.bigBox}>
            <div className={classes.outerAverageBox}>
            <div className={classes.averageBox}>
              <Typography className={classes.average}>{ratingAverage}</Typography>
              {getStars(classes, Math.round(ratingAverage))}
              <Typography className={classes.raterCount}>{raterCount} total</Typography>
              {/* <PersonIcon className={classes.greyPerson}/> */}
            </div>
            </div>
              <div className={classes.chart}>
                <RatingChart
        					ratings={ ratings }
        					colors={ colors } />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

function getStars(classes, stars) {
  let i = 0
  let yellowStars = [...Array(stars)].map(()=>{
    return <StarIcon key={i++} className={classes.yellowStars} />
  })
  let ii = 5 - i
  let greyStars = [...Array(ii)].map(()=>{
    return <StarIcon key={i++} className={classes.greyStars} />
  })
  return _.concat(yellowStars, greyStars)
}

RatingStat.propTypes = {
  classes: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired,
}

export default withStyles(styles)(RatingStat)

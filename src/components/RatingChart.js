import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import StarIcon from 'material-ui-icons/Star'
import amber from 'material-ui/colors/amber'
import grey from 'material-ui/colors/grey'

import _ from 'lodash'

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  table: {
    width: '100%',
    tableLayout: 'fixed',
    padding: '1px',
  },
  td: {
    width: '40px',
    textAlign: 'right',
  },
  count: {
    color: '#000000',
    paddingLeft: '10px',
  },
  starIcon: {
    padding: '0%',
    height: '15px',
    color: grey[500],
  },
})

export class RatingChart extends React.Component {

	render() {
    const classes = this.props.classes
		const	ratings = this.props.ratings || []
    const colors = this.props.colors || []
		const max = _.max(ratings)

		return (
			<table className={classes.table}>
      <tbody>
				{ ratings.map((item, itemIndex) => {

  				let style = {
  					backgroundColor: colors[itemIndex] || '#f00',
            width: item / max * 100 + '%',
            height: 'auto',
  				}

          return (
            <tr key={itemIndex} ><td className={classes.td}>
              {5 - itemIndex} <StarIcon className={classes.starIcon} />
            </td><td>
            <div style={style}>
              <span className={classes.count}>{ item }</span>
            </div>
            </td></tr>
          )
				}) }
      </tbody>
      </table>
    )
  }
}

RatingChart.propTypes = {
  classes: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
}

export default withStyles(styles)(RatingChart)

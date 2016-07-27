import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { listenToFirebaseFor } from './reducer'

class FirebaseContainer extends Component {
  static propTypes = {
    dataType: PropTypes.string.isRequired,
  }

  componentDidMount () {
    const { dataType, dispatch } = this.props
    if (! (this.props[dataType] && this.props[dataType].hasReceivedData)) {
      // Since we don't have this data yet, get it!
      dispatch(listenToFirebaseFor(dataType))
    }
  }

  render () {
    const { loading, children } = this.props
    if (loading) {
      return <div>Loading...</div>
    } else {
      return children
    }
  }
}

function mapStateToProps(state, ownProps) {
  const { dataType } = ownProps
  return {
    [dataType]: state.data && state.data[dataType],
    loading: state.data.loading
  }
}

export default connect(mapStateToProps)(FirebaseContainer)

import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Main from './Main'
import LoadingBar from 'react-redux-loading'
import Login from './Login'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {

    const { isNotLogin, LoadingBar } = this.props
    const def = LoadingBar.default
    if (!def === undefined || def === 1)
      return <h1 className='loadingText'>loading... </h1>

    return (
      <div>
        <LoadingBar className='loading' />
        {isNotLogin 
          ? <Login /> 
          : <Main />
        }
        
      </div>
    )
  }
}
function mapStateToProps({authedUser}) {
  return {
    isNotLogin: authedUser === null,
    LoadingBar
  }
}

export default connect(mapStateToProps)(App)

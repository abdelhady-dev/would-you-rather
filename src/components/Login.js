import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
class Login extends React.Component {
    state = {
        authedId : ''
    }
    login(e) {
        e.preventDefault()

        const { authedId } = this.state
        const { dispatch } = this.props

        dispatch(setAuthedUser(authedId))
    }

    selectHandle(e) {
        e.preventDefault()

        this.setState(() => ({
           authedId: e.target.value
        }))
    }

    render() {

        const { usersArr } = this.props

        return (
            <div className='center'>
                <div className='center'>
                    <div className='center loginForm'>
                        <h2>WELCOME TO</h2>
                        <h1>Would You Rather?</h1>
                        
                        
                        <form onSubmit={e => this.login(e)}>
                            <div className='selectContainer'>
                                <select onChange={e => this.selectHandle(e)}>
                                    <option value="choose" defaultChecked>
                                        Choose one...
                                    </option>
                                    {usersArr.map((user) => (
                                        <option key={user.id} value={user.id}>{user.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button 
                                disabled={this.state.authedId === ''}
                                type='submit'
                                >Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
   const usersArr = Object.values(users)

   return {
       usersArr
   }
}

export default connect(mapStateToProps)(Login)
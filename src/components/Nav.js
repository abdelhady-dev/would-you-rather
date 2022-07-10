import React from 'react'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'


class Nav extends React.Component {
    logout(e) {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(removeAuthedUser())
    }

    render() {
        return (
            <div className="topnav">
                <div className='center'>
                    <ul>
                        <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>    
                        </li>
                        <li>
                            <NavLink to='/leaderboard' exact activeClassName='active'>
                                Leaders Board
                            </NavLink>    
                        </li>
                        <li>
                            <NavLink to='/add' exact activeClassName='active'>
                                New Poll
                            </NavLink>    
                        </li>
                        
                        <li className='right'>
                            <button
                                onClick={e => this.logout(e)}
                                >Log out</button></li>
                        <li className='right'><p>{this.props.userName}</p></li>
                        <li className='right'>
                            <img src={this.props.userAvatar} alt='avatar' />
                        </li>
                    </ul>       
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    const user = users[authedUser]

    return {
        userName : user ? user.name : 'user name',
        userAvatar : user ? user.avatarURL : '#'
    }
}

export default connect(mapStateToProps)(Nav)
import React from 'react'
import { connect } from 'react-redux'
import User from './User';
class LeaderBoard extends React.Component {
    
    render() {
        return (
            <div>
                <div className='center'>
                <ul>
                    {this.props.usersIds.map((userId) =>
                        <li key={userId}>
                            <User 
                                userId={userId} />      
                        </li>
                    )}
                </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const usersIds = Object.keys(users)
        .sort((a,b) => {
            const answersA = Object.keys(users[a].answers).length
            const answersB = Object.keys(users[b].answers).length
            return (answersB + users[b].questions.length) - (answersA + users[a].questions.length)
        })

    return {
        usersIds
    }
}

export default connect(mapStateToProps)(LeaderBoard)
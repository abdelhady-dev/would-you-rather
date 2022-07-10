import React from 'react'
import { connect } from 'react-redux'

class User extends React.Component {
    
    render() {

        const {
            name, avatarURL,
            NoAnswers, NoQuestions, rank
        } = this.props

        

        return (
            <div className='center'>
                <div className='userCard'>
                    <div className='userAvatar'>
                        <img src={avatarURL} alt='avatar' />
                        <h3>{name}</h3>  
                    </div>
                    <div className='user'>
                       <div className='left'>
                            <h4>Answered Questions</h4>
                            <h2>{NoAnswers}</h2>
                            <h4>Created Questions</h4>
                            <h2>{NoQuestions}</h2>        
                       </div>
                       <div className='right'>
                            <div className='content'>
                                <h4>Rank</h4>
                                <h1>{rank}</h1>
                            </div>
                       </div>
                            
                    </div> 
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {userId}) {
    const user = users[userId]

    const NoAnswers = Object.keys(user.answers).length
    const NoQuestions = user.questions.length
    const rank = NoAnswers + NoQuestions

    return {
        name: user.name, 
        avatarURL: user.avatarURL,
        NoAnswers,
        NoQuestions,
        rank
    }
}

export default connect(mapStateToProps)(User)
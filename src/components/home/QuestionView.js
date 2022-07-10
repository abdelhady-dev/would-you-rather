import React from 'react'
import { connect } from 'react-redux'
import { questionSet, dateFormat } from '../../utils/help'
import { Link } from 'react-router-dom'
class QuestionView extends React.Component {
    
    render() {

        const { list, question } = this.props
        const {
            id, hasAnswered, avatarURL, name, 
            timestamp, optionOne, optionTwo
        } = question

        return (
            <div>
                {/* if user choice unanswered */}
                {list === 'unanswered' && (
                    hasAnswered === false && (
                        <div className='questionCard'>
                            <div className='questionAvatar'>
                                <img src={avatarURL} alt='avatar' />
                                <h3>{name}</h3>
                                <h6>{dateFormat(timestamp)}</h6>    
                            </div>
                            <div className='info'>
                                <h3>Ask Would You Rather ?</h3>
                                <h5>{optionOne}</h5>
                                <h4>Or</h4>
                                <h5>{optionTwo}</h5>
                                <Link 
                                    to={`/question/${id}`}
                                    >View Poll</Link>    
                            </div> 
                        </div>
                    )
                )}

                {/* if user choice answered */}
                {list === 'answered' && (
                    hasAnswered === true && (
                        <div className='questionCard'>
                            <div className='questionAvatar'>
                                <img src={avatarURL} alt='avatar' />
                                <h3>{name}</h3>  
                                <h6>{dateFormat(timestamp)}</h6>  
                            </div>
                            <div className='info'>
                                <h3>Ask Would You Rather ?</h3>
                                <h5>{optionOne}</h5>
                                <h4>Or</h4>
                                <h5>{optionTwo}</h5>
                                <Link 
                                    to={`/question/${id}`}
                                    >View Poll</Link>   
                            </div> 
                        </div>
                    )
                )}
            </div> 
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {list, questionId}, props) {
    const questionAuther = users[questions[questionId].author]
    const question = questions[questionId]
    const currentUser = users[authedUser]

    return {
        question: questionSet(questionAuther, question, currentUser)
    }
}

export default connect(mapStateToProps)(QuestionView)
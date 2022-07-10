import React from 'react'
import { connect } from 'react-redux'
import QuestionAsk from './QuestionAsk'
import QuestionAns from './QuestionAns'
import { questionSet } from '../../utils/help'

class Question extends React.Component {
    render() {
        
        const { question } = this.props

        if (question === null) {
            return <div className='center error'><h1>Question doesn't exist</h1></div>
        }
        
        const { hasAnswered } = question

        if (question === null) {
            return <div className='center error'><h1>Question doesn't exist</h1></div>
        }
        
        return (
            <div>
                <div className='center'>
                    
                    {hasAnswered === false && (
                        <QuestionAsk question={question} />
                    )}

                    {hasAnswered === true && (
                        <QuestionAns question={question} />
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, props) {
    const { id } = props.match.params
    const question = questions[id]
    
    const questionAuther = question 
        ? users[question.author]
        : null
        
    const currentUser = users[authedUser]
    
    return {
        question: question
            ? questionSet(questionAuther, question, currentUser)
            : null
    }
}

export default connect(mapStateToProps)(Question)
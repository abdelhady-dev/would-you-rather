import React from 'react'
import { connect } from 'react-redux'
import QuestionView from './QuestionView'

class QuestionsContainer extends React.Component {
    state = {
        List: 'unanswered'
    }

    toggleList (e) {
        e.preventDefault()
        
        const siblings = Array.from(e.target.parentNode.childNodes)
        siblings.map(e => e.classList.remove('active'))
        e.target.classList.add('active')
        const ListType = e.target.id
        
        
        this.setState(() => ({
            List: ListType
        }))
        
    }
    render() {
        return (
            <div>
                <div className='center'>
                    <div className='controller center'>
                        <button onClick={(e) => this.toggleList(e)} id='unanswered' className='active'>Unanswered questions</button>
                        <button onClick={(e) => this.toggleList(e)} id='answered'>Answered questions</button>
                    </div>                    
                    <ul>
                        {this.props.questionsIds.map((questionId) =>
                            <li key={questionId}>
                                <QuestionView 
                                    list={this.state.List} 
                                    questionId={questionId} />      
                            </li>
                        )}
                    </ul>
                </div>        
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionsIds : Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionsContainer)
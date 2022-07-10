import React from 'react'
import { connect } from 'react-redux'
import { dateFormat } from '../../utils/help'


class QuestionAns extends React.Component {
    componentDidMount() {
        const { result } = this.props.question
        const select = document.getElementById(result)
        select.classList.add('active')
    }
    
    render() {

        const { question } = this.props
        const {
            avatarURL, name, votes, percentage,
            timestamp, optionOne, optionTwo
        } = question
        
        return(
            <div className='center questionCard'>
                <div className='questionAvatar'>
                    <img src={avatarURL} alt='avatar' />
                    <h3>{name}</h3>
                    <h6>{dateFormat(timestamp)}</h6>    
                </div>
                <div className='result'>
                    <h3>Would You Rather ? (Result)</h3>
                    <div id='optionOne'>
                        <h4>Your Answer</h4>
                        <h5>{optionOne}</h5>
                        <h5>{votes.one} Votes</h5>
                        <div className='progress'>
                            {percentage.one < 30 && (
                                percentage.one + '%'
                            )}
                            <div style={{width: percentage.one + '%'}} className='bar'>
                                {percentage.one > 30 && (
                                    percentage.one + '%'
                                )}
                            </div>
                        </div>
                    </div>
                    <h4>Or</h4>
                    <div id='optionTwo'>
                        <h4>Your Answer</h4>
                        <h5>{optionTwo}</h5>
                        <h5>{votes.two} Votes</h5>
                        <div className='progress'>
                            {percentage.two < 30 && (
                                percentage.two + '%'
                            )}
                            <div style={{width: percentage.two + '%'}} className='bar'>
                                {percentage.two > 30 && (
                                    percentage.two + '%'
                                )}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default connect()(QuestionAns)
import React from 'react'
import { connect } from 'react-redux'
import { dateFormat } from '../../utils/help'
import { handleAddAnswer } from '../../actions/shared'


class QuestionAsk extends React.Component {
    state = {
        option: ''
    } 
    
    changeHandle(e) {
        const value = e.target.value

        this.setState(() => ({
            option: value
        }))
    }

    handleSubmit(e) {
        e.preventDefault()

        const { option } = this.state

        const { dispatch, question } = this.props
        const questionId = question.id
        
        dispatch(handleAddAnswer(questionId, option))
        
    }

    render() {

        const { option } = this.state

        const { question } = this.props
        const {
            avatarURL, name, 
            timestamp, optionOne, optionTwo
        } = question

        return (
            <div className='center questionCard'>
                <div className='questionAvatar'>
                    <img src={avatarURL} alt='avatar' />
                    <h3>{name}</h3>
                    <h6>{dateFormat(timestamp)}</h6>    
                </div>
                <div className='form'>
                    <h3>Ask Would You Rather ?</h3>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <label className='inputContainer'>
                            {optionOne}
                            <input 
                                onChange={e => this.changeHandle(e)}
                                type='radio' value='optionOne' name='rather' />
                            <span className='mark'></span>
                        </label>
                        <label className='inputContainer'>
                            {optionTwo}
                            <input 
                                onChange={e => this.changeHandle(e)}
                                type='radio' value='optionTwo' name='rather' />
                            <span className='mark'></span>
                        </label>
                        <button
                            type='submit'
                            disabled={option === ''}
                        >Submit</button>
                    </form>        
                </div> 
            </div>
        )
    }
}

export default connect()(QuestionAsk)
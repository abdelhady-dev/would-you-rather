import { saveQuestion } from "../utils/API"

import { getInitialData } from '../utils/API'
import { saveAnswer } from '../utils/API'
import { 
    receiveUseers,
    addAnswerToUser,
    addQuestionToUser
} from './users'
import { 
    receiveQuestions,
    addAnswerToQuestion,
    addQuestion
} from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData()
        .then( ({users, questions}) => {
            dispatch(receiveUseers(users))
            dispatch(receiveQuestions(questions))
        }).then(() => dispatch(hideLoading()))
    }
}

export function handleAddAnswer(questionId, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        saveAnswer({
            authedUser: authedUser, 
            qid: questionId, 
            answer: option
        })
        dispatch(addAnswerToUser(authedUser, questionId, option))
        dispatch(addAnswerToQuestion(authedUser, questionId, option))
        return dispatch(hideLoading())
    }
}

export function handleAddQuestion (op1, op2) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
  
      dispatch(showLoading())
      
      return saveQuestion({ 
        author: authedUser, 
        optionOneText: op1, 
        optionTwoText: op2 
      })
        .then((question) => {
          dispatch(addQuestion(question))
          const questionId = question.id
          return questionId
        })
        .then((questionId) => dispatch(addQuestionToUser(questionId, authedUser)))
        .then(() => dispatch(hideLoading()))
    }
}
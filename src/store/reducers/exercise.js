import exerciseStates from '../../Constants/exerciseStates';
import actionTypes from '../actionTypes';

const initialState = {
  state: exerciseStates.BEFORE_START,
  exercise: {
    // category_id: 0,
    // questions: [
    //   {
    //     id: 0,
    //     content: 'Content of question ?',
    //   },
    //   {
    //     type: questionTypes.MULTIPLE_CHOICE,
    //     id: 1,
    //     content: 'Content of question 2 ?',
    //   },
    // ],
  },
  myExercises: [],
  currentQuestionIndex: 0,
  totalAccuracy: 0,
  question_accuracies: {},

  editExercise: {},
};

const exerciseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_EXERCISE_DATA:
      return {
        ...state,
        exercise: { ...payload.exercise },
      };

    case actionTypes.START_EXERCISE_REQUEST:
      return {
        ...state,
        state: payload.state,
        totalAccuracy: 0,
        currentQuestionIndex: 0,
        question_accuracies: {},
      };
    case actionTypes.NEXT_QUESTION:
      let exerciseState = state.state;
      let currentQuestionIndex = state.currentQuestionIndex + 1;
      if (currentQuestionIndex < 0 || currentQuestionIndex >= state.exercise?.questions?.length) {
        currentQuestionIndex = 0;
        if (exerciseState === exerciseStates.ONGOING) exerciseState = exerciseStates.ENDED;
      }
      return {
        ...state,
        currentQuestionIndex: currentQuestionIndex,
        state: exerciseState,
      };
    case actionTypes.END_EXERCISE:
      return {
        ...state,
        state: exerciseStates.ENDED,
        currentQuestionIndex: 0,
      };
    case actionTypes.RESET_EXERCISE:
      return {
        ...state,
        state: exerciseStates.BEFORE_START,
        currentQuestionIndex: 0,
        totalAccuracy: 0,
        question_accuracies: {},
      };
    case actionTypes.UPDATE_QUESTION_ACCURACY_DATA:
      const { question_id, accuracy } = payload;
      const question_accuracies = { ...state.question_accuracies };
      question_accuracies[question_id] = { question_id, accuracy };
      return {
        ...state,
        totalAccuracy: state.totalAccuracy + accuracy,
        question_accuracies: question_accuracies,
      };
    case actionTypes.GET_MY_EXERCISES_DATA:
      return {
        ...state,
        myExercises: [...payload.exercises],
      };
    case actionTypes.SET_EDIT_EXERCISE:
      return {
        ...state,
        editExercise: { ...payload.exercise },
      };
    case actionTypes.UPDATE_EDIT_EXERCISE:
      return {
        ...state,
        editExercise: { ...payload.exercise },
      };
    default:
      return state;
  }
};

export default exerciseReducer;

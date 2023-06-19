import exerciseStates from '../../Constants/exerciseStates';
import actionTypes from '../actionTypes';

// Exercises
export const getExerciseRequest = (exerciseId) => ({
  type: actionTypes.GET_EXERCISE_REQUEST,
  payload: { id: exerciseId },
});

export const getExerciseData = (exercise) => ({
  type: actionTypes.GET_EXERCISE_DATA,
  payload: { exercise },
});

export const getExerciseError = (error) => ({
  type: actionTypes.GET_EXERCISE_ERROR,
});

export const startExercise = (exercise_id) => ({
  type: actionTypes.START_EXERCISE_REQUEST,
  payload: {
    exercise_id,
    state: exerciseStates.ONGOING,
  },
});

export const nextQuestion = () => ({
  type: actionTypes.NEXT_QUESTION,
});

export const endExercise = () => ({
  type: actionTypes.END_EXERCISE,
});

export const resetExercise = () => ({
  type: actionTypes.RESET_EXERCISE,
});

export const getMyExercisesRequest = () => ({
  type: actionTypes.GET_MY_EXERCISES_REQUEST,
  payload: {},
});

export const getMyExercisesData = (exercises) => ({
  type: actionTypes.GET_MY_EXERCISES_DATA,
  payload: { exercises },
});

export const getMyExercisesError = (error) => ({
  type: actionTypes.GET_MY_EXERCISES_ERROR,
  payload: { error },
});

export const createExerciseRequest = (title, description, category_id) => ({
  type: actionTypes.CREATE_EXERCISE_REQUEST,
  payload: { title, description, category_id },
});

export const createExerciseData = () => ({
  type: actionTypes.CREATE_EXERCISE_DATA,
});

export const createExerciseError = (error) => ({
  type: actionTypes.CREATE_EXERCISE_ERROR,
  payload: { error },
});

// EDIT
export const startEditingExercise = (exercise) => ({
  type: actionTypes.SET_EDIT_EXERCISE,
  payload: { exercise: JSON.parse(JSON.stringify(exercise)) },
});

export const updateEditingExercise = (exercise) => ({
  type: actionTypes.UPDATE_EDIT_EXERCISE,
  payload: { exercise: { ...exercise } },
});

export const endEditingExercise = () => ({
  type: actionTypes.SET_EDIT_EXERCISE,
  payload: { exercise: {} },
});

export const updateExerciseRequest = (exercise) => ({
  type: actionTypes.UPDATE_EXERCISE_REQUEST,
  payload: { ...exercise },
});

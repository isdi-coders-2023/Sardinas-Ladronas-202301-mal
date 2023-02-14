import { ActionTypes } from '../types/Action';
import recipeReducer from './recipeReducer';

describe('Given a reducer function', () => {
  test('When the action is Default, it should return the previous search', async () => {
    return expect(
      recipeReducer(
        [
          {
            strMeal: 'Torrijas',
            strInstructions: 'Coges el pan, lo metes en leche y lo fríes',
            strMealThumb: 'images/torrijas.png',
          },
        ],
        {
          type: 'default' as unknown as ActionTypes,
          payload: [],
        }
      )
    ).toEqual([
      {
        strMeal: 'Torrijas',
        strInstructions: 'Coges el pan, lo metes en leche y lo fríes',
        strMealThumb: 'images/torrijas.png',
      },
    ]);
  });
});

import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://www.themealdb.com/api/json/v1/1/search.php',
    (req, res, ctx) => {
      const productLetter = req.url.searchParams.get('B');
      return res(
        ctx.status(200),
        ctx.json({
          productLetter,
          meals: [
            {
              idMeal: '1',
              strMeal: 'Torrijas',
              strCategory: 'dessert',
              strArea: 'Spain',
              strInstructions: 'Coges el pan, lo metes en leche y lo fríes',
              strMealThumb: 'images/torrijas.png',
              strIngredient1: 'leche',
              strIngredient2: 'cacao',
              strIngredient3: 'avellanas',
              strIngredient4: 'azúcar',
              strIngredient5: 'huevos',
              strIngredient6: '',
              strIngredient7: '',
              strIngredient8: '',
              strIngredient9: '',
              strIngredient10: '',
              strIngredient11: '',
              strIngredient12: '',
              strIngredient13: '',
              strIngredient14: '',
              strIngredient15: '',
              strMeasure1: '250ml',
              strMeasure2: '1 sobre',
              strMeasure3: '5',
              strMeasure4: '250ml',
              strMeasure5: '250ml',
              strMeasure6: '2',
              strMeasure7: '',
              strMeasure8: '',
              strMeasure9: '',
              strMeasure10: '',
              strMeasure11: '',
              strMeasure12: '',
              strMeasure13: '',
              strMeasure14: '',
              strMeasure15: '',
            },
          ],
        })
      );
    }
  ),
];

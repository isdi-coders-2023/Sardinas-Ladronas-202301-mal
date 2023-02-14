import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://www.themealdb.com/api/json/v1/1/search.php',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          meals: [
            {
              strMeal: 'Torrijas',
              strInstructions: 'Coges el pan, lo metes en leche y lo fríes',
              strMealThumb: 'images/torrijas.png',
            },
          ],
        })
      );
    }
  ),
];

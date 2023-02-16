import { rest } from 'msw';
import { meal } from './mealMock';

export const handlers = [
  rest.get(
    'https://www.themealdb.com/api/json/v1/1/search.php',
    (req, res, ctx) => {
      const productLetter = req.url.searchParams.get('B');
      

      return res(ctx.status(200), ctx.json(productLetter, meal));

    }
  ),
];

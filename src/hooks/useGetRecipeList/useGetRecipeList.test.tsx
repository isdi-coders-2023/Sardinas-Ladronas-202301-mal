import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../../components/Pagination/Pagination';
import { server } from '../../mocks/server';
import RecipeContextProvider from '../../store/context/Recipe.provider';
import useGetRecipeList from './useGetRecipeList';

describe('Given a useGetRecipeList hook', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When the user requests a recipe, the hook should return it', async () => {
    render(<Pagination />);
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <RecipeContextProvider>{children}</RecipeContextProvider>
    );
    const { result } = renderHook(useGetRecipeList, { wrapper: Wrapper });
    expect(result.current.recipes).toEqual([]);
    await act(async () => result.current.getRecipeList());
    expect(result.current.recipes).toEqual([
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
    ]);
  });
  test('When the user clicks on a letter, the recipes with that letter should appear', async () => {
    render(<Pagination />);
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <RecipeContextProvider>{children}</RecipeContextProvider>
    );
    const linkElement = screen.getByTestId('B');
    userEvent.click(linkElement);
    const { result } = renderHook(useGetRecipeList, { wrapper: Wrapper });
    expect(result.current.recipes).toEqual([]);
    await act(async () => result.current.getRecipeList());
    expect(result.current.recipes).toEqual([
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
    ]);
  });
});

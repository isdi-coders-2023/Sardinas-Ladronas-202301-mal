import { act, renderHook } from '@testing-library/react';
import { server } from '../../mocks/server';
import RecipeContextProvider from '../../store/context/Recipe.provider';
import useGetRecipeList from './useGetRecipeList';

describe('Given a useGetRecipeList hook', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When the user requests a recipe, the hook should return it', async () => {
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
        strMeal: 'Torrijas',
        strInstructions: 'Coges el pan, lo metes en leche y lo fríes',
        strMealThumb: 'images/torrijas.png',
      },
    ]);
  });
});

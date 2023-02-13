export enum ActionTypes {
  LIST_RECIPES = 'listRecipes',
}

type CardAction = {
  type: ActionTypes.LIST_RECIPES;
};

export default CardAction;

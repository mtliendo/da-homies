/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRecipe = /* GraphQL */ `query GetRecipe($id: ID!) {
  getRecipe(id: $id) {
    id
    owner
    coverImage
    title
    description
    servings
    ingredientsText
    stepsText
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRecipeQueryVariables, APITypes.GetRecipeQuery>;
export const listRecipes = /* GraphQL */ `query ListRecipes(
  $filter: ModelRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      coverImage
      title
      description
      servings
      ingredientsText
      stepsText
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipesQueryVariables,
  APITypes.ListRecipesQuery
>;
export const RecipeByTitle = /* GraphQL */ `query RecipeByTitle(
  $title: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  RecipeByTitle(
    title: $title
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      coverImage
      title
      description
      servings
      ingredientsText
      stepsText
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RecipeByTitleQueryVariables,
  APITypes.RecipeByTitleQuery
>;

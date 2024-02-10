/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRecipe = /* GraphQL */ `subscription OnCreateRecipe(
  $filter: ModelSubscriptionRecipeFilterInput
  $owner: String
) {
  onCreateRecipe(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecipeSubscriptionVariables,
  APITypes.OnCreateRecipeSubscription
>;
export const onUpdateRecipe = /* GraphQL */ `subscription OnUpdateRecipe(
  $filter: ModelSubscriptionRecipeFilterInput
  $owner: String
) {
  onUpdateRecipe(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeSubscriptionVariables,
  APITypes.OnUpdateRecipeSubscription
>;
export const onDeleteRecipe = /* GraphQL */ `subscription OnDeleteRecipe(
  $filter: ModelSubscriptionRecipeFilterInput
  $owner: String
) {
  onDeleteRecipe(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeSubscriptionVariables,
  APITypes.OnDeleteRecipeSubscription
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRecipe = /* GraphQL */ `mutation CreateRecipe(
  $input: CreateRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  createRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRecipeMutationVariables,
  APITypes.CreateRecipeMutation
>;
export const updateRecipe = /* GraphQL */ `mutation UpdateRecipe(
  $input: UpdateRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  updateRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRecipeMutationVariables,
  APITypes.UpdateRecipeMutation
>;
export const deleteRecipe = /* GraphQL */ `mutation DeleteRecipe(
  $input: DeleteRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  deleteRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRecipeMutationVariables,
  APITypes.DeleteRecipeMutation
>;

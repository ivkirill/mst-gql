/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IAnyModelType, types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonEvolutionRequirementBase
 * auto generated base class for the model PokemonEvolutionRequirementModel.
 *
 * Represents a Pokémon's requirement to evolve
 */
export const PokemonEvolutionRequirementModelBase = ModelBase
  .named('PokemonEvolutionRequirement')
  .props({
    __typename: types.optional(types.literal("PokemonEvolutionRequirement"), "PokemonEvolutionRequirement"),
    /** The amount of candy to evolve */
    amount: types.union(types.undefined, types.null, types.integer),
    /** The name of the candy to evolve */
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonEvolutionRequirementModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromPokemonEvolutionRequirement() {
  return new PokemonEvolutionRequirementModelSelector()
}

export const pokemonEvolutionRequirementModelPrimitives = selectFromPokemonEvolutionRequirement().amount.name

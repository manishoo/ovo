/*
 * SearchResult.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import CenterAlignedPageView from '@Common/CenterAlignedPageView'
import RecipesList from '@Common/RecipesList/RecipesList'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import ExploreSearch from '@Views/ExploreSearch/ExploreSearch'
import { SearchResultQuery, SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import { QueryResult } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import { SEARCH_RESULT_RECIPES_QUERY, SearchResultParameters } from './SearchResultContainer'


interface SearchResultProps {
  parameters?: SearchResultParameters,
  recipesData: QueryResult<SearchResultQuery, SearchResultQueryVariables>
}

interface SearchResultState {
  height: number,
  variables: SearchResultQueryVariables,
  filterVisible: boolean,
}

export default class SearchResult extends ComponentBase<SearchResultProps, SearchResultState> {
  private _recipesListHeight: number | null = null
  private _recipes: any

  public render() {
    const { recipesData } = this.props

    return (
      <CenterAlignedPageView
        scrollViewProps={{
          onScroll: this._onScroll(this._handleOnReachEnd),
        }}
      >
        <RX.View style={styles.container}>
          <ExploreSearch
            variables={this.state.variables}
            onChange={variables => this.setState({ variables })}
            onSubmit={variables => this.setState({ variables }, () => this._fetchMoreRecipes(true))}
          />
          {/*<RX.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <RX.View
              onPress={() => this.setState({filterVisible: !this.state.filterVisible})}
            >
              *
               * Filter Icon
               *
               <RX.View
                 style={{
                   backgroundColor: 'red',
                   width: 20,
                   height: 20,
                 }}
               />
            </RX.View>

            <RX.View>
              *
               * Sort Icon
               *
              <RX.View
                style={{
                  backgroundColor: 'blue',
                  width: 20,
                  height: 20,
                }}
              />
            </RX.View>
          </RX.View>
          {
            this.state.filterVisible &&
            <SearchResultFilter />
          }*/}

          <RecipesList
            recipes={recipesData.data ? recipesData.data.recipes.recipes : []}
            onLayout={e => this._onHeightChange(e.height)}
            loading={recipesData.loading}
          />
        </RX.View>
      </CenterAlignedPageView>
    )
  }

  protected _buildInitialState(): Readonly<SearchResultState> {
    return {
      height: ResponsiveWidthStore.getHeight(),
      variables: {
        nameSearchQuery: this.props.parameters && this.props.parameters.q ? this.props.parameters.q : '',
      },
      filterVisible: false,
    }
  }

  private _onHeightChange = (height: number) => {
    this._recipesListHeight = height

    this._fetchMoreRecipes()
  }

  private _fetchMoreRecipes = (refetch?: boolean) => {
    const { height } = this.state
    const { data } = this.props.recipesData
    if (!data) return null
    data.recipes.pagination.hasNext

    if (!refetch) {
      if (!data.recipes.pagination.hasNext && data.recipes.recipes.length > 0) return
    }

    let lastId: any

    const lastItem = data.recipes.recipes[data.recipes.recipes.length - 1]
    if (lastItem) {
      lastId = lastItem.id
    }

    if (this._recipesListHeight && height > this._recipesListHeight) {
      this.props.recipesData.fetchMore({
        query: SEARCH_RESULT_RECIPES_QUERY,
        updateQuery: () => {
        },
        variables: {
          nameSearchQuery: '',
          ...this.state.variables,
          lastId: refetch ? null : lastId,
        }
      })
    }
  }

  private _onScroll = (onReachEnd: () => void) => (newScrollValue: number) => {
    const { height } = this.state

    const OFFSET = 100

    const bottomOfViewPoint = newScrollValue + height
    if (this._recipesListHeight && (bottomOfViewPoint + OFFSET) >= this._recipesListHeight) {
      onReachEnd()
    }
  }

  private _handleOnReachEnd = () => {
    this._fetchMoreRecipes()
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    flex: 1,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 50,
    fontWeight: 'bold',
    color: '#e7e7e7',
    marginBottom: Styles.values.spacing,
  }),
}

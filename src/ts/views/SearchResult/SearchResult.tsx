/*
 * SearchResult.tsx
 * Copyright: Ouranos Studio 2019
 */

import CenterAlignedPageView from 'common/CenterAlignedPageView'
// import Text from 'common/Text/Text'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import ExploreSearch from 'src/ts/views/ExploreSearch/ExploreSearch'
import SearchResultRecipes from 'src/ts/views/SearchResult/SearchResultRecipes'
import { SearchResultQueryVariables } from 'src/ts/views/SearchResult/types/SearchResultQuery'
import { SearchResultParameters } from './SearchResultContainer'


interface SearchResultProps {
  parameters: SearchResultParameters,
}

interface SearchResultState {
  height: number,
  variables: SearchResultQueryVariables,
  filterVisible: boolean,
}

export default class SearchResult extends ComponentBase<SearchResultProps, SearchResultState> {
  private _recipesListHeight: number
  private _recipes: any

  public render() {
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
            onSubmit={variables => this.setState({ variables }, () => this._recipes.fetchMore(this.state.variables, true))}
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

          <SearchResultRecipes
            ref={ref => this._recipes = ref}
            variables={this.state.variables}
            onHeightChange={this._onHeightChange}
          />
        </RX.View>
      </CenterAlignedPageView>
    )
  }

  protected _buildInitialState(): Readonly<SearchResultState> {
    return {
      height: ResponsiveWidthStore.getHeight(),
      variables: {
        nameSearchQuery: this.props.parameters.q,
      },
      filterVisible: false,
    }
  }

  private _onHeightChange = (height: number) => {
    this._recipesListHeight = height

    this._checkIfRecipesHeightWasShorter()
  }

  private _checkIfRecipesHeightWasShorter = () => {
    const { height } = this.state

    if (height > this._recipesListHeight) {
      this._recipes.fetchMore()
    }
  }

  private _onScroll = (onReachEnd: () => void) => (newScrollValue: number) => {
    const { height } = this.state

    const OFFSET = 100

    const bottomOfViewPoint = newScrollValue + height
    if ((bottomOfViewPoint + OFFSET) >= this._recipesListHeight) {
      onReachEnd()
    }
  }

  private _handleOnReachEnd = () => {
    this._recipes.fetchMore()
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

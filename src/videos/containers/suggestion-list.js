import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Empty from './../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from './../components/suggestion'
import Layout from './../components/suggestion-list-layout'
import { connect } from 'react-redux'

class Suggestionlist extends Component {

    renderEmpty = ()=><Empty text = "No hay sugerencias" />;
    itemSeparator = ()=><Separator />;
    viewMovie = (item) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE', 
            payload: {
                movie: item,
            }
        })
    }
    
    renderItem = ({item}) => {return(<Suggestion 
                                        {...item} 
                                        onPress = {(params) => {
                                            this.viewMovie(item)
                                        }
                                        }
                                    />)};
    keyExtractor = (item) => item.id.toString()

    render() {
        return (
            <Layout title = "Recomendado para keko ...">
                <FlatList 
                    keyExtractor = {this.keyExtractor}
                    data = {this.props.list}       
                    ListEmptyComponent = {this.renderEmpty}
                    ItemSeparatorComponent = {this.itemSeparator} 
                    renderItem = {this.renderItem}
                />
            </Layout>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.categoryList
    }
}

export default connect(mapStateToProps)(Suggestionlist) 
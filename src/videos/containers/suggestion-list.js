import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Empty from './../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from './../components/suggestion'
import Layout from './../components/suggestion-list-layout'

class Suggestionlist extends Component {

    renderEmpty = ()=><Empty text = "No hay sugerencias" />;
    itemSeparator = ()=><Separator />;
    renderItem = ({item}) => {return(<Suggestion {...item} />)};
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

export default Suggestionlist
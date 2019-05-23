import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Empty from './../components/empty'

class Suggestionlist extends Component {

    renderEmpty = ()=><Empty text = "No hay sugerencias" />
    
    render() {
        const list = [
                        {key  :'1', title:"Pink Floyd"} ,
                        {key  :'2', title:"King Crimson"},
                        {key  :'3', title:"Tool"},
                        {key  :'4', title:"Opeth"},
                    ]

        return (
            <FlatList 
                data = {list}
                ListEmptyComponent = {this.renderEmpty} 
                renderItem = {({item}) => <Text>{item.title}</Text>
                }
            />
        )
    }
}

export default Suggestionlist
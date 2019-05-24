import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Empty from './../components/empty'
import Separator from './../components/vertical-separator'
import Suggestion from './../components/suggestion'

class Suggestionlist extends Component {

    renderEmpty = ()=><Empty text = "No hay sugerencias" />;
    itemSeparator = ()=><Separator />;
    renderItem = ({item}) => {return(<Suggestion {...item} />)};

    render() {
        const list = [
                        {key:'1',title:"Hey You",author:"Pink Floyd",year:"2001", genre: "Rock"},
                        {key:'2',title:"Starless",author:"King Crimson",year:"2001", genre: "Progressive Rock"},
                        {key:'3',title:"Schism",author:"Tool",year:"2001", genre: "Progressive Metal"},
                        {key:'4',title:"Face of Melinda",author:"Opeth",year:"2001", genre: "Progressive Death Metal"},
                        {key:'5',title:"Born in winter",author:"Gojira",year:"2001", genre: "Progressive Death Metal"},
                    ]

        return (
            <FlatList 
                data = {list}
                ListEmptyComponent = {this.renderEmpty}
                ItemSeparatorComponent = {this.itemSeparator} 
                renderItem = {this.renderItem}
            />
        )
    }
}

export default Suggestionlist
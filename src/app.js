import React from 'react'
import {FlatList, View, Text, StyleSheet} from 'react-native'
import { SearchBar } from 'react-native-elements';
import {connect} from 'react-redux'
import {fetchData} from './actions'

class App extends React.Component {
    constructor(props) {
        super(props);
        props.fetchData();
        this.state = { search: '', isSearched: false, itemData: []};
    }

    search = text => {
        console.log(text);
    };
    clear = () => {
        this.search.clear();
        this.setState({isSearched: false})
    };

    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const data = this.props.appData.data.filter(function(item) {
            //applying filter for the inserted text in search bar
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            isSearched: true,
            itemData: data,
            search:text,
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <SearchBar
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.SearchFilterFunction('')}
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.searchInputContainer}
                    placeholder="Type Here..."
                    value={this.state.search}
                />
                <View style={styles.mainContent}>
                    {
                        this.props.appData.isFetching && <Text>Loading</Text>
                    }
                    {
                        this.props.appData.data.length ? (

                            <FlatList
                                style={{ marginLeft: 10,marginRight: 10, marginBottom: 150}}
                                extraData={this.props}
                                data={(this.state.isSearched)?this.state.itemData:this.props.appData.data}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) => {
                                    return (
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>Name : {item.name.toUpperCase()}</Text>
                                            <Text style={styles.buttonText}>ID : {item.id}</Text>
                                            <Text style={styles.buttonText}>Description : {item.description}</Text>
                                            <Text style={styles.buttonText}>URL : {item.downloads_url}</Text>
                                            <Text style={styles.buttonText}>Size : {item.size} MB</Text>
                                        </View>
                                    )
                                }}/>
                        ) : null
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        color: '#0b7eff'
    },
    button: {
        height: 160,
        borderRadius:10,
        width: '90%',
        margin: 10,
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        marginLeft:10,
        color: 'white',
        textAlign: 'left'
    },
    mainContent: {
        margin: 10,
        height: '100%',
        width: '100%'
    },
    searchContainer: {
        backgroundColor: '#f8be45',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    searchInputContainer: {
        backgroundColor: 'white',
        width: '95%',
        alignSelf: 'center'
    },
});

function mapStateToProps(state) {
    return {
        appData: state.appData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
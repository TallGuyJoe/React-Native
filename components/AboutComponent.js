import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

//mapStateProps receives the state as a prop and returns the partners data from the state this is the way that redux has defined for us to use to signal what part of the state we are interested in using we dont want to grab the entire state when we only need a part of it
const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};


function Mission() {
    return(
        <Card title="Our Mission" wrapperStyle={{marginBottom: 10}}> 
            <Text style={{marginTop: 10}}>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    )
}

class About extends Component {
    
    static navigationOptions = {
        title: 'About'
    }

    render() {
        const renderPartner = ({item}) => {
            return(
                <ListItem 
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            )
        }
        return(
            <ScrollView>
                <Mission />
                <Card title="Community Partners">
                    <FlatList
                    // why two partners, the first partners here refers to the entire part of the state that handles the partners data including the is loading and error message properties along withe partners array and the second partners array here is actually refers to the partners data array
                        data={this.props.partners.partners}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderPartner}
                    />
                </Card>
            </ScrollView>
        );
    }
}

// the connect takes care of making sure that the about component now receives the partners props from the redux store
export default connect(mapStateToProps) (About);
import React, {Component} from 'react';
import {  Dimensions, Slider, View, Text, TextInput, TouchableOpacity, Image, Alert ,StyleSheet ,StatusBar, Container, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'
import Masonry from 'react-native-masonry';
import Search from 'react-native-search-box';

import Header from './header'

const data = [
  {
    data: {
      caption: 'by Junior Abranches',
      user: {
        name: 'Pastas'
      },
    },
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg',
    renderFooter: (data) => {
      return (
        <View key='brick-header' style={{backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9}}>
          <Text style={{lineHeight: 20, fontSize: 14}}>{data.caption}</Text>
        </View>
      )
    },
    renderHeader: (data) => {
      return (
        <View key='brick-footer' style={styles.headerTop}>
          <Image
            source={{ uri: 'https://avatars3.githubusercontent.com/u/9979222?v=4&s=460' }}
            style={styles.Pic}/>
          <Text style={styles.Name}>{data.user.name}</Text>
        </View>
      )
    }
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA',
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/5a/15/0c/5a150cf9d5a825c8b5871eefbeda8d14.jpg'
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/04/63/3f/04633fcc08f9d405064391bd80cb0828.jpg'
  },
  {
    uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRWkuUMpLyu3QnFu5Xsi_7SpbabzRtSis-_QhKas6Oyj3neJoeug'
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/a5/c9/43/a5c943e02b1c43b5cf7d5a4b1efdcabb.jpg'
  },
  {
    uri: 'https://i0.wp.com/www.youbodyhealth.com/wp-content/uploads/2016/08/Delicious-Foods-can-Harm-Your-Brain.jpg?'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg',
  },
  {
    uri: 'https://pbs.twimg.com/media/B59AOmICQAAiGGj.png',
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/17/17/enhanced-buzz-orig-2548-1387320822-8.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg'
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/3/15/enhanced/webdr06/enhanced-24427-1428089292-2.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg'
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg'
  }
];

// Tabs
let {width} = Dimensions.get('window');
let widthTab = width / 3;
const Tabs = ( {children} ) => {
  return (
    <View style={{height: 50, width: width, borderBottomWidth: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', backgroundColor: '#2980b6'}}>
      {children}
    </View>
  )
}

const Tab = ( {title, active = false} ) => {
  return (
    <View style={[{height: 50, width: widthTab, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2980b6'},
                  active ? {borderBottomWidth: 2, borderBottomColor: '#fff'} : {}
                ]}>
      <Text style ={{color: '#fff'}}> {title} </Text>
    </View>
  )
}
//  /Tabs

export  default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      columns: 2,
      padding: 5
      }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

        <Image source={require('../../components/images/background.png')} style={styles.container}>
          <View style={{ flex: 0, padding: 10}}>
            <Search ref="search_box" placeholder="Find"/>
          </View>

          <View>
            <Tabs>
              <Tab title='Pastas' active={true}/>
              <Tab title='Salads'/>
              <Tab title='Meat'/>
            </Tabs>
          </View>



            <View style={{flex: 2, padding: this.state.padding, backgroundColor: '#fff'}}>
              <Masonry
                sorted
                bricks={data}
                columns={this.state.columns}/>
            </View>
        </Image>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'flex-start',
  },
  Pic: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10
  },
  Name: {
    fontSize: 20
  }
});

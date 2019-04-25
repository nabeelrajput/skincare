import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export default class Search extends React.Component {
  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={firstQuery}
        style={{height:24,marginLeft:20,marginBottom:5,marginTop:5,width:'90%', alignItems: 'center',justifyContent: 'center',borderRadius:5}}
      />
    );
  }
}
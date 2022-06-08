import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
const WebPage = ({route}) => {
    const packageId = route.params.packageId
    const userName = route.params.userName
    const userToken = route.params.userToken

    return <WebView source={{ uri: `https://test.emparator.com/Account/MobileToken?email=${userName}&token=${userToken}&packageId=${packageId}`}} />;
  
}

export default WebPage

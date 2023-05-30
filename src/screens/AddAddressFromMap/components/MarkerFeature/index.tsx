import {Pressable, Alert} from 'react-native';
import React from 'react';
import {IMarkerFeature} from '../../interface';
import styles from './style';
import {getItem, setItem} from '../../../../mmkv';

export default function MarkerFeature({item}: {item: IMarkerFeature}) {
  const saveAddressToLocal = () => {
    let addresses: IMarkerFeature[] = getItem('addresses');

    if (addresses != undefined) {
      addresses.push(item);
    } else {
      addresses = [];
      addresses.push(item);
    }
    setItem('addresses', addresses);
    Alert.alert(
      'Success',
      'Address has been added, pls check My Addresses Screen',
    );
  };

  return (
    <Pressable
      style={styles.container}
      onPress={saveAddressToLocal}></Pressable>
  );
}

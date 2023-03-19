import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './style';
import {IFeature} from '../AddAddressFromSearch/interface';
import {getItem} from '../../mmkv';

export default function MyAddresses() {
  const [markers, setMarkers] = useState<IFeature[]>([]);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    getAddresses();
  }, []);

  const getAddresses = () => {
    setMarkers(getItem('addresses'));
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        showsCompass>
        {markers &&
          markers.map(x => {
            return (
              <Marker
                coordinate={{
                  latitude: x?.location?.latitude ?? 0,
                  longitude: x?.location?.longitude ?? 0,
                }}
                title={x?.name}
                description={x?.label}
              />
            );
          })}
      </MapView>
      <View style={styles.countContainer}>
        <Text style={styles.textColor}>{'Total: ' + markers.length}</Text>
      </View>
    </View>
  );
}

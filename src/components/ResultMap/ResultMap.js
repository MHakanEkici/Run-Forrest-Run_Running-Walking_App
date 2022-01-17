import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ResultMap.style';
import {mapTheme} from '../../styles/mapTheme';

export default function ResultMap({
  routeCoords,
  regionCoords,
  type = 'default',
}) {
  return (
    <MapView
      region={{
        latitude: regionCoords.latitude,
        longitude: regionCoords.longitude,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
      customMapStyle={mapTheme}
      style={styles[type].map}>
      <Polyline coordinates={routeCoords} strokeWidth={2} strokeColor="blue" />
      {routeCoords.length > 0 && (
        <Marker
          coordinate={{
            latitude: routeCoords[0].latitude,
            longitude: routeCoords[0].longitude,
          }}>
          <Icon name="map-marker" size={40} color={'blue'} />
        </Marker>
      )}
      {routeCoords.length > 0 && (
        <Marker
          coordinate={{
            latitude: routeCoords[routeCoords.length - 1].latitude,
            longitude: routeCoords[routeCoords.length - 1].longitude,
          }}>
          <Icon name="map-marker-check" size={40} color={'green'} />
        </Marker>
      )}
    </MapView>
  );
}

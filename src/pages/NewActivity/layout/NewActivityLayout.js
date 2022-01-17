import React from 'react';
import {View} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Loading from '../../../components/Loading';
import LinearGradient from 'react-native-linear-gradient';
import styles from './NewActivityLayout.style';
import ResultsModal from '../../../components/ResultsModal';
import ActivityCard from '../../../components/cards/ActivityCard';
import Button from '../../../components/Button';
import {mapTheme} from '../../../styles/mapTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NewActivityLayout(props) {
  return !!props.currentCoord && !!props.weatherInfo ? (
    <LinearGradient
      colors={['white', '#4568dc', '#b06ab3']}
      style={styles.container}>
      <View style={styles.mapFrame}>
        <MapView
          style={styles.map}
          followsUserLocation={true}
          customMapStyle={mapTheme}
          region={{
            latitude: props.currentCoord.latitude,
            longitude: props.currentCoord.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}>
          <Polyline
            coordinates={props.routeCoords}
            strokeWidth={4}
            strokeColor="blue"
          />
          <Marker
            coordinate={{
              latitude: props.currentCoord.latitude,
              longitude: props.currentCoord.longitude,
            }}>
            <Icon name="google-street-view" size={35} color={'green'} />
          </Marker>
          <Marker
            coordinate={{
              latitude: props.startingCoord.latitude,
              longitude: props.startingCoord.longitude,
            }}>
            <Icon name="map-marker" size={35} color={'blue'} />
          </Marker>
        </MapView>
      </View>
      <View style={styles.cardView}>
        <ActivityCard
          weatherInfo={props.weatherInfo}
          distance={props.distance}
          time={props.time}
        />
      </View>
      {props.isStarted ? (
        <View style={styles.buttonView}>
          <Button
            label={'STOP'}
            type="primaryNegative"
            onPress={() => props.handleStopActivity()}
          />
        </View>
      ) : (
        <View style={styles.buttonView}>
          <Button
            label={'START'}
            onPress={() => props.handleStartActivity()}
            type="transparent"
          />
        </View>
      )}

      <ResultsModal
        isVisible={props.resultsModalVisible}
        setResultsModalVisible={() => props.setResultsModalVisible()}
        routeCoords={props.routeCoords}
        currentCoord={props.currentCoord}
        distance={props.distance}
        time={props.time}
        handleFinishActivity={() => props.handleFinishActivity()}
      />
    </LinearGradient>
  ) : (
    <Loading />
  );
}

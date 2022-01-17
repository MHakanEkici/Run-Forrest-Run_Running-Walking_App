import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
export default function useFetchData(reference) {
  const [data, setData] = useState(null);
  const [dataError, setDataError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    try {
      const dataReference = database().ref(reference);
      dataReference.on('value', snapshot => {
        const dataObject = snapshot.val();
        if (!!dataObject) {
          setData(dataObject);
        }
      });
    } catch (error) {
      setDataError(error);
    }
  }

  return {
    data,
    dataError,
    fetchData,
  };
}

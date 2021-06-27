import firebase from 'firebase/app';
import 'firebase/firestore';

const writeToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase.firestore().collection('myCollection').doc('test').set({
        id: 'example-id',
        timestamp: firebase.firestore.Timestamp.now(),
      });
      console.log('test collection made');
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return null;
};

export default writeToCloudFirestore;

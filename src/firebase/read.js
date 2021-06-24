import firebase from 'firebase/app';
import 'firebase/firestore';

const readFromCloudFirestore = () => {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('test')
        .onSnapshot(function (doc) {
          console.log(doc.data());
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return null;
};

export default readFromCloudFirestore;

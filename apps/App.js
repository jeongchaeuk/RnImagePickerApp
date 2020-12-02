import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [img, setImg] = useState({
    uri: 'https://pbs.twimg.com/media/C_a7_E6VoAAQYfU.jpg',
  });

  const showPicker = () => {
    const options = {
      title: '이미지선택',
      cancelButtonTitle: '취소',
      takePhotoButtonTitle: '카메라',
      chooseFromLibraryButtonTitle: '저장소',
      // customButtons: [{name: 'kb', title: '카카오톡 이미지 선택'}],
      storageOptions: {
        skipBackup: true,
        path: 'Pictures/images/',
        cameraRoll: false,
        waitUntilSaved: true,
        privateDirectory: true,
      },

      // chooseWhichLibraryTitle?: string;
      // cameraType: 'front',
      // mediaType: 'photo',
      // maxWidth: 300,
      // maxHeight: 300,
      // quality?: number;
      // videoQuality?: 'low' | 'medium' | 'high';
      // durationLimit?: number;
      // rotation?: number;
      // allowsEditing: false,
      // noData?: boolean;
      // permissionDenied?: ImagePickerPermissionDeniedOptions;
      // tintColor?: number | string;
    };
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        alert('cancel.');
      } else if (res.error) {
        alert(`error: ${res.error}`);
      } else if (res.customButton) {
        //
      } else {
        setImg({uri: res.uri});
      }
    });
  };

  return (
    <View style={styles.body}>
      <Button title="이미지 선택" onPress={showPicker} />
      <Text style={styles.urlText}>{img.uri}</Text>
      <Image style={styles.image} source={img} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'yellow',
    flex: 1,
    padding: 15,
  },
  urlText: {
    color: 'black',
    margin: 8,
  },
  image: {
    backgroundColor: 'gray',
    flex: 1,
  },
});

export default App;

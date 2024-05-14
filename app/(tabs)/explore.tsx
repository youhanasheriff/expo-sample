import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, TextInput, Text, Button } from 'react-native';

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3, 'Too short').max(50, 'Too long'),
  email: Yup.string().email().required().lowercase(),
  password: Yup.string().min(6).required().lowercase().uppercase().matches(/[0-9]/, 'Password must contain a number'),
});

export default function TabTwoScreen() {

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });


  return (
    <View style={styles.titleContainer}>
      <Image
        source={require('@/assets/images/react-logo.png')}
      />
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={{ gap: 8}}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Name"
              />
              {errors.name && touched.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
              />
              {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
              <Button onPress={() => handleSubmit()} title="Submit" />
            </View>
          )}
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    gap: 8,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
});

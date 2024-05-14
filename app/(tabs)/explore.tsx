import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, TextInput, Text, Button } from 'react-native';

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { UserForm, deleteUser, saveUser } from '@/state/actions';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3, 'Too short').max(50, 'Too long'),
  email: Yup.string().email().required().lowercase(),
  password: Yup.string().min(6).required().lowercase().uppercase().matches(/[0-9]/, 'Password must contain a number'),
});


function TabTwoScreen({ user, saveUser, deleteUser }: {
  user: UserForm;
  saveUser: (user: UserForm) => void;
  deleteUser: () => void;
}) {

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
          name: user.name,
          email: user.email,
          password: user.password,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          saveUser(values);
        }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, ...formik }) => (
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
              <Button onPress={() => {deleteUser(); formik.resetForm()}} title="Delete" />
            </View>
          )}
        </Formik>
    </View>
  );
}


const mapStateToProps = (state: UserForm) => ({
  user: state,
});

const mapDispatchToProps = {
  saveUser,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabTwoScreen);

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

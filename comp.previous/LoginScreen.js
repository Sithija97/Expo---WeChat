// import React from "react";
// import { StyleSheet, Text, View, Image } from "react-native";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import { Ionicons } from '@expo/vector-icons'

// export default class LoginScreen extends React.Component {
//   state = {
//     name: ""
//   };

//   continue = () => {
//     this.props.navigation.navigate("Chat", { name: this.state.name });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.circle} />
//         <View style={{ marginTop: 64 }}>
//         <Image
//           style={{width: 230, height: 230 ,alignSelf:"center",marginTop:30}}
//           source={require('./62335.jpg')}
//         />
//         </View>
//         <View style={{ marginHorizontal: 32 }}>
//           <Text style={styles.header}>Username</Text>
//             <TextInput 
//                 style={styles.input}
//                 placeholder="DesigntoCode"
//                 onChangeText={name=>{this.setState({name});}}
//                 value={this.state.name}
//             />
//         </View>
//         <View style={styles.button}>
//             <TouchableOpacity style={styles.continue} onPress={this.continue}>
//                 <Ionicons name="md-arrow-round-forward" size={24} color="#FFF"/>
//             </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F4F5F7"
//   },
//   circle: {
//     height: 500,
//     width: 500,
//     position: "absolute",
//     backgroundColor: "#FFF",
//     borderRadius: 500 / 2,
//     left: -120,
//     top: -20
//   },
//   header: {
//     marginTop: 32,
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#2f3542"
//   },
//    input:{
//        marginTop:32,
//        height:35,
//        borderWidth: StyleSheet.hairlineWidth,
//        borderRadius:30,
//        borderColor:"#BAB7C3",
//        paddingHorizontal:26,
//        color:"#514E5A",
//        fontWeight:"600"
//    },
//    button:{
//         marginTop:64,
//         alignItems:'flex-end',
//         left: -60,
//    },
//    continue:{
//        width: 70,
//        height: 70,
//        borderRadius: 70 / 2,
//        backgroundColor:"#8c7ae6",
//        alignItems:"center",
//        justifyContent:"center",
       
//    }
// });

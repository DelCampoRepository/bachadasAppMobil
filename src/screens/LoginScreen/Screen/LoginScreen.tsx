import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useAuth } from "../../../context/AuthContext";
import { ScreenContainer } from "../../../components/ScreenContainer";
import { CustomInput } from "../../../components/CustomInput";
import React, { useState } from "react";
import { loginUsuario } from "../../../services/authService";
export const LoginScreen = () => {
  const [user, setUser] = useState<string>("jefnavcos231");
  const [pass, setPass] = useState<string>("jncos231");
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!user || !pass) {
      alert("Por favor, ingresa usuario y contraseña");
      return;
    }
    try {
      login();
      const data = await loginUsuario(user, pass);

      if (data.success) {
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {}
  };
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Image
            source={require("../../../assets/delcamp.png")}
            style={styles.image}
          />
          <CustomInput
            label="Usuario"
            placeholder="Ej: admin"
            value={user}
            onChange={setUser}
          />
          <CustomInput
            label="Contraseña"
            placeholder="****"
            secret={true}
            value={pass}
            onChange={setPass}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  loginBox: {
    width: "80%",
    height: "75%",
    backgroundColor: "white",

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "40%",
    height: "30%",
    marginBottom: 20,
    resizeMode: "contain",
    backgroundColor: "white"
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  textView: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textStyle: {
    marginBottom: 5,
    fontWeight: "bold"
  }
});

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SincronizarScreen = () => {
  const [status, setStatus] = useState("conectando");
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => setStatus("descargando"), 1500);
    setTimeout(() => setStatus("listo"), 3500);
  }, []);

  return (
    <View style={styles.container}>
      {status !== "listo" ? (
        <View style={styles.content}>
          <ActivityIndicator size="large" color="#34bc42" />
          <Text style={styles.title}>
            {status === "conectando"
              ? "Buscando servidor..."
              : "Actualizando Recetas..."}
          </Text>
          <Text style={styles.subtitle}>No cierres la aplicación</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={{ fontSize: 80 }}>✅</Text>
          <Text style={styles.title}>¡Datos Actualizados!</Text>
          <Text style={styles.subtitle}>
            Tu tablet ya tiene la última información.
          </Text>

          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Entendido</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  content: { alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 20, color: "#1c1c1e" },
  subtitle: {
    fontSize: 16,
    color: "#8e8e93",
    marginTop: 10,
    textAlign: "center"
  },
  doneButton: {
    marginTop: 40,
    backgroundColor: "#34bc42",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 12
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});

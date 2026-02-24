import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Datos de ejemplo para las ultimas recetas
const ULTIMAS_RECETAS = [
  { id: "1", nombre: "748392018472", fecha: "20/02/2026", emoji: "" },
  { id: "2", nombre: "102938475612", fecha: "19/02/2026", emoji: "" },
  { id: "3", nombre: "556677889900", fecha: "18/02/2026", emoji: "" }
];

export const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const renderReceta = ({ item }: any) => (
    <TouchableOpacity style={styles.recipeCard}>
      <View style={styles.recipeIcon}>
        <Text style={{ fontSize: 24 }}>{item.emoji}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.recipeName}>{item.nombre}</Text>
        <Text style={styles.recipeDate}>{item.fecha}</Text>
      </View>
      <Text style={styles.arrow}>〉</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.sectionTitle}>Panel de Control</Text>
        <TouchableOpacity
          style={styles.syncButtonSmall}
          onPress={() => navigation.navigate("Sinc")}
        >
          <Text style={{ fontSize: 20, marginRight: 10 }}></Text>
          <Text style={styles.syncButtonText}>SINCRONIZAR DATOS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Últimas Recetas Agregadas</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Recetas")}>
            <Text style={styles.seeAllText}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ULTIMAS_RECETAS}
          renderItem={renderReceta}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7"
  },

  topSection: {
    flex: 0.3,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
    paddingTop: 20
  },
  syncButtonSmall: {
    flexDirection: "row",
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  syncButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800"
  },

  bottomSection: {
    flex: 0.7,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1C1C1E"
  },
  seeAllText: {
    color: "#007BFF",
    fontWeight: "600"
  },
  listContent: {
    paddingBottom: 20
  },
  recipeCard: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 2
  },
  recipeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1C1E"
  },
  recipeDate: {
    fontSize: 14,
    color: "#8E8E93",
    marginTop: 2
  },
  arrow: {
    fontSize: 18,
    color: "#C7C7CC",
    paddingLeft: 10
  }
});

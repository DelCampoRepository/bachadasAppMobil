import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
import { ScreenContainer } from "../../../components/ScreenContainer";

// Datos simulados con la estructura que pediste
const RECETAS_SIMULADAS = [
  {
    id: "1",
    bachada: "748392018472",
    tabla: "T-05",
    nave: "Nave A",
    lote: "L-400"
  },
  {
    id: "2",
    bachada: "102938475612",
    tabla: "T-12",
    nave: "Nave C",
    lote: "L-402"
  },
  {
    id: "3",
    bachada: "556677889900",
    tabla: "T-01",
    nave: "Nave B",
    lote: "L-499"
  },
  {
    id: "4",
    bachada: "998877665544",
    tabla: "T-08",
    nave: "Nave A",
    lote: "L-400"
  }
];

export const RecetasScreen = () => {
  const [search, setSearch] = useState("");

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.labelBachada}>ID Bachada:</Text>
        <Text style={styles.idBachada}>{item.bachada}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.cardDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Tabla</Text>
          <Text style={styles.detailValue}>{item.tabla}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Nave</Text>
          <Text style={styles.detailValue}>{item.nave}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Lote</Text>
          <Text style={styles.detailValue}>{item.lote}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScreenContainer>
      <View style={styles.container}>
        {/* SECCIÓN DE BÚSQUEDA */}
        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Buscar por ID de bachada (12 dígitos)..."
              value={search}
              onChangeText={setSearch}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>BUSCAR</Text>
          </TouchableOpacity>
        </View>

        {/* LISTADO DE RECETAS */}
        <FlatList
          data={RECETAS_SIMULADAS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7"
  },
  searchContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA"
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginRight: 15,
    height: 55
  },
  searchIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1C1C1E"
  },
  searchButton: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    justifyContent: "center"
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14
  },
  listContent: {
    padding: 20
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  labelBachada: {
    fontSize: 14,
    color: "#8E8E93",
    fontWeight: "600"
  },
  idBachada: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2a61df",
    fontFamily: "monospace"
  },
  divider: {
    height: 1,
    backgroundColor: "#F2F2F7",
    marginVertical: 12
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  detailItem: {
    alignItems: "flex-start"
  },
  detailLabel: {
    fontSize: 12,
    color: "#8E8E93",
    textTransform: "uppercase",
    marginBottom: 4
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C1C1E"
  }
});

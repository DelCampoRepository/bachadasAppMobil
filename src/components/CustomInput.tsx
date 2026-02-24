import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  placeholder: string;
  secret?: boolean;
  value: string;
  onChange: (text: string) => void;
}

export const CustomInput = ({
  label,
  placeholder,
  secret,
  value,
  onChange,
}: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secret}
      value={value}
      onChangeText={onChange}
      placeholderTextColor="#999"
    />
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 15, width: "80%" },
  label: { fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 5 },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
});

import React from "react";
import { ExpoRoot } from "expo-router";

// necessário para o Expo Router funcionar
export default function App() {
  const ctx = require.context("./app");

  return React.createElement(ExpoRoot, {
    context: ctx
  });
}
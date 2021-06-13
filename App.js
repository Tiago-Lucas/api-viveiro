import { StatusBar } from "expo-status-bar";
import React from "react";
import Login from "./app/views/login/login";

export default function App(){
  return(
    <>
    <Login/>
    <StatusBar style="light"/>
    </>
  );
}
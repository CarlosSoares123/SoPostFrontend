import react from '/react.png';
import reactIcons from '/react-icons.png';
import reactRouter from '/react-router.svg';
import styledComponents from '/styled-components.svg'
import jwt from '/jwt.svg'
import express from '/express.png'
import node from '/nodejs-2.svg'
import axios from '/axios.png'

import { Apresentacion } from '../Home/Components/Apresentacion/Apresentacion.jsx';
import { Card } from '../Home/Components/Card/Card.jsx';
import { HardSkill } from '../Home/Components/HardSkill/HardSkill.jsx';
import { Header } from '../Home/Components/Header/Header.jsx';

export const Home = () => {
  return (
    <>
    <Header/>
    <main>
      <Apresentacion/>
      <HardSkill>
        <Card imgTec={react} nomeTec={"React Js"}/>
        <Card imgTec={reactRouter} nomeTec={"React-Router-Dom"}/>
        <Card imgTec={reactIcons} nomeTec={"React-Icons"}/>
        <Card imgTec={styledComponents} nomeTec={"Styled-Components"}/>
        <Card imgTec={axios} nomeTec={"Axios"}/>
        <Card imgTec={node} nomeTec={"Node js"}/>
        <Card imgTec={express} nomeTec={"Express"}/>
        <Card imgTec={jwt} nomeTec={"Jwt"}/>
        <Card imgTec={''} nomeTec={"Cors"}/>
        <Card imgTec={''} nomeTec={"Cookie-Parser"}/>
        <Card imgTec={''} nomeTec={"Bcrypt"}/>
        <Card imgTec={''} nomeTec={"Muller"}/>
      </HardSkill>
    </main>
    </>
  )
}

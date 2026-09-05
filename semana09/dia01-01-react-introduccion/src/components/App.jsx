// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// snippet: rfc

// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

//snippet: rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

//export default App

// Anidar componentes dentro de componentes

// function ComponenteSaludo() {
//   return <h4>Hola, soy un componente anidado</h4>
// }


// function ComponenteDespedida() {
//   return <h4>Adios a todos</h4>
// }


// const App = () => {
//   return (
//     <section>
//       <h3>Componente anidados</h3>
//       <ComponenteSaludo />
//       <ComponenteDespedida />
//     </section>
//   )
// }

// import ComponenteSaludo from './components/ComponenteSaludo'
// import ComponenteDespedida from './components/ComponenteDespedida'


// const App = () => {

// const ComponenteSaludo = () => {
//   return (
//     <section>
//       <h3>Componente Saludo</h3>
//       <ComponenteSaludo />
//       <ComponenteDespedida /> 
//     </section>
//   )
// }

// export default App
//TODO: crear el componente ComponenteDespedida en su propio archivo e imporarlo en App.jsx, luego renderizarlo dentro del componente App.  

//usando espresiones de JSX, renderizar el componente ComponenteSaludo dentro del componente App.


// import nombreExportado, {frutas, curso} from "./modulo.js"


// const App = () => {

//   const suma = 8 + 9
//   const nombre = 'German'

//   //comentario en react.js

//   return (
//     <section>
//       <h1>Componente Saludo</h1>
//       <p>{suma}</p>
//       <p>{nombre}</p>

//       <p>Hola {nombre}</p>
//       <p>{`Hola ${nombre}`}</p>

//       {/*comentario en React.js dentro del JSX*/}

      
//       <p>{frutas}</p>
//       <p>{nombreExportado}</p>
//       <p>{JSON.stringify(curso)}</p>
//       <p>{curso.nota}</p>
      
//     </section>
//   )
// }


// 09 Propiedades de un componente (ahora el componente sera reutilizable)

// const BienvenidaPersonalizada = (props) => {
//   return <h3>Hola {props.nombre}, tu edad es {props.edad ?? '0'}</h3>
// }

// const App = () => {
//   return (
//     <section>
//       <h4>Propiedades de un componente</h4>
//       <BienvenidaPersonalizada nombre='German' edad='40'/>
//       <BienvenidaPersonalizada nombre='Sofia' edad='33'/>
//       <BienvenidaPersonalizada nombre='German'/>
//     </section>
    
//   )
// }

// export default App

// 10 - Propiedades de un componente (con destructuring)

const BienvenidaPersonalizada = ({nombre, edad, color}) => {
  return <h3>Hola {nombre}, tu edad es {edad ?? '0'} años, tu color favorito es {color}</h3>
}

const App = () => {
  return (
    <section>
      <h4>Propiedades de un componente (con Destructuring)</h4>
      <BienvenidaPersonalizada nombre='German' edad='40' color='Azul'/>
      <BienvenidaPersonalizada nombre='Sofia' edad='33'/>
      <BienvenidaPersonalizada nombre='German'/>
    </section>
    
  )
}

export default App


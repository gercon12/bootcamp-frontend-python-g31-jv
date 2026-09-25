import Counter from "./components/Counter";
import CounterConcustomHooks from "./components/CounterConcustomHooks";
import ProductList from "./components/ProductList";



const App = () => {
  return (
    <main className="App">
      <h1 className="text-2xl text-center py-4">Custom Hooks</h1>

      <p>Es una funcion de JavaScript que permite reutilizar logica de estado y efectos en componentes.</p>

      <ul>
        <li>No es un componente</li>
        <li>No devuelve JSX necesariamente</li>
        <li>es una funcion que puede utilizar otros hooks: useState, useEffect, customHooks etc.</li>

      </ul>

      <Counter/>
      <CounterConcustomHooks/>
      <ProductList/>

    </main>

  );
}

export default App;

import { useState } from 'react';

function App() {
  const monsteraPrice = 8;
  const [somme, updateSomme] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier',
  ];
  return isOpen ? (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€ --
        <button onClick={() => updateSomme(somme + 1)}>Ajouter</button>
        --
        <button onClick={() => updateSomme(0)}>Vider</button>
      </div>
      <h3>Total : {monsteraPrice * somme}€</h3>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
  );
}
export default App;

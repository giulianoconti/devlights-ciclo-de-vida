import { useEffect, useState } from "react";

export function App() {

  const [name, setName] = useState('Giuliano');

  useEffect(() => {
    console.log('Mounted empty dependency');
    return () => {
      console.log('Unmounted empty dependency');
    }
  }, []);
  useEffect(() => {
    console.log('Mounted no dependency');
    return () => {
      console.log('Unmounted no dependency');
    }
  });
  useEffect(() => {
    console.log('Mounted with dependency');
    return () => {
      console.log('Unmounted with dependency');
    }
  }, [name]);

  console.log('render');
  
  const handleClick = () => {
    name === 'Giuliano' ? setName('Giuliano Conti') : setName('Giuliano');
  }

  return (
    <>
      <p>{name}</p>
      <button onClick={handleClick}>Change name</button>
    </>
  );
}
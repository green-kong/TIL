import { useState, createContext } from 'react';

const Global = createContext();

const D = (props) => {
  return <>hello </>;
};

const C = (props) => {
  return (
    <>
      <D name={props.name} />
    </>
  );
};

const B = (props) => {
  return (
    <>
      <C name={props.name} />
    </>
  );
};

const A = (props) => {
  return (
    <>
      <B name={props.name} />
    </>
  );
};

const Context = () => {
  const [name, setName] = useState('kong');

  const obj = { name, setName };
  return (
    <>
      <Global.Provider value={obj}>
        <A name={name} />
      </Global.Provider>
    </>
  );
};

export default Context;

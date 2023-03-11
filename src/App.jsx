import { useState } from 'react'
import styles from "/Users/user/Downloads/FrontIII/Clase8/src/app.module.css"

function App() {

//DECLARAMOS DOS ESTADOS PARA LOS INPUTS

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");


//CREAMOS LOS MANEJADORES DE EVENTOS PARA CADA INPUT
const onChangeUserName = (e) => setUserName(e.target.value);
const onChangePassword = (e) => setPassword(e.target.value);

const validateUserName = (userName) => {
  // Eliminamos los espacios en blanco
  const withoutSpaces = userName.trim();
  // Validamos la extension
  if (withoutSpaces.length > 2) {
  return true;
  } else {
  return false;
  }
  };

  const validatePassword = (password) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = password.trim();
    // Separamos el string en un array para luego
    // recorrelo y validar si existe al menos un numero
    const passwordAsArray = withoutSpaces.split("");
    // Some nos retorna true si al menos una de las
    // iteraciones es verdadera
    const hasNumber = passwordAsArray.some((character) => {
    // Si el valor es NaN, no es un numero
    if (isNaN(character)) {
    return false;
    } else {
    return true;
    }
    });
    // Validamos la extension y que haya al menos un numero
    if (withoutSpaces.length > 5 && hasNumber) {
    return true;
    } else {
    return false;
    }
    };


//CREAMOS EL MANEJADOR PARA EL EVENTO ONSUBMIT
  const onSubmitForm = (e) => {

    e.preventDefault();

    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);

    // Si al menos una de las validaciones es falsa
    // mostramos un mensaje de error
    if (!isPasswordValid || !isUsernameValid) {
      alert("Alguno de los datos ingresados no son correctos");
    } else {
      // Por ahora solo mostramos el nombre del usuario
      alert(`Bienvenido: ${userName}`);
    }
  
  };





  return (
    <div className={styles.App} >
     <h3 className={styles.title}>Iniciar Sesión</h3>


<div className={styles.formulario}>

<form onSubmit={onSubmitForm}  className={styles.contenido} >



<input className={styles.ingreso}
type="text"
placeholder="Nombre de usuario"
value={userName}
onChange={onChangeUserName}
/>
<input className={styles.ingreso}
type="password"
placeholder="Password"
value={password}
onChange={onChangePassword}
/>

<button className={styles.boton} type="submit">Enviar</button>
</form>
</div>
</div>
);
}


export default App;

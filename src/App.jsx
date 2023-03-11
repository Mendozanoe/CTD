import { useState } from 'react'
import styles from "/Users/user/Downloads/FrontIII/MendozaNoemi/ExamenI/src/app.module.css"
import Card from './component/Card';

function App() {
  const [userName, setUserName] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [selectMascota, setSelectMascota] = useState("");
  const [errorSelect, setErrorSelect] = useState("");
  const [send, setSend] = useState(false);

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangeEdad = (event) => {
    setEdad(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
 
  const onChangeSelect = (event) => {
    setSelectMascota(event.target.value);
  };

  const validUserName = (userName) => {
    const withoutSpace = userName.trim();

    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setErrorSelect( "Por favor chequea que la información sea correcta");
      return false;
    }
  };

  const completeInput = (userName, edad, email) => {
    if (userName === "" || edad === "" || email === "" ) {
      setErrorSelect("Por favor chequea que la información sea correcta");
      setSend(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validUserName(userName);

    const isCompleteInput = completeInput(userName, edad, email);

    if (selectMascota === "") {
      setErrorSelect("seleccione la mascota a adoptar");

      return;
    }

    if (isNameValid && isCompleteInput) {
      setSend(true);
      setErrorSelect("");
    }
  };




  return (
    <div className={styles.app}>

        <h3 className={styles.titulo}>CENTRO DE ADOPCION DE MASCOTAS</h3>
        <form onSubmit={handleSubmit} className={styles.contenido}>
          <input className={styles.ingreso}
            type="text"
            placeholder="Nombre"
            value={userName}
            onChange={onChangeUserName}
          />
          <input className={styles.ingreso}
            type="text"
            placeholder="Edad"
            value={edad}
            onChange={onChangeEdad}
          />
          <input className={styles.ingreso}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={onChangeEmail}
          />
          
          <h3>Que mascota te gustaria adoptar?</h3>
          <select className={styles.mascota}
          
            placeholder="Elegir Mascota"
            value={selectMascota}
            onChange={onChangeSelect}
          >
            <option value="" disabled default className={styles.mascota}>
              Mascotas
            </option>
            <option value="Erizo">Erizo</option>
            <option value="Gato">Gato</option>
            <option value="Perro">Perro</option>
            <option value="Conejo">Conejo</option>

          </select>
          <input className={styles.enviar} type="submit" value="Enviar" />
        </form>
        <div className="error">{errorSelect}</div>
        {send && (
          <Card
            userName={userName}
            edad={edad}
            email={email}
            selectMascota={selectMascota}
            
          />
        )}
      </div>

  )
}

export default App

import React from "react";
import styles from "/Users/user/Downloads/FrontIII/MendozaNoemi/ExamenI/src/card.module.css"



const Card = ({ userName, email, selectMascota }) => {

    return (
        <div className={styles.tarjeta}>

            <h2>Felicidades {userName}!!! </h2>
            <h3>Adoptaste un: {selectMascota} </h3>
            <h3>Te enviaremos a {email} carnet de vacunas </h3>


        </div>
    );
};

export default Card;
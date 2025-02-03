import React from 'react';
import { NavLink } from "react-router";
import "./Error.scss";

export function Error() {
  return (
    <>
        <div className='error-page'>
            <h1>404</h1>
            <h2>Oops ! La page que vous demandez n'existe pas</h2>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    </>
  )
}

export default Error
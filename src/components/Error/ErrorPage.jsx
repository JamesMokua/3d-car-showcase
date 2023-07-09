import React from 'react'
import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div id="error-page">
      <h1 className='error-title'>Oops!</h1>
      <p className='error-summary'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='actual-error'>Error:{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
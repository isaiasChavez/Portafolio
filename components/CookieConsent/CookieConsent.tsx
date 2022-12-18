import * as React from "react";
import styles from "./styles.module.css";
interface Props {
  // Propiedad opcional que especifica el mensaje de cookies a mostrar al usuario
  message?: string;
}

const CookieConsent: React.FunctionComponent<Props> = ({
  message = "Este sitio utiliza cookies para mejorar su experiencia de usuario.",
}) => {
  const [accepted, setAccepted] = React.useState(false);

  // Método que se llama cuando el usuario hace clic en el botón "Aceptar"
  const handleAccept = (): void => {
    setAccepted(true);
    localStorage.setItem("isahasaceptcookies", "true");
    // Aquí podrías almacenar en algún lugar que el usuario ha aceptado las cookies
  };
  React.useEffect(() => {
    const has = localStorage.getItem("isahasaceptcookies");
    if (has === "true") {
      setAccepted(true);
    }
  }, []);

  // Si el usuario ha aceptado las cookies, no mostramos nada
  if (accepted) {
    return null;
  }

  // Si no, mostramos el mensaje y el botón para aceptar las cookies
  return (
    <div className={` ${styles.cookieConsent} bg-secondary-200`}>
      <p>{message}</p>
      <button
        className={` ${styles.button}  shadow-md `}
        onClick={handleAccept}
      >
        Aceptar
      </button>
    </div>
  );
};

export default CookieConsent;

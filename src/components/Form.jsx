/*

* Simple Form

* Form component

*/

//! Import des composants
import StepTwo from "./StepTwo";

//! Import des hooks
import { useState } from "react";

//* Fonction Form
function Form() {
  //Code javascript

  //States reliées aux inputs du formulaire
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //State permettant de gérer l'affichage des components
  const [formState, setFormState] = useState(false);

  // * Fonction handleSubmit
  //Fonction qui est déclenchée une fois le formulaire validé
  const handleSubmit = (event) => {
    //
    // Empêche le rafraichissement par défaut du navigateur lors de la soumission
    event.preventDefault();

    // Si password différent de confirm password
    if (password !== confirmPassword) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setFormState(true);
    }
  };

  //Return
  return (
    <>
      {formState || (
        <section className="container">
          <h3>Create account</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder="Jean Dupont"
                name="name"
                //Fonction permettant d'actualiser le state
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={userName}
              ></input>
            </div>

            <div>
              <p>Email</p>
              <input
                type="email"
                placeholder="jeandupont@lereacteur.io"
                name="email"
                //Fonction permettant d'actualiser le state
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              ></input>
            </div>

            <div>
              <p>Password</p>
              <input
                type="password"
                placeholder="lErEaCtEuR2020"
                name="password"
                //Fonction permettant d'actualiser le state
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              ></input>
            </div>

            <div>
              <p>Confirm your password</p>
              <input
                type="password"
                placeholder="lErEaCtEuR2020"
                name="confirm-password"
                //Fonction permettant d'actualiser le state
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                value={confirmPassword}
              ></input>
            </div>

            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </section>
      )}

      {/* //Appel de StepTwo si formState = true*/}
      {formState && (
        <StepTwo
          userName={userName}
          email={email}
          password={password}
          setFormState={setFormState}
        ></StepTwo>
      )}
    </>
  );
}

export default Form;

/*

* Simple Form

* StepTwo

*/

//! Import des composants
import Form from "./Form";

//* Fonction StepTwo
function StepTwo(props) {
  //Destructuring de props
  const { userName, email, password, setFormState } = props;
  console.log(props);

  //Return
  return (
    <>
      <section className="container">
        <h3>Results</h3>

        <div className="form">
          <div>
            <p>Name : {userName}</p>
          </div>

          <div>
            <p>Email : {email}</p>
          </div>

          <div>
            <p>Password : {password}</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              setFormState(false);
            }}
          >
            Edit your information
          </button>
        </div>
      </section>
    </>
  );
}

export default StepTwo;

/*

* Simple Form

* StepTwo

*/

//* Fonction StepTwo
function StepTwo(props) {
  //Destructuring de props
  const { userName, email, password } = props;
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
      </section>
    </>
  );
}

export default StepTwo;

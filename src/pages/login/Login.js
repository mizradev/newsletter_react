import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//styles
import "./login.css";

//components
import Form from "../../components/Form";

function Login() {
  const handleSubmit = (e) => {};

  return (
    <Container maxWidth="sm" className="container-form">
      <h1 className="title-login">Login</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Form classes="myForm" Function={handleSubmit}>
            <Grid item xs={12}>
              <div className="container-input">
                <TextField
                  id="standard-basic"
                  label="Usuario"
                  className="input-form"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="container-input">
                <TextField
                  id="standard-password-input"
                  label="Contraseña"
                  type="Password"
                  className="input-form"
                />
              </div>
            </Grid>
            <div className="button-form">
              <Button variant="contained">Login</Button>
            </div>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;

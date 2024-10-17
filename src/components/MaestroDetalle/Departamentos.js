import React, { Component } from "react";
import Empleados from "./Empleados";
import axios from "axios";
import Global from "../Global";

export default class Departamentos extends Component {
  selectDepartamentos = React.createRef();

  state = {
    departamentos: [],
    idDepartamento: 0,
  };

  mostrarEmpleado = (e) => {
    e.preventDefault();

    let idDepartamento = this.selectDepartamentos.current.value;
    this.setState({
      idDepartamento: idDepartamento,
    });
  };

  loadDepartamentos = () => {
    let request = "api/departamentos";
    let url = Global.urlApiDepartamentos + request;
    axios.get(url).then((response) => {
      this.setState({
        departamentos: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Departamentos</h1>
        <form>
          <label>Selecciona un departamento: </label>
          <select ref={this.selectDepartamentos}>
            {
              //aqui el codigo donde iran los option
              this.state.departamentos.map((departamento, index) => {
                return (
                  <option key={index} value={departamento.Numero}>
                    {departamento.Nombre}
                  </option>
                );
              })
            }
          </select>
          <button onClick={this.mostrarEmpleado}>Mostrar Empleados</button>
        </form>
        {
            this.state.idDepartamento != 0 &&
            <Empleados iddepartamento={this.state.idDepartamento}/>
        }
       
      </div>
    );
  }
}

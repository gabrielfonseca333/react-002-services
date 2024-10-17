import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class Empleados extends Component {
  state = {
    empleados: [],
  };

  loadEmpleados = () => {
    let idDepartamento = this.props.iddepartamento;
    let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
    let url = Global.urlApiEmpleados + request;
    axios.get(url).then((response) => {
      console.log("perrito caliente");
      this.setState({
        empleados: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadEmpleados();
  };

  componentDidUpdate = (prevProps) => {
    
    // Solo ejecuta loadEmpleados si el iddepartamento ha cambiado
    if (this.props.iddepartamento !== prevProps.iddepartamento) {
      this.loadEmpleados();
    }
    //Explicación:
    /*prevProps: Este es el valor de props antes de la actualización.
    Comparación de this.props.iddepartamento y prevProps.iddepartamento: 
    Si el iddepartamento cambió (es decir, si los props son diferentes), 
    entonces llamamos a loadEmpleados(). Si no ha cambiado, no hacemos nada, 
    previniendo el ciclo infinito.*/
  };

  render() {
    return (
      <div style={{ border: "solid 1px blue" }}>
        <h1 style={{ color: "blue" }}>Empleados</h1>
        <ul>
          {
            //codigo para insertar datos de empleados en <li>
            this.state.empleados.map((empleado, index) => {
              return <li key={index}>{empleado.apellido}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Comic extends Component {
  render() {
    return (
      <div style={{ border: "3px solid blue" }}>
        <h2>{this.props.titulo}</h2>
        <p>{this.props.descripcion}</p>
        <img src={this.props.imagen} />
        <button
          onClick={() => {
            {
              this.props.marcarfavorito(this.props.comic);
            }
          }}
        >
          Favorito
        </button>
        <button onClick={()=>{
            this.props.eliminar(this.props.index)
        }}>Eliminar</button>
      </div>
    );
  }
}

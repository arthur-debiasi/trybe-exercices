    import React, { Component } from 'react';
    import './App.css';

    const Task = (value, index) => {
      return (
        <li key={`${value}-${index}`}>{value}</li>
      );
    }

    const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar', 'Fazer exercício'];

    class App extends Component {
      render() {
        return (
          <ul>{ tarefas.map((tarefa, index) => Task(tarefa, index)) }</ul>
        );
      }
    }

    export default App;
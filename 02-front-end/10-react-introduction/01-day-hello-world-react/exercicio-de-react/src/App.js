    import React, { Component } from 'react';
    import './App.css';

    const Task = (value, index) => {
      return (
        <li key={`task-${index}`}>{value}</li>
      );
    }

    const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar', 'Jantar', 'Dormir'];

    class App extends Component {
      render() {
        return (
          <ul>{ tarefas.map((tarefa, index) => Task(tarefa, index)) }</ul>
        );
      }
    }

    export default App;
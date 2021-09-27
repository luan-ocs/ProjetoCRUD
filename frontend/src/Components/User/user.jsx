import React from "react";
import { Component } from "react";
import Main from "../Template/Main";
import axios from "axios";

const HeaderProps = {
  icon: "users",
  title: "Usuarios",
  subtitle: "Cadastro de Usuarios: Incluir, Excluir, Alterar, Listar",
};

const baseUrl = "http://localhost:3001/users";
const inicialState = {
  user: {
    name: "",
    email: "",
  },
  list: [],
};

export default class UsersCrud extends Component {
  state = { ...inicialState };

  componentDidMount() {
    axios(baseUrl).then((resp) => this.setState({ list: resp.data }));
  }

  clear() {
    this.setState({ user: inicialState.user });
  }

  save() {
    const user = this.state.user;
    if (user.name !== "" && user.email !== "") {
      const method = user.id ? "put" : "post";
      const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
      axios[method](url, user).then((response) => {
        const list = this.getUpdatedList(response.data);
        this.setState({ user: inicialState.user, list });
      });
    }
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updateField(e)}
                placeholder="digite o Nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updateField(e)}
                placeholder="digite o Email..."
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={(e) => this.save(e)}>
              Salvar
            </button>
            <button
              className="btn btn-secondary ms-2"
              onClick={(e) => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
    });
  }

  renderTable() {
    return (
      <table className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={(e) => this.load(user)}
            >
              <i className="fa fa-pencil"></i>
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger ms-2"
              onClick={(e) => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Main {...HeaderProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}

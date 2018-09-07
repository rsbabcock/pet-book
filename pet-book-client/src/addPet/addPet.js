import React, { Component } from "react";
import "./addPet.css";

class AddPetForm extends Component {
// a component to add data for pet, 
// will also need to get data for breed, petType and user.
//  Will need to post/creat to allergy, 
// commands notes will be created later, in profile view
    
  state = {
    name: "",
    image: "",
    nick_name: "",
    birthday: "",
    gender: "",
    houdini: false,
    crate_quirks: "",
    crate_trained: true,
    food_quirks: "",
    aggression_notes: "",
    bed_time: "",
    eating_times: "",
    fav_toy: "",
    potty_needs: "",
    walking_quirks: "",
    deceased: false,
    allergy: [],
    command: []
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/product_types/`)
    .then((response) => {
      return response.json();
    })
    .then((product_types) => {
      console.log('types', product_types);
      this.setState({product_types})
    })
    .catch((err) => {
      console.log("fetch no like you, brah", err);
    })
  }

  onChange(e) {
    const productState = Object.assign({}, this.state);
    console.log("dropdown ", e.target.name)
    productState[e.target.name] = e.target.value;
    this.setState(productState);
  }

  displaySuccess(data) {
    console.log("New Product Added!", data)
  }

  createProduct() {
    const {title, description, price, quantity, product_type} = this.state
    const authKey = this.props.token

    return fetch(`http://127.0.0.1:8000/products/`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        price,
        quantity,
        product_type
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${authKey}`
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      return this.displaySuccess(response)
    })
    .catch((err) => {
      console.log("auth no like you, brah", err);
    });
  }

  render() {
    let optionItems = this.state.product_types.map((type) => {
      return <option key={type.title} value={type.url}>{type.title}</option>
    });
    optionItems.unshift(<option key='blank' value={this.state.defaultValue}>select a product category</option>)
    return (
      <div>
        <h1>Sell yer stuff, make some cash</h1>
        <div>
            <input
              type="text"
              placeholder="title"
              name="title"
              onBlur={e => this.onChange(e)}
            />
            <select onChange={e => this.onChange(e)} name="product_type">
              {optionItems}
            </select>
            <input
              type="text"
              placeholder="description"
              name = "description"
              onBlur={e => this.onChange(e)}
            />
            <input
              type="number"
              step="0.01"
              placeholder="price"
              name="price"
              onBlur={e => this.onChange(e)}
            />
            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              onBlur={e => this.onChange(e)}
            />
          </div>
          <button onClick={() => this.createProduct()}>Submit</button>
      </div>
    )
  }
}

export default AddPetForm

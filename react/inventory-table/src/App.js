import React, { Component } from 'react';
import './App.css';

class Category extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <td>{category}</td>
      </tr>
    );
  }
}

class Products extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
    
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];

    let currentCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      
      if (product.category !== currentCategory) {
        rows.push(<Category category={product.category} key={product.category}/>)
      }
      rows.push(<Products product={product} key={product.name}/>);
      currentCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      );
    }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
  }

  handleFilterChange(event) {
    this.props.onFilterTextChange(event.target.value);
    // console.log('change event', event)
  }

  handleStockChange(event) {
    this.props.onStockChange(event.target.checked);
    // console.log('stock change ', event)
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input type="text" placeholder="Search.." value={filterText} onChange={this.handleFilterChange}></input>
        <p>
          <input type="checkbox" checked={inStockOnly} onChange={this.handleStockChange}></input>
          Only show products in stock
        </p>
      </form>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleStock = this.handleStock.bind(this);
  }

  handleFilter(filterText) {
    this.setState(
      {
        filterText: filterText
      })
  }

  handleStock(inStockOnly) {
    this.setState(
      {
        inStockOnly: inStockOnly
      }
    )
  }

  render() {


    return (
      <div className="App">
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilter} onStockChange={this.handleStock}/>
        <ProductTable products={PRODUCTS} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;

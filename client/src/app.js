import React from 'react'
import Item from './components/item.js'
import AddItem from './components/addItem.js'

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [{name: 'corn'}, {name: 'milk'}, {name: 'change spark plugs'}]
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem(e) {
    e.preventDefault()
    let text = document.getElementsByClassName('input')[0]
    let newItem = {name: text.value}
    text.value = ''

    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    return (<div>
      {this.state.items.map((item, index) => {
        return <Item key={index} item={item}/>
      })}
      <AddItem handleAddItem={this.handleAddItem}/>
    </div>)
  }
}

import React from 'react'
import Item from './components/item.js'
import AddItem from './components/addItem.js'

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [{name: 'corn'}, {name: 'milk'}, {name: 'change spark plugs'}],
      done: []

    }
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
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

  handleSwitch(e) {
    e.preventDefault()
    let index = document.getElementsByClassName('completed')[0]
    if(index.style['z-index'] === '1') {
      index.style['z-index'] = 0
    } else {
      index.style['z-index'] = 1
    }
  }

  handleCheck(index) {
    let items = this.state.items
    let done = this.state.done

    done.push(items[index])
    items.splice(index, 1)

    this.setState({items, done})
  }

  render() {
    return (<div>
      <div className='main'>
        <div className='completed list'>
          {this.state.done.map((item, index) => {
            return <Item key={index} item={item}/>
          })}
        </div>
        <div className='todo list'>
          {this.state.items.map((item, index) => {
            return <Item key={index} index={index} item={item} handleCheck={this.handleCheck}/>
          })}
        </div>
        <AddItem handleAddItem={this.handleAddItem}/>
      </div>
      <form>
        <button onClick={this.handleSwitch}>Switch</button>
      </form>
    </div>)
  }
}

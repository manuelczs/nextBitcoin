class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    let list = '';

    if(this.state.currency === 'USD') {
      list = <li className="">
      Bitcoin rate for {this.props.bpi.USD.description}
      : <span className="tag is-info"> {this.props.bpi.USD.code}</span>
      <strong>{this.props.bpi.USD.rate}</strong>
      </li>
    } else if(this.state.currency === 'GBP') {
      list = <li className="">
      Bitcoin rate for {this.props.bpi.GBP.description}
      : <span className="tag is-info">{this.props.bpi.GBP.code}</span>
      <strong>{this.props.bpi.GBP.rate}</strong>
      </li>
    } else if(this.state.currency === 'EUR') {
      list = <li className="">
      Bitcoin rate for {this.props.bpi.EUR.description}
      : <span className="tag is-info">{this.props.bpi.EUR.code}</span>
      <strong>{this.props.bpi.EUR.rate}</strong>
      </li>
    }

    return(
      <div>
        <ul className="">
          {list}
        </ul>
        <br/>
        <div className="select is-medium is-info">
          <select onChange={e => this.setState({ currency: e.target.value })}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Prices;
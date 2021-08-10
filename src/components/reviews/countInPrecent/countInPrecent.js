import React, {Component} from 'react';

const countInPrecent = (View) => {
  return class extends Component {
        state = {
            precPositive: 0,
            precNeutral: 0,
            precNegative: 0,
        }
        componentDidMount() {
            const {countPositive, countNeutral, countNegative} = this.props;
            const all = countPositive + countNeutral + countNegative;
            this.setState({
                precPositive: Math.floor(countPositive / all * 100),
                precNeutral: Math.floor(countNeutral / all * 100),
                precNegative: Math.floor(countNegative / all * 100),
            })
        }

        render() {
            const {precPositive, precNeutral, precNegative} = this.state;
            return <View {...this.props} precPositive={precPositive} precNeutral={precNeutral} precNegative={precNegative}/>
        }
  }
}

export default countInPrecent;
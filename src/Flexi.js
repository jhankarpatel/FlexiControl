import React, { Component } from 'react';

class Flexi extends Component {
      onFlexiSubmit = (e) =>{         
        e.preventDefault();
        this.props.onSubmit();
      }
    render() {
        var namesList = this.props.config.map(function(item){     
          return <div>
              <label htmlFor={item.name}>{item.label} : </label>  
              {item.type ==="TextField"? (<input type={item.type} name={item.name} value={item.value}/>): 
              (<select>{item.values.map(x => <option>{x}</option>)}</select>)} 
            </div>            
        })
        return <form onSubmit={this.onFlexiSubmit}>
            <ul>{ namesList }
            <button type="submit">Submit</button>            
            </ul>
        </form>;
      }
}

export default Flexi;
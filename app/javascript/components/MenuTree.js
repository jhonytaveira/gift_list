import React, { Component } from 'react'

export default class MenuTree extends Component {
  constructor (props) {
    super(props)
  
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e, subcategoryId) {
    e.preventDefault()
    
    this.props.byCategory(subcategoryId)
  }
  
  render () {
    const {
      subcategories,
      categories,
    } = this.props
    
    return (
      <div>
        <ul className="menu-tree">
          {
            categories.map(({name, id}) => {
              return (
                <section className="col-1-4 no-padding" key={`key${id}`}>
                  <li className="collapse">
                    <input type="checkbox"
                           id={id}
                           name={`category-${id}`}
                    />
                    <label htmlFor={id}>
                      {name}
                    </label>
                    
                    {
                      subcategories.filter((subcategory => subcategory.categoryId === id))
                        .map(({name, id}) => {
                          return (
                            <ul key={`key${id}`}>
                              <li onClick={(e) => this.handleChange(e, id)}>
                                <a href="#" id={`subcategory-${id}`} title={name}>
                                  {name}
                                </a>
                              </li>
                            </ul>
                          )
                        })
                    }
                  </li>
                </section>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

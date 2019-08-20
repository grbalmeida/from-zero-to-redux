import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './home.css'
import { List, NewList } from 'pages/home'
import { getListTotal } from 'store/reducers/list'

const Home = ({ items, list, total }) => (
  <div className='page-container'>
    <NewList />
    {!!items.length && <List total={total} list={list} />}
  </div>
)

Home.propTypes = {
  items: PropTypes.array.isRequired,
  list: PropTypes.string,
  total: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  ...state.list,
  total: getListTotal(state)
})

export default connect(mapStateToProps, null)(Home)

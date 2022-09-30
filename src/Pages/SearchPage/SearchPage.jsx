import React, { useEffect, useState, useCallback } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Select } from 'antd';
import {
  getAllCategoryApi,
  getProductByCategoryApi,
  searchProductAction,
  searchProductApi,
} from '../../redux/reducers/productReducer';
import SideBar from '../../components/SideBar/SideBar';
import Product from '../../components/Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import * as lodash from 'lodash';
import { useMemo } from 'react';

const { Search } = Input;
const { Option } = Select;

export default function SearchPage() {
  const { arrProduct, arrCat } = useSelector((state) => state.productReducer);
  // const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value) {
      const actionThunk = searchProductApi(value);
      dispatch(actionThunk);
    } else if (value === '') {
      dispatch(searchProductAction([]));
    }
  };
  const totalProduct = useMemo(() => {
    return arrProduct.reduce((accumulator, current, index) => {
      if (current) {
        accumulator += 1;
      }
      return accumulator;
    }, 0);
  }, [arrProduct]);

  const onSelect = (e) => {
    let action = {};
    if (e === true) {
      action = searchProductAction(
        lodash.orderBy(arrProduct, (prod) => prod.price, 'asc')
      );
    } else {
      action = searchProductAction(
        lodash.orderBy(arrProduct, (prod) => prod.price, 'desc')
      );
    }
    dispatch(action);
  };

  const handleSearchByCat = useCallback((value) => {
    dispatch(getProductByCategoryApi(value));
  }, []);

  useEffect(() => {
    dispatch(getAllCategoryApi());
  }, []);

  // const filteredList = useMemo(handleCheck,[productList,selectCategory])
  return (
    <div className='searchPage container' style={{ marginBottom: '105px' }}>
      <h3 className='title-searchPage'>Search</h3>
      <div className='row'>
        <div className='col-left'>
          <SideBar arrCat={arrCat} onSearchByCat={handleSearchByCat} />
        </div>
        <div className='col-right'>
          <div className='frm-search'>
            <Search
              className='search'
              placeholder='input product keyword ...'
              prefix={<SearchOutlined />}
              onSearch={onSearch}
              enterButton='Search'
              size='large'
            ></Search>
          </div>
          <Divider />
          <div className='result mb-5'>
            <div className='wrapperResult bg-light'>
              <div className='title-wrapperResult'>
                <p>{totalProduct} result</p>
                <div className='result-sortBy d-flex justify-content-between align-items-center'>
                  <p>Sort By: </p>
                  <Select
                    className='select-option'
                    defaultValue={true}
                    onChange={onSelect}
                  >
                    <Option value={true}>Ascending</Option>
                    <Option value={false}>Descending</Option>
                  </Select>
                </div>
              </div>
              <div className='resultList'>
                <div className='resultListItem'>
                  <div className='row'>
                    {arrProduct.map((product, index) => {
                      return (
                        <div className='col-md-4 col-sm-6 p-4' key={index}>
                          <Product product={product} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

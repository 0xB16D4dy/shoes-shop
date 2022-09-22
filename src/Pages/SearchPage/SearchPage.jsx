import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Select } from 'antd';
import {
  searchProductAction,
  searchProductApi,
} from '../../redux/reducers/productReducer';
import SideBar from '../../assets/scss/components/SideBar/SideBar';
import Product from '../../assets/scss/components/Product/Product';
import { useSelector, useDispatch } from 'react-redux';

const { Search } = Input;
const { Option } = Select;

export default function SearchPage() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value !== '') {
      const actionThunk = searchProductApi(value);
      dispatch(actionThunk);
    } else if (value === '') {
      dispatch(searchProductAction([]));
    }
  };
  const totalProduct = () => {
    return arrProduct.reduce((accumulator, current, index) => {
      console.log(accumulator);
      if (current) {
        accumulator += 1;
      }
      return accumulator;
    }, 0);
  };

  const handleCheck = (value) => {
    console.log(value.name, '=', value.checked);
  };
  const onSelect = (e) => {
    console.log(e);
  };
  return (
    <div className='container' style={{ marginBottom: '105px' }}>
      <h1 className='text-center'>Search</h1>
      <div className='row'>
        <div className='col-2'>
          <SideBar handleCheck={handleCheck} total={totalProduct} />
        </div>
        <div className='col-10'>
          <div className='frm-search'>
            <Search
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
              <div
                className='title-wrapperResult d-flex justify-content-between'
                style={{ padding: '20px' }}
              >
                <p>{totalProduct()} result</p>
                <div className='result-sortBy d-flex justify-content-between align-items-center'>
                  <p>Sort By: </p>
                  <Select
                    defaultValue='Decrease'
                    onChange={onSelect}
                    style={{ marginLeft: '20px' }}
                  >
                    <Option value='Increase'>Increase</Option>
                    <Option value='Decrease'>Decrease</Option>
                  </Select>
                </div>
              </div>
              <div className='resultList'>
                <div className='resultListItem'>
                  <div className='row' style={{ margin: '0 24px' }}>
                    {arrProduct.map((product, index) => {
                      console.log(product);
                      return (
                        <div className='col-4 p-4' key={index}>
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

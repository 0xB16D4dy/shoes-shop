import { Checkbox } from 'antd';
import React from 'react';

export default function SideBar(props) {
  const onChange = (e) => {
    props.handleCheck(e.target)
  };
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <div
            className='sidebarTitle d-flex justify-content-between align-items-center'
            style={{font:'24px'}}
          >
            <h3>Filter by</h3>
          </div>
          <div className='sidebarList d-flex flex-column text-start'>
            <p className='sidebarListTitle' style={{ color: '#bcbcbc', font:'16px' }}>Categories</p>
            <div className='sideBarListItem'>
              <Checkbox onChange={onChange} name={'MEN'}>MEN</Checkbox>
            </div>
            <div className='sideBarListItem'>
              <Checkbox onChange={onChange} name={'WOMEN'}>WOMEN</Checkbox>
            </div>
            <div className='sideBarListItem'>
              <Checkbox onChange={onChange} name={'ADIDAS'}>ADIDAS</Checkbox>
            </div>
            <div className='sideBarListItem'>
              <Checkbox onChange={onChange} name={'NIKE'}>NIKE</Checkbox>
            </div>
            <div className='sideBarListItem'>
              <Checkbox onChange={onChange} name={'VANS'}>VANS CONVERSE</Checkbox>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

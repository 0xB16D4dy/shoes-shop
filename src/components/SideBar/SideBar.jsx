import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { memo } from 'react';

function SideBar({ arrCat, onSearchByCat }) {
  const renderItem = () => {
    return arrCat.map((cat) => {
      return { label: cat.id, key: cat.id };
    });
  };

  console.log('re-render');

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <div
            className='sidebarTitle'
            style={{
              font: '24px',
              marginTop: '43px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h3>Filter by</h3>
          </div>
          <div className='sidebarList'>
            <Menu
              defaultOpenKeys={['sub1']}
              mode='inline'
              theme='light'
              onClick={(info) => {
                onSearchByCat(info.key);
              }}
              items={[
                {
                  label: <span>Categories</span>,
                  key: 'sub1',
                  children: renderItem(),
                  icon: <MenuOutlined />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SideBar);

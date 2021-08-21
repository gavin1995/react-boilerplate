import React, { useEffect } from 'react'
import { Button, Toast } from 'antd-mobile';

import './index.less'

export default (props) => (
  <div className="layout">
    <Button type="primary" onClick={() => { Toast.info('测试...') }}>测试按钮</Button>
    <h1>qwqwq</h1>
    {props.children}
  </div>
)

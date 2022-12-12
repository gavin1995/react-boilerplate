import React, { useEffect } from 'react'
import { Button, Toast } from 'antd-mobile';

import './index.less'

export default (props) => (
  <div className="layout">
    <Button color='primary' fill='solid' onClick={() => { Toast.show({ icon: 'success', content: '测试...'}) }}>测试按钮</Button>
    <h1>qwqwq</h1>
    {props.children}
  </div>
)

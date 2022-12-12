import React from 'react'
import t from 'prop-types'

import './index.less'

const Test = (props) => {
  const { content } = props

  return (
    <div className="test-content">{content}</div>
  )
}

Test.defaultProps = {
  content: 'hello world'
}

Test.propTypes = {
  /**
   * 内容 - 测试组建的内容
   */
  content: t.string
}

export default Test

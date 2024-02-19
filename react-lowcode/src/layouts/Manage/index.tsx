
import { BarsOutlined, DeleteOutlined, PlusCircleOutlined, StarOutlined } from '@ant-design/icons'
import { Button, Divider, Space } from 'antd'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'


const ManageLayout: FC = () => {
  return (
    <div className={styles.container} >
      <div className={styles.left} >
        <Space direction='vertical' >
          <Button type="primary" size='large' icon={<PlusCircleOutlined />}>创建问卷</Button>
          <Divider style={{ borderTop: 'transpaarent' }} />
          <Button size='large' icon={<BarsOutlined />}>我的问卷</Button>
          <Button size='large' icon={<StarOutlined />}>星标问卷</Button>
          <Button size='large' icon={<DeleteOutlined />}>回收站</Button>
        </Space>
      </div>
      <div className={styles.right} >
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
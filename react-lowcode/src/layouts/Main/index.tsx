
import { Layout } from 'antd'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const { Header, Content, Footer } = Layout

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>logo</div>
        <div className={styles.right}>user</div>
      </Header>
      <Layout className={styles.main}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer className={styles.footer}>
        低代码调查问卷 &copy; 2023 Create by Ray
      </Footer>
    </Layout>
  )
}

export default MainLayout

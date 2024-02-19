import 'antd/dist/reset.css'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import RouterConfig from './router'


export default function App () {
  return (
    <RouterProvider router={RouterConfig} />
  )
}

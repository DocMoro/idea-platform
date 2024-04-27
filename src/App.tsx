import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { TicketsPage } from './pages/tickets-page'

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TicketsPage />} />
    </Routes>
  )
}

export default App

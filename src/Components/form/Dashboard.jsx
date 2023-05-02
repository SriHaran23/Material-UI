import React, { useState } from 'react'
import Form1 from './Form'
import CustomizedTables from './Table'
import Form2 from './Form1'
import { Route, Routes } from 'react-router-dom'

function Dashboard() {
  const [tableData, setTableData] = useState([])
    
  return (
    <div>
        <Routes>
          <Route path="/edit" element={<Form2></Form2>} />
          <Route path="/" element={<Form1></Form1>} />
        </Routes>
        {/* <Form1 tableData={tableData} setTableData={setTableData}></Form1> */}
        <CustomizedTables tableData={tableData} setTableData={setTableData}></CustomizedTables>
    </div>
  )
}

export default Dashboard
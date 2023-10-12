import React from 'react'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <nav>
      <svg width="80" height="70">
        <rect x="10" y="0" width="60" height="20" rx="10" ry="10" className='redfill' />
        <rect x="10" y="24" width="40" height="20" rx="10" ry="10" className='orangefill' />
        <rect x="10" y="48" width="20" height="20" rx="10" ry="10" className='yellowfill' />
      </svg>
      <hr></hr>
      <h6>Dahboards</h6>
      <a href="">Kanban Dahboard</a>
      <a href=""> Leader Boards</a>

      <h6> Insights</h6>
      <a href="/Financial Insights">Financial Insights</a>
      <a href=""> Analytical Insights </a>
      <a href=""> Data Insights </a>

      <h6>Reports</h6>
      <a href="">Financial Reports</a>
      <a href="">Customer Feebacks</a>

      <h6> Integrations</h6>
      <a href="/Financial Insights">Client Integrations</a>
      <a href=""> Data Integrations </a>
      <a href=""> Statistic Integrations </a>

      <h6>Services</h6>
      <a href="">  Hosting</a>
      <a href=""> Automation </a>
      <a href=""> Banking </a>
      
      <h6>Widgets</h6>
      
      </nav>
    </div>
  )
}

export default Sidebar


{/* <svg width="400" height="200">
          <rect x="50" y="20" width="150" height="50" rx="25" ry="25"  className='redfill' />
          <rect x="50" y="80" width="100" height="50" rx="25" ry="25"  className='orangefill' />
          <rect x="50" y="140" width="50" height="50" rx="40" ry="40"  className='yellowfill' />
        </svg> 
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="0" width="30" height="10" rx="5" ry="5" style="fill:#ec2424;" />
  <rect x="10" y="12" width="20" height="10" rx="5" ry="5" style="fill:#f38b1c;" />
  <rect x="10" y="24" width="10" height="10" rx="10" ry="10" style="fill:#fbd911;" />
</svg> */}
import React from 'react'
import Button from '../Button';

function FlowOdd() {
  const machines = [
    {time:8-9,
     status: true,
     price: '#1000'}
  ]



  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {machines.map((machine)=> (
                <tr>
                    <td>{machine.time}</td>
                    <td>{machine.status ? (<span>Active</span>): (<span>Non-active</span>)}</td>
                    <td>{machine.price}</td>
                    <td>
                        {machine.status ? (<Button type="button">ADD</Button>) : (<Button type="button" isDisabled={true}>ADD</Button>)}
                        {!machine.action && <span>Active</span>}
                    </td>
                </tr>))
                }
            </tbody>

        </table>
    </div>
  )
}

export default FlowOdd;
import React from 'react'
import machines from '../machines1';
// import Button from '../Button';
import { useRouter } from 'next/router';
import styles from './flowOdd.module.css';

function FlowOdd() {
  const router = useRouter();
    const handleSubmit = () => {
         router.push('/invoice');
        //  we create a function that would take the id of each buttons to the firebase and fetch data from the firebase to display on ui
    }

  return (
    <div className='w-100 h-100 left-20  bg-white-50 '>
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className={styles.body}>
                {machines.map((machine)=>(
                    <tr key={machine.id}>
                        <td>{machine.time}</td>
                        <td>{!machine.status ? <span style={{backgroundColor: 'blue', border:'5px'}}>Active</span> : <span style={{backgroundColor: 'yellow'}}>Non-Active</span>}</td>
                        <td>{machine.price}</td>
                        <td>{machine.status ? <button type="button" >ADD</button> : (<button type="button" >ADD</button>)}</td>
                    </tr>
                ))}
            </tbody>
            <button style={{backgroundColor: 'ButtonFace'}} onClick={handleSubmit}>Submit</button>
        </table>
    </div>
  )
}

export default FlowOdd;

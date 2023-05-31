import React from 'react';
import Layout from '../Layout/Layout';
import Table2 from '../Components/Table2';
import {Movies} from '../data/PlanData';

function Plan() {
  return (
    <Layout>
    <div className='flex flex-col gap-6'>
    <div className='flex-btn gap-2'>
        <h2 className='text-xl font-bold'>Subscription Plans</h2>
        {/* <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
            Delete All
        </button> */}
    </div>
    <Table2 data={Movies} admin={false} />
    
</div>
    </Layout>
  )
}

export default Plan

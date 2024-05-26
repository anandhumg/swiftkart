import { useState } from 'react'
import './overview.css'

export const AdminOverview = () => {
    const [priceStatus, setPriceStatus] = useState(false);
    const tableData = [
        {
            order: 'ORD-007',
            customer: 'Ekaterina Tankova',
            date: 'Mar 8, 2024',
            status: 'pending'
        },
        {
            order: 'ORD-006',
            customer: 'Ekaterina Tankova',
            date: 'Mar 8, 2024',
            status: 'delivered'
        },
        {
            order: 'ORD-005',
            customer: 'Ekaterina Tankova',
            date: 'Mar 8, 2024',
            status: 'refunded'
        },
        {
            order: 'ORD-004',
            customer: 'Ekaterina Tankova',
            date: 'Mar 8, 2024',
            status: 'pending'
        }
    ]
    return (
        <div className='overview-container'>
            <div className='over-cards'>
                <div className='over-card'>
                    <div>
                        <div>
                            Budget
                        </div>
                        <div>
                            <h1>25$</h1>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p style={{ color: priceStatus ? 'green' : 'red' }}>
                                12%
                            </p> since last month
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: '#A020F0',
                        width: '56px',
                        height: '56px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '30px'
                    }}>
                        $
                    </div>
                </div>
                <div className='over-card'>
                    <div>
                        <div>
                            Budget
                        </div>
                        <div>
                            <h1>25$</h1>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p style={{ color: priceStatus ? 'green' : 'red' }}>
                                12%
                            </p> since last month
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: '#A020F0',
                        width: '56px',
                        height: '56px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '30px'
                    }}>
                        $
                    </div>
                </div>
                <div className='over-card'>
                    <div>
                        <div>
                            Budget
                        </div>
                        <div>
                            <h1>25$</h1>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p style={{ color: priceStatus ? 'green' : 'red' }}>
                                12%
                            </p> since last month
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: '#A020F0',
                        width: '56px',
                        height: '56px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '30px'
                    }}>
                        $
                    </div>
                </div>
                <div className='over-card'>
                    <div>
                        <div>
                            Budget
                        </div>
                        <div>
                            <h1>25$</h1>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p style={{ color: priceStatus ? 'green' : 'red' }}>
                                12%
                            </p> since last month
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: '#A020F0',
                        width: '56px',
                        height: '56px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '30px'
                    }}>
                        $
                    </div>
                </div>
            </div>
            <div className='over-report'>
                <div className='statusBarContainer'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
                        <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                            Sales
                        </div>
                        <div>
                            sync
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '70%'
                    }}>
                        status bar
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        borderTop: '0.5px solid gray'
                    }}>
                        <div style={{ padding: '18px' }}>
                            overview
                        </div>
                    </div>
                </div>
                <div className='circularStatusBarContainer'>
                    <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                        Traffic Source
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '70%'
                    }}>
                        circular Status bar
                    </div>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                Desktop
                            </div>
                            <div>
                                20%
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                Tablet
                            </div>
                            <div>
                                20%
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                Phone
                            </div>
                            <div>
                                20%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='over-tables'>
                <div className='over-list'>
                    <div style={{ borderBottom: '0.5px solid gray', padding: '20px', fontSize: '1.125rem' }}>
                        Latest Products
                    </div>
                    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: '0.5px solid gray' }}>
                        <div>
                            image
                        </div>
                        <div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                Necessaire Body Lotion
                            </div>
                            <div>
                                Updated Mar 8, 2024
                            </div>
                        </div>
                        <div>
                            icon
                        </div>

                    </div>
                    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: '0.5px solid gray' }}>
                        <div>
                            image
                        </div>
                        <div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                Necessaire Body Lotion
                            </div>
                            <div>
                                Updated Mar 8, 2024
                            </div>
                        </div>
                        <div>
                            icon
                        </div>

                    </div>
                    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: '0.5px solid gray' }}>
                        <div>
                            image
                        </div>
                        <div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                Necessaire Body Lotion
                            </div>
                            <div>
                                Updated Mar 8, 2024
                            </div>
                        </div>
                        <div>
                            icon
                        </div>

                    </div>
                    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: '0.5px solid gray' }}>
                        <div>
                            image
                        </div>
                        <div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                Necessaire Body Lotion
                            </div>
                            <div>
                                Updated Mar 8, 2024
                            </div>
                        </div>
                        <div>
                            icon
                        </div>

                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',

                    }}>
                        <div style={{ padding: '18px' }}>
                            view all
                        </div>
                    </div>
                </div>
                <div className='over-table'>
                    <div style={{ minWidth: '54rem' }}>
                        <div style={{ borderBottom: '0.5px solid gray', fontSize: '1.125rem', padding: '30px' }}>
                            Latest orders
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '0.5px solid gray', height: '60px', alignItems: 'center' }}>
                                <div>
                                    Order
                                </div>
                                <div>
                                    customer
                                </div>
                                <div>
                                    date
                                </div>
                                <div>
                                    status
                                </div>
                            </div>
                            {tableData.map((data, index) => {
                                return (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '0.5px solid gray', height: '75px', alignItems: 'center' }}>
                                        <div>
                                            {data.order}
                                        </div>
                                        <div>
                                            {data.customer}
                                        </div>
                                        <div>
                                            {data.date}
                                        </div>
                                        <div>
                                            {data.status == 'pending' ? <span className='over-badge' style={{ backgroundColor: 'yellow' }}>
                                                Pending
                                            </span> : ''}
                                            {data.status == 'delivered' ? <span className='over-badge' style={{ backgroundColor: 'green',color:'white' }}>
                                                Delivered
                                            </span> : ''}
                                            {data.status == 'refunded' ? <span className='over-badge' style={{ backgroundColor: 'red',color:'white'}}>
                                                Refunded
                                            </span> : ''}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',

                    }}>
                        <div style={{ padding: '18px' }}>
                            view all
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
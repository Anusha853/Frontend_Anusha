import React from 'react';

const plans = [
    { id: 1, name: 'Prepaid', details: 'Unlimited calls + Data' },
    { id: 2, name: 'Postpaid', details: 'Data rollover + Family plans' },
    { id: 3, name: 'Broadband', details: 'High-speed internet' },
];

function Plans() {
    return (
        <section className="plans">
            {plans.map(plan => (
                <div key={plan.id} className="plan-card">
                    <h3>{plan.name}</h3>
                    <p>{plan.details}</p>
                    <button>Choose Plan</button>
                </div>
            ))}
        </section>
    );
}

export default Plans;

import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider'

const Checkout = () => {
    const serviceData = useLoaderData()
    const { _id, title, price, email } = serviceData;
    const { user } = useContext(AuthContext)
    console.log(user);

    const handleOrderForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const message = form.message.value;
        const email = user?.email || 'unregistered';

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch(`https://genius-car-server-liard-two.vercel.app/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
            })
            .catch(e => console.error(e));
    }

    return (
        <div>
            <form className='my-6' onSubmit={handleOrderForm}>
                <h1 className='text-3xl'>You are about to order: {title}</h1>
                <h2 className='text-xl'>Price: {price}</h2>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-4 lg:gap-6 mb-10'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full" />
                    <input name="phone" type="number" placeholder="Your Phone" className="input input-ghost w-full" />
                    <input name="email" type="email" placeholder="Email here" className="input input-ghost w-full" defaultValue={user?.email} readOnly />
                </div>

                <textarea name='message' className="textarea textarea-bordered h-52 w-full" placeholder="Your Message"></textarea>

                <button type='submit' className="btn btn-error w-full mt-6">Confirm Order</button>
            </form>
        </div>
    );
};

export default Checkout;
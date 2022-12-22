import toast from "react-hot-toast";

export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch(`https://genius-car-server-liard-two.vercel.app/jwt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('genius-token', data.token)
            toast.success('Successfully Login')
        })
}
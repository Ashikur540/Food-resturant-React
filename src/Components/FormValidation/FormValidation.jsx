import React, { useState, useEffect } from 'react';

const getFromLS = () => {
    const loginData = localStorage.getItem('login');
    if (loginData) return JSON.parse(loginData);
    else return [];
}

const FormValidation = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [storedData, setStoredData] = useState(getFromLS);


    const handleSubmit = (e) => {
        e.preventDefault();
        // simple validation
        if (email && password) {
            const data = {
                name: email,
                password: password,
            }

            const allData = [...storedData, data];
            // console.log(data);
            // console.log(storedData);
            setStoredData(allData);
            // make fileds empty
            setEmail("");
            setPassword("");
        }

        else alert("please fill up the data!!!")


    }


    // notification increase function
    useEffect(() => {
        document.title = `user ${storedData.length}`;

    }, [storedData])

    // add to local storage 
    useEffect(() => {
        localStorage.setItem("login", JSON.stringify(storedData));

    }, [storedData])


    return (
        <>
            <form action="" className="flex flex-col justify-center p-8 " onSubmit={handleSubmit}>
                <div className="field my-2">
                    <label htmlFor="email" className="font-semibold text-xl text-slate-800">Email </label>
                    <input type="text" name="" className="px-4 py-2 min-w-[300px] border rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field my-2">
                    <label htmlFor="password" className="font-semibold text-xl text-slate-800">Password</label>
                    <input type="password" name="" className="px-4 py-2 min-w-[300px] border rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="py-3 px-8 bg-emerald-500  font-semibold rounded-lg shadow-md min-w-[10%] text-center mx-auto">Submit</button>
            </form>


            <div className="display-data flex flex-col justify-center my-4">
                {
                    storedData.map((singleData, index) => {
                        return <>
                            <div key={index} className="card bg-stone-50 rounded-md shadow-lg my-4 p-2 flex justify-center ">
                                <h1 className="text-2xl px-4">{singleData.name}</h1>
                                <h1 className="text-xl">{singleData.password}</h1>
                            </div>

                        </>
                    })
                }


            </div>
        </>
    );
};

export default FormValidation;
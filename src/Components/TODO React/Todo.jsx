import React, { useEffect, useState } from 'react';


const getFromLS = () => {
    const todoData = localStorage.getItem('todos');
    if (todoData) return JSON.parse(todoData);
    else return [];
}
const Todo = () => {


    const [inputData, setInputData] = useState('');
    const [todoList, setTodoList] = useState(getFromLS());


    // function to add todo items to list
    const addtTodoList = () => {
        if (!inputData) alert('please fill up to add something!');
        else {
            const listobj = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setTodoList([...todoList, listobj]);
        }
        // let it empty after adding
        setInputData("");

    }


    // function to delete items

    const deleteListItem = (id) => {
        const filteredtodos = todoList.filter(item => item.id !== id);
        setTodoList(filteredtodos);
    }

    // function to remove all
    const rmvAll = () => setTodoList([]);

    // add to local storage cz evry time we have to load the data on every change of state.
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList])

    return (
        <div>
            <div className="main flex flex-col justify-center items-center">
                <figure>
                    <img src="https://cdn-icons-png.flaticon.com/512/1632/1632670.png" alt="" className="w-16 mx-auto my-4" />
                </figure>
                <h1 className="text-3xl text-gray-50 my-6">Create your list here</h1>
                <div className="input-area mx-auto flex items-center">
                    <input type="text" placeholder="Type task .." className="input input-bordered w-full max-w-xl" value={inputData} onChange={(e) => setInputData(e.target.value)}
                    />
                    <i class="fa-solid fa-plus p-4 bg-blue-600 rounded-lg mx-3 cursor-pointer" onClick={addtTodoList}></i>
                </div>


                <div className="list-items my-4 flex flex-col">

                    {/* show items to list */}
                    {
                        todoList.map((listItem) => {

                            console.log(listItem.id);
                            return <>
                                <div className="eachitems bg-violet-600 text-white w-96 flex justify-between px-4 py-4 rounded-lg mx-auto my-2" key={listItem.id}>
                                    <h3>{listItem.name}</h3>
                                    <div className="button-grp text-xl" key={listItem.id}>
                                        <button className="cursor-pointer"><i class="fa-solid fa-square-pen"></i> &nbsp;</button>
                                        <button className="cursor-pointer"
                                            onClick={() => deleteListItem(listItem.id)}><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </>
                        })
                    }


                </div>

                <button className="btn btn-outline btn-primary" onClick={rmvAll}>Button</button>
            </div>
        </div>
    );
};

export default Todo;
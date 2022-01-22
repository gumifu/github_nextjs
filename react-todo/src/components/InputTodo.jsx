import React from "react";

export const InputTodo = (props) => {
    const { todoTxet, onChange, onClick } = props;
    return (
            <div className='input-area'>
                <input type="text" placeholder='TODOを入力' value={todoTxet} onChange={onChange} />
                <button onClick={onClick}>追加</button>
            </div>
    );
};
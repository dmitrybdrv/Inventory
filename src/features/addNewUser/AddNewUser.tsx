import React from 'react';

export const AddNewUser: React.FC = () => {
    return (
        <div>
            <h1>Add new user</h1>
            <div>
                <input type="text"/>
            </div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <input type="text"/>
            </div>

            <button>add user</button>
        </div>
    );
};
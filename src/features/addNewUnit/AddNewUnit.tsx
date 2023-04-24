import React from 'react';

export const AddNewUnit: React.FC = () => {
 return (
  <div>
   <h1>Add new unit form</h1>
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
      <textarea name="add" id="one" cols={22} rows={2}></textarea>
      </div>

      <button>add</button>
  </div>
 );
};
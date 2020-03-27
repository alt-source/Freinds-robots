import React from 'react';
const SearchBox = ({searchChange})=>{
    return (
        <div className='tc pa2'>
            <input className='pa3 ba b--dotted bw1 b--blue bg-lightest-blue' 
            type='search'
             placeholder='Rebots Names'
             onChange={searchChange} />
        </div>
    )
}
export default SearchBox
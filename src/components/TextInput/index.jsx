import './styles.css'
export const TextInput = ({searchValue, handleInput}) => {
    return (
          <input 
          type='search' 
          value={searchValue}
          onChange={handleInput}
          placeholder='Search'
          className='text-input'/>
    )
}


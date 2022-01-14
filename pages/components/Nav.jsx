
import Select from 'react-select'


function Nav() {

    
  const options = [
    { value: "currency", label:'USD'},
    { value: "currency", label:'NOK'}
 ]


 
  return (
    <nav>
      <div className="flex justify-around p-8">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20">
        {navItems.map(({name})=> (
          <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white-ative:text-red-500">{name}</h2>
        ))}
      </div>
        <Select variant="outlined" className="flex shadow-2xl cursor-auto max-w-xs" options={options} />
        </div>
    </nav>
  )
}

export default Nav

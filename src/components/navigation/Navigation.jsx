import { Link } from "react-router"
export default function Navigation() {
  return (
 
      <nav className="shadow  place-items-center">
        <ul className=" flex space-x-2 ">
            <li className="hover:bg-slate-700  hover:text-white text-xl font-bold p-2">
                <Link to='/'> All Formations</Link>
            </li>
            <li className="hover:bg-slate-700  hover:text-white text-xl font-bold p-2">
                <Link to='/addformation'> Ajouter une Formation</Link>
            </li>
            {/* <li className="hover:bg-slate-700  hover:text-white text-xl font-bold p-2">
                <Link to='/deleteformation'>Supprimer un formation</Link>
            </li> */}
        </ul>
      </nav>
 
  )
}

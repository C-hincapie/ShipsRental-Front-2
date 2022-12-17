import { useDarkMode } from "context/darkMode";

const Admin = () => {
   const { darkMode } = useDarkMode();

   return (
      <div className={`flex h-full w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
         Index del panel Admin
      </div>
   )
}

export default Admin;
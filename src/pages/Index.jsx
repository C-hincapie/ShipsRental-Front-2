import { useDarkMode } from "context/darkMode";

const Index = () => {
   const { darkMode } = useDarkMode();

   return (
      <div className={`flex h-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}>
         Contenido Landing Barcos
      </div>
   )
}

export default Index;
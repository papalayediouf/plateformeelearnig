import { useState } from "react";
import axios from "axios";

export default function AddFormation() {
  const [nom, setNom] = useState("");
  const [dateFormation, setDateFormation] = useState("");
  const [nombreUtilisateursMax, setNombreUtilisateursMax] = useState("");
  const [thematique, setThematique] = useState("");
  const [prix, setPrix] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formationData = {
        nom,
        dateFormation,
        nombreUtilisateursMax: parseInt(nombreUtilisateursMax),
        thematique,
        prix: parseFloat(prix),
      };

      const response = await axios.post("http://localhost:5000/allTraining", formationData);

      alert("Formation ajoutée avec succes !");
      console.log("Formation ajoutée :", response.data);

      setNom("");
      setDateFormation("");
      setNombreUtilisateursMax("");
      setThematique("");
      setPrix("");
    } catch (error) {
      console.error("Erreur lors de l’ajout :", error);
      alert("Erreur lors de l’ajout de la formation !");
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl">Add Formation</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Nom */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="nom"
            id="nom"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <label
            htmlFor="nom"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nom
          </label>
        </div>

        {/* Date de Formation */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="dateFormation"
            id="dateFormation"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={dateFormation}
            onChange={(e) => setDateFormation(e.target.value)}
          />
          <label
            htmlFor="dateFormation"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date de Formation
          </label>
        </div>

        {/* Nombre d'utilisateurs max */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="nombreUtilisateursMax"
            id="nombreUtilisateursMax"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={nombreUtilisateursMax}
            onChange={(e) => setNombreUtilisateursMax(e.target.value)}
          />
          <label
            htmlFor="nombreUtilisateursMax"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre d'Utilisateurs Max
          </label>
        </div>

        {/* Thématique */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="thematique"
            id="thematique"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={thematique}
            onChange={(e) => setThematique(e.target.value)}
          />
          <label
            htmlFor="thematique"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Thématique
          </label>
        </div>

        {/* Prix */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="prix"
            id="prix"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
          <label
            htmlFor="prix"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Prix
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

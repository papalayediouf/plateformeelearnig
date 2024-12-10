import axios from "axios";
import { useEffect, useState } from "react";

export default function AllFormation() {
  const [allFormations, setAllFormation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allTraining");
        setAllFormation(response.data.formations); 
        console.log(response.data.formations);
      } catch (error) {
        console.error("Une erreur est survenue :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-bold">Mes Formations</h1>
      <div>
        {allFormations.map((formation) => (
          <div key={formation.id} className="mb-4 p-4 border rounded-lg">
            <div><strong>Nom:</strong> {formation.nom}</div>
            <div><strong>Date de formation:</strong> {formation.dateFormation}</div>
            <div><strong>Utilisateur max:</strong> {formation.nombreUtilisateursMax}</div>
            <div><strong>Thématique:</strong> {formation.thematique}</div>
            <div><strong>Prix:</strong> {formation.prix} €</div>
            <div><strong>Date d'ajout:</strong> {formation.dateAjout}</div>
            <div><strong>Date de modification:</strong> {formation.dateModification}</div>

          </div>
        ))}
      </div>
    </div>
  );
}

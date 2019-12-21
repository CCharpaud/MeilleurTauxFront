import React, { useState } from "react";
import "../Footer/style.css";

export default function Footer(props) {
  const [showMentions, setShowMentions] = useState(false);

  return (
    <footer>
      <div className="wrapper">
        <div className="textOfFooter">
          <span> * Champ obligatoire - </span>
          <div
            className="mentions"
            onClick={() => {
              setShowMentions(!showMentions);
            }}
          >
            Mentions Légales
          </div>
          {showMentions === true ? (
            <p>
              Les informations recueillies sont traitées par le groupe
              Meilleurtaux Finizy aux fins de vous transmettre une proposition
              commerciale. Certaines informations sont obligatoires, en cas de
              non réponse votre demande ne pourra pas être traitée. Vos données
              personnelles peuvent être transmises aux partenaires de
              Meilleurtaux dans le cadre de l'étude de votre demande. Vous
              disposez d'un droit d'accès, de rectification, d'opposition et de
              portabilité, dans le respect des dispositions légales et
              réglementaires en vigueur, aux informations vous concernant. Pour
              l'exercer, un formulaire est mis à votre disposition sur notre
              site. Pour plus d'information concernant le traitement de vos
              données personnelles, veuillez consulter notre politique de
              données personnelles.
              <div
                className="close"
                onClick={() => {
                  setShowMentions(false);
                }}
              >
                [X Fermer]
              </div>
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

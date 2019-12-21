import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Axios from "axios";

/* Style */
import "./style.css";
import "../../App.css";

/* Conponents */
import Information from "../../components/Information";

export default function Cities() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [handleText, setHandleText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://vicopo.selfbuild.fr/cherche/" + handleText
        );
        setData(response.data.cities);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [handleText]);

  return (
    <div className="seconddropOfSituationLoc">
      <div className="titleSelectOfSituationLoc">
        <span> Ville ou code postal* </span>
        <div className="informationOfSituationLoc">
          <p>
            La connaissance du code postal du bien permettra de calculer les
            frais de notaire sur la base de la communes concernés.
          </p>
        </div>
      </div>

      <div className="containOfdrop">
        <Information
          tooltip="Saisissez votre code postal ou la ville - 3 caractères min "
          placement="top"
        />
        <div className="containOfDropbis">
          <form>
            <label className="dropDown">
              <input
                className="inputCities"
                name="toto"
                type="text"
                value={handleText}
                autoComplete="off"
                onChange={event => {
                  setHandleText(event.target.value);
                }}
              />

              {data === undefined ? null : (
                <ul className="dropdownContent">
                  {data.map((item, index) => {
                    return (
                      <li
                        value={handleText}
                        onClick={() => {
                          setHandleText(item.city + "-" + item.code);
                          Cookies.set("situation-du-bien-ville", item.city);
                        }}
                        key={index}
                      >
                        {item.city} - {item.code}
                      </li>
                    );
                  })}
                </ul>
              )}
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../Title/style.css";
import InfoLogo from "../../img/infos.png";
import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default function Title(props) {
  const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.grey,
      color: "rgba(255, 255, 255, 1)",
      boxShadow: theme.shadows[1],
      fontSize: 18
    }
  }))(Tooltip);

  return (
    <div className="title">
      <div className="wrapper">
        <span> {props.name} </span>
        <LightTooltip title={props.tooltip} placement="right">
          <img src={InfoLogo} alt="informations" />
        </LightTooltip>
      </div>
    </div>
  );
}

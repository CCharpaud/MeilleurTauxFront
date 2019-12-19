import React from "react";
import "../Information/style.css";
import InfoLogo from "../../img/infos.png";
import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default function Information(props) {
  const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.grey,
      color: "rgba(255, 255, 255, 1)",
      boxShadow: theme.shadows[1],
      fontSize: 20
    }
  }))(Tooltip);

  return (
    <div className="info">
      <LightTooltip title={props.tooltip} placement={props.placement}>
        <img src={InfoLogo} alt="informations" />
      </LightTooltip>
    </div>
  );
}

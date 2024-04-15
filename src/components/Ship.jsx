import React from "react";

function Ship({ shipPosition, classNames, ...args }) {
   const { w, h, bg } = shipPosition;
   console.log(shipPosition);
   const classList = ["ship", `ship-${Math.max(w + 1, h + 1)}-${w > h ? "hor" : "vert"}`, `virus-${bg}`, `${w > h ? "hor" : "vert"}`];
   if (classNames && classNames.length) classList.push(...classNames.split(" "));

   return (
      <div className={classList.join(" ")} {...args}>
         {bg}
      </div>
   );
}
export default Ship;

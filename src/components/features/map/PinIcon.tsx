import L from "leaflet";

export default function PinIcon() {
  const producerIcon = new L.DivIcon({
    className: "",
    html: `
      <div style="
        position: relative;
        width: 30px;
        height: 30px;
      ">
        <div style="
          width: 30px;
          height: 30px;
          background: #16A34A;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 10px rgba(0,0,0,0.25);
          border: 3px solid white;
        "></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  return producerIcon;
}

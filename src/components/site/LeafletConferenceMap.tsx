"use client";

import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";

type MapPoint = {
  id: string;
  country: string;
  committee: string;
  awards?: string;
  lat: number;
  lng: number;
};

export function LeafletConferenceMap({ points }: { points: MapPoint[] }) {
  return (
    <MapContainer
      center={[20, 10]}
      zoom={1.4}
      minZoom={1.2}
      maxZoom={5}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {points.map((point) => (
        <CircleMarker
          key={point.id}
          center={[point.lat, point.lng]}
          radius={point.awards ? 8 : 6}
          pathOptions={{
            color: point.awards ? "rgb(251,191,36)" : "rgb(79,70,229)",
            fillColor: point.awards ? "rgb(251,191,36)" : "rgb(79,70,229)",
            fillOpacity: 0.85,
            weight: 2,
          }}
        >
          <Tooltip direction="top" offset={[0, -6]} opacity={1}>
            <div className="text-[12px] font-medium">
              {point.country} · {point.committee}
              {point.awards ? ` · ${point.awards}` : ""}
            </div>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

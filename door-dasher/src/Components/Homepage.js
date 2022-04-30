import { MapContainer, TileLayer } from "react-leaflet"



export default function HomePage() {
      
    return (
        <div className ="users-page"> 
          <h1 id="main-page-header">Main Page</h1>
          <div className="main-page">
                <div className="child">
                    <h1>Friends</h1>
                    <p>Render friends</p>
                </div>
    
                <div id="map" className="child">
                        <MapContainer center={[40.730610, -73.935242]} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        </MapContainer>
                </div>
          </div>
        </div>
    )   
  }


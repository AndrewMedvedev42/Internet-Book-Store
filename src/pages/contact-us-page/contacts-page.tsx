import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const ContactsPage:React.FC = () => {
    return (
        <section className="main-container">
            <h2>Delivery</h2>
            <section>
                <aside>contacts</aside>
                <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                    <Popup>
                        This is our way!
                    </Popup>
                    </Marker>
                </MapContainer>
            </section>
            <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </article>
            <aside>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </aside>
        </section>
    )
}

export default ContactsPage
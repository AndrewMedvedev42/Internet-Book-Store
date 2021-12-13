import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "../../styles/css/page-styles/contacts-page.css"

const ContactsPage:React.FC = () => {
    return (
            <section className="page page-top contacts-page">
                <article className="container">
                    <h2 className="page-title">Contacts</h2>
                </article>
                <article className="container">
                    <section className="map-and-contacts border-radius-25px white-block">
                        <aside className="contacts">
                            <ul className="contacts-list">
                                <li>10am - 21pm</li>
                                <li>Country, City, Street, 10</li>
                                <li>+420-$ #!@ %?~ </li>
                                <li>dummy@email.com</li>
                            </ul>
                        </aside>
                        <MapContainer className="map" id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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
                </article>

                <article className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </article>

                <aside className="container">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </aside>        
            </section>
    )
}

export default ContactsPage
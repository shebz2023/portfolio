import React from "react";
import { ContactForm } from "./ContactForm";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const Contact = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749, // Replace with your latitude
    lng: -122.4194, // Replace with your longitude
  };

  return (
    <section
      id="contact"
      className="h-screen w-screen flex items-center justify-evenly max-md:flex-col p-4 bg-black"
    >
      <div className="flex flex-col items-center justify-center w-1/3 max-md:w-full">
        <img
          src="./avatarsuit.png"
          alt="Your Picture"
          className="rounded-full w-48 h-48 mb-4 object-cover"
        />
        <p className="text-gray-400 text-center mb-4">
          Feel free to reach out for any inquiries or collaborations.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-white text-3xl" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-white text-3xl" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 hover:text-white text-3xl" />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-white text-3xl" />
          </a>
        </div>
      </div>
      <ContactForm />
      {/* <div className="w-1/3 max-md:w-full">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </div> */}
    </section>
  );
};

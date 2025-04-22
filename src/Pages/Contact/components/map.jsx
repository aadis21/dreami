import React from "react";

export default function Map() {
  return (
    <div className="m-3  h-[450px] flex justify-center items-center">
      <iframe
        title="Google Map"
        className="w-full h-full rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54916.849524704325!2d76.79291028089844!3d30.65359249248055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febdec52fb0bb%3A0xa53f4264b7e89167!2sGlobal%20Business%20Park!5e0!3m2!1sen!2sin!4v1743689061332!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

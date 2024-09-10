import React, { useState } from "react";
import "./styles.css";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const imageUrls = [ONE, TWO, THREE, FOUR, FIVE, SIX];

function App() {
  return (
    <div>
      <Captcha />
    </div>
  );
}

const Captcha = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [correctImageIndex, setCorrectImageIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [captchaMessage, setCaptchaMessage] = useState(
    "CAPTCHA Testini Başlat"
  );

  // Rastgele bir doğru resim seçme
  const getRandomImageIndex = () =>
    Math.floor(Math.random() * imageUrls.length);

  const openModal = () => {
    setCorrectImageIndex(getRandomImageIndex());
    setSelectedImageIndex(null);
    setModalOpen(true);
    setCaptchaMessage("Robot olmadığınızı kontrol edin");
  };

  const handleImageClick = (index) => {
    if (index === correctImageIndex) {
      setCaptchaMessage("Robot olmadığınızı onayladınız");
      setModalOpen(false); // Modalı kapat
      setCorrectImageIndex(null); // Doğru resim indeksini sıfırla
      setSelectedImageIndex(null); // Seçili resmi sıfırla
    } else {
      alert("Yanlış seçim, tekrar deneyin.");
      setSelectedImageIndex(index);
    }
  };

  return (
    <div>
      {!modalOpen && (
        <button className="start-button" onClick={openModal}>
          {captchaMessage}
        </button>
      )}
      {modalOpen && (
        <div className="modal">
          <h2>Seçmeniz gereken resim numarası: {correctImageIndex + 1}</h2>
          <div className="image-container">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className={index === selectedImageIndex ? "selected" : ""}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

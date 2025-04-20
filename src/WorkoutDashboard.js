import React, { useState } from 'react';
import './WorkoutDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faShoePrints  } from '@fortawesome/free-solid-svg-icons'
import workoutImage1 from './foty/2_1.png'; // Import obrazu
import workoutImage2 from './foty/2_2.png'; // Import obrazu
import workoutImage3 from './foty/2_3.png'; // Import obrazu
import workoutImage4 from './foty/2_4.png'; // Import obrazu
import focia from './foty/2_5.png'; // Import obrazu

import { PieChart } from '@mui/x-charts/PieChart';
export default function WorkoutDashboard() {
    const [isWindowVisible, setIsWindowVisible] = useState(false);
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
    const [isNotificationsModalVisible, setIsNotificationsModalVisible] = useState(false);
    const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);

    const toggleLoginModal = () => {
      setIsLoginModalVisible(!isLoginModalVisible);
    };
    const [isClosing, setIsClosing] = useState(false); // Dodany stan do obsługi animacji zamykania
const toggleSettingsModal = () => {
    setIsSettingsModalVisible(!isSettingsModalVisible);
  };

  const toggleNotificationsModal = () => {
    setIsNotificationsModalVisible(!isNotificationsModalVisible);
  };

  const toggleHelpModal = () => {
    setIsHelpModalVisible(!isHelpModalVisible);
  };
  const toggleWindow = () => {
    if (isWindowVisible) {
      setIsClosing(true); // Ustaw animację zamykania
      setTimeout(() => {
        setIsWindowVisible(false); // Ukryj okno po zakończeniu animacji
        setIsClosing(false); // Zresetuj stan zamykania
      }, 300); // Czas trwania animacji (musi być zgodny z CSS)
    } else {
      setIsWindowVisible(true); // Pokaż okno
    }
  };
 
    return (
    <div className="dashboard">
        <div className="header">
      <h1 className="title">Workouts</h1>
      <FontAwesomeIcon icon={faBars} id="MENU" onClick={toggleWindow} />
      </div>
      <div className="card large">
          <div className="card-title">Ćwiczenia</div>
          <div className="card-subtitle"> </div>
          <div className="image-list">
          <div className="image-item-container">
        <img src={workoutImage1} alt="Workout 1" className="image-item" /><h1>BIEG</h1></div>
        <div className="image-item-container">
        <img src={workoutImage2} alt="Workout 2" className="image-item" /><h1>PŁYWANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage3} alt="Workout 3" className="image-item" /><h1>ĆPANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage4} alt="Workout 4" className="image-item" /><h1>RUCHANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage1} alt="Workout 1" className="image-item" /><h1>BIEG</h1></div>
        <div className="image-item-container">
        <img src={workoutImage2} alt="Workout 2" className="image-item" /><h1>PŁYWANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage3} alt="Workout 3" className="image-item" /><h1>ĆPANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage4} alt="Workout 4" className="image-item" /><h1>RUCHANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage1} alt="Workout 1" className="image-item" /><h1>BIEG</h1></div>
        <div className="image-item-container">
        <img src={workoutImage2} alt="Workout 2" className="image-item" /><h1>PŁYWANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage3} alt="Workout 3" className="image-item" /><h1>ĆPANIE</h1></div>
        <div className="image-item-container">
        <img src={workoutImage4} alt="Workout 4" className="image-item" /><h1>RUCHANIE</h1></div>
      </div>
        </div>
      <div className="cards">
        <div className="card">
          <div className="card-title">Kroki</div>
          <PieChart
  series={[
    {
        arcLabel: (item) => `${item.value} 🥾 `,
      arcLabelMinAngle: 35,
      arcLabelRadius: '60%',
      data: [
        { id: 0, value: 10, label: 'Bieganie' },
        { id: 1, value: 15, label: 'Pływanie' },
        { id: 2, value: 20, label: 'Sranie' },
        
      ],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 2,
      cornerRadius: 9,
      startAngle: -46,
      endAngle: 270,
      
    },
  ]}
  
  width={200}
  height={200}
/>
        </div>

        <div className="card">
          <div className="card-title">Kalorie</div>
          <ul>
            <li className="card-subtitle">Bieganie</li>
            <li className="card-number">500 kcal</li>
            <li className="card-subtitle">Pływanie</li>
            <li className="card-number">300 kcal</li>
            <li className="card-subtitle">Sranie</li>
            <li className="card-number">200 kcal</li>


          </ul>
        </div>

       

        <div className="card" id="listacwiczen">
          <div className="card-title">Lista ćwiczeń</div>
            <ul>
                <li className="card-subtitle">Bieganie</li>
                
                <li className="card-subtitle">Pływanie</li>
               
                <li className="card-subtitle">Sranie</li>
                
                <li className="card-subtitle">Ruchanie</li>
                <li className="card-subtitle">Bieganie</li>
                
                <li className="card-subtitle">Pływanie</li>
               
                <li className="card-subtitle">Sranie</li>
                
                <li className="card-subtitle">Ruchanie</li>
                <li className="card-subtitle">Bieganie</li>
                
                <li className="card-subtitle">Pływanie</li>
               
                <li className="card-subtitle">Sranie</li>
                
                <li className="card-subtitle">Ruchanie</li>
                <li className="card-subtitle">Bieganie</li>
                
                <li className="card-subtitle">Pływanie</li>
               
                <li className="card-subtitle">Sranie</li>
                
                <li className="card-subtitle">Ruchanie</li>
                
            </ul>
        </div>
        <div className="card" id="listacwiczen">
          <div className="card-title">Summary</div>
           
        </div>
      </div>
      {isWindowVisible && (
                <div className={`slide-up-window ${isClosing ? 'closing' : ''}`}>

        
         <div className="daneosobowe">
         <div className="zaloguj-container">
      <button className="zaloguj" onClick={toggleLoginModal}>Zaloguj</button>
    </div>
    <div className="Dane">
<h1>Dane osobowe</h1>
<ul className='dane'>
    <li> <img src={focia} alt="Workout 2" className="focia" /></li>
    <hr className="single-line" />
    <li>Nickname:Perci121</li>
    <hr className="single-line" />
    <li>E-mail:przembigdonk@fuksiarz.pl</li>
    <hr className="single-line" />
    <li>Lata członkostwa w zespole R: 25 lat</li>
    <hr className="single-line" />
    <li>Wiek: 25</li>
    
</ul>
</div>

         </div>
          <ul className='opcje'>
            <li onClick={toggleSettingsModal}>Ustawienia</li>
            <li onClick={toggleNotificationsModal}>Powiadomienia</li>
            <li onClick={toggleHelpModal}>Pomoc</li>
            <li>Motivational Quote: Zapierdalać trzeba</li>
          </ul>
          <button onClick={toggleWindow}>Zamknij</button>
        </div>
      )}
      {/* Wyskakujące okienko logowania */}
      {isLoginModalVisible && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-button" onClick={toggleLoginModal}>X</button>
            <h2>Zaloguj się</h2>
            <form>
              <div className="form-group">
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" name="login" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Hasło:</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit" className="submit-button">Zaloguj się</button>
            </form>
          </div>
        </div>
      )}
      {/* Okienko ustawień */}
{isSettingsModalVisible && (
  <div className="settings-modal">
    <div className="modal-content">
      <button className="close-button" onClick={toggleSettingsModal}>X</button>
      <h2>Ustawienia</h2>
      <form>
        <div className="form-group">
          <label htmlFor="theme">Wybierz motyw:</label>
          <select id="theme" name="theme">
            <option value="dark">Ciemny</option>
            <option value="light">Jasny</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="language">Wybierz język:</label>
          <select id="language" name="language">
            <option value="pl">Polski</option>
            <option value="en">Angielski</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Zapisz ustawienia</button>
      </form>
    </div>
  </div>
)}

{/* Okienko powiadomień */}
{isNotificationsModalVisible && (
  <div className="notifications-modal">
    <div className="modal-content">
      <button className="close-button" onClick={toggleNotificationsModal}>X</button>
      <h2>Powiadomienia</h2>
      <form>
        <div className="form-group">
          <label>
            <input type="checkbox" name="emailNotifications" />
            Powiadomienia e-mail
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="smsNotifications" />
            Powiadomienia SMS
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="pushNotifications" />
            Powiadomienia push
          </label>
        </div>
        <button type="submit" className="submit-button">Zapisz powiadomienia</button>
      </form>
    </div>
  </div>
)}

      {/* Okienko pomocy */}
      {isHelpModalVisible && (
        <div className="help-modal">
          <div className="modal-content">
            <button className="close-button" onClick={toggleHelpModal}>X</button>
            <h2>Pomoc</h2>
            <ul>
              <li>FAQ</li>
              <li>Kontakt z obsługą</li>
              <li>Instrukcja obsługi</li>
            </ul>
          </div>
        </div>
      )}
    </div>
   
  );
}



import React, { useRef, useState, useEffect } from 'react'
import Kelien from '../assets/1749013963547.mp4'
import Grimpy_Kelien from '../assets/1749023036443.mp4'
import Nodding_Kelion from '../assets/1749112154004.mp4'
import Contact_Kelion from '../assets/1750086623665.mp4'

export default function GifText_Box() {
  const kelienRef = useRef(null)
  const [firstPlayed, setFirstPlayed] = useState(false)
  const [isReacting, setIsReacting] = useState(false)
  const [isNodding, setIsNodding] = useState(false)
  const [showFirstText, setShowFirstText] = useState(false)
  const [showSecondText, setShowSecondText] = useState(false)
  const [showThirdText, setShowThirdText] = useState(false)

  const handleKelienEnd = () => {
    setFirstPlayed(true)
    setShowFirstText(true)
  }

  const handleEarClick = () => {
    if (isReacting || isNodding) return // не мешаем другим анимациям
    setIsReacting(true)
    setShowFirstText(false)
    setShowSecondText(true)

    setTimeout(() => {
      setIsReacting(false)
      setShowSecondText(false)
      setShowFirstText(true)
    }, 4000)
  }

  // Наведение на About
  const handleMouseEnterAbout = () => {
    if (isReacting || isNodding) return
    setIsNodding(true)
    setShowFirstText(false)
    setShowThirdText(true)

    setTimeout(() => {
      setIsNodding(false)
      setShowThirdText(false)
      setShowFirstText(true)
    }, 4000) // длина третьей анимации
  }

  return (
    <div className="videogif" style={{ position: 'relative', width: '80%', height: '620px' }}>
      {/* Первая анимация */}
      <video
        ref={kelienRef}
        src={Kelien}
        autoPlay
        muted
        playsInline
        onEnded={handleKelienEnd}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          marginTop: '10px',
          display: isReacting || isNodding ? 'none' : 'block',
        }}
      />

      {/* Анимация 2 — реакция */}
      {isReacting && (
        <video
          src={Grimpy_Kelien}
          autoPlay
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* Анимация 3 — при наведении */}
      {isNodding && (
        <video
          src={Nodding_Kelion}
          autoPlay
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* Тексты */}
      {showFirstText && (
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '78.4%',
            transform: 'translateX(-60%)',
            color: '#ffcfb3',
            fontSize: '15px',
            fontFamily: "'Roboto Condensed', cursive",
            whiteSpace: 'pre-line',
            zIndex: 2,
          }}
        >
          Воу! Привіт! Я — Келіон, або ж Келі, твій гід по портфоліо! Як бачиш.. тут є декілька ключових місць моєї домівки. Тицяй, куди хочеш. Тільки не чіпай мене за вуха!:)
        </div>
      )}

      {showSecondText && (
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '78.4%',
            transform: 'translateX(-60%)',
            fontSize: '15px',
            color:'#ffcfb3',
            fontFamily: "'Roboto Condensed', cursive",
            whiteSpace: 'pre-line',
            zIndex: 2,
          }}
        >
          Е-ей! Я ж попросив — Не чипати мене за вуха! :( Я не дуже це люблю... Не треба так робити.
        </div>
      )}

      {showThirdText && (
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '23.8%',
            transform: 'translateX(-60%)',
            fontSize: '15px',
            color: '#ffcfb3',
            fontFamily: "'Roboto Condensed', cursive",
            whiteSpace: 'pre-line',
            zIndex: 2,
          }}
        >
          Що? Цікаво дізнатися <br />про мене?~ <br /> Ах, точно! Там багато про мою<br /> авторку.<br /> Але й про мене там є!
        </div>
      )}

      {/* Ухо — клик */}
      <div
        onClick={handleEarClick}
        style={{
          position: 'absolute',
          top: '40%',
          left: '2%',
          width: '28%',
          height: '70px',
          transform: 'rotate(-40deg)',
          cursor: 'pointer',
          zIndex: 5,
        }}
      />

      <div
        onMouseEnter={handleMouseEnterAbout}
        style={{
          width: '22%',
          height: '10px',
          position: 'absolute',
          top: '-98px',
          left: '30%',
          zIndex: 5,
        }}
      />
    </div>
  )
}

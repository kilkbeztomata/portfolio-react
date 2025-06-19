import React, { useRef, useState, useEffect } from 'react'
import Contact_Kelion from '../assets/1750086623665.mp4'

function ContactGif_Box(){
  const videoRef = useRef(null)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    const handleVideoEnd = () => {
      video.currentTime = video.duration
      video.pause()
      setShowText(true)
    }

    if (video) {
      video.addEventListener('ended', handleVideoEnd)
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <video
        ref={videoRef}
        src={Contact_Kelion}
        autoPlay
        muted
        playsInline
        style={{
          width: '98%',
          height: '98%',
          objectFit: 'cover',
          bottom: '5%',
          borderRadius: '5%',
        }}
      />

      {showText && (
        <div
          style={{
            position: 'absolute',
            left: '48%',
            bottom: '1.5%',
            transform: 'translateX(-50%)',
            color: '#ffcfb3',
            fontSize: '16px',
            fontFamily: "'Roboto Condensed', sans-serif",
            textAlign: 'center',
            padding: '10px 15px',
          }}
        >
          Опа-па! Це знову я! Бачу, тобі цікаво зв'язатися з моєю авторкою?:) Добре-добре.
        </div>
      )}
    </div>
  )
}
export default ContactGif_Box;
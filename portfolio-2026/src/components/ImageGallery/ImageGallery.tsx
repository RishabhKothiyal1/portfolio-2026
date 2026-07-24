import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) return null

  return (
    <div style={{ margin: '28px 0', border: '1.5px solid #1a1a1a', borderRadius: 10, overflow: 'hidden', background: '#fff' }}>
      <div style={{ position: 'relative' }}>
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              style={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                border: '1.5px solid #1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1,
                padding: 0,
                transition: 'all 0.2s ease',
              }}
            >
              &#8249;
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              style={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                border: '1.5px solid #1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1,
                padding: 0,
                transition: 'all 0.2s ease',
              }}
            >
              &#8250;
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '12px 0' }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: activeIndex === i ? 20 : 8,
                height: 8,
                borderRadius: 4,
                background: activeIndex === i ? '#1a1a1a' : '#d0d0d0',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
      {images[activeIndex].caption && (
        <div style={{ padding: '0 16px 12px' }}>
          <p style={{ fontSize: '13px', color: '#1a1a1a', opacity: 0.7, margin: 0, fontStyle: 'italic' }}>
            {images[activeIndex].caption}
          </p>
        </div>
      )}
    </div>
  )
}

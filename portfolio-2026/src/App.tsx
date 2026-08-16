import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import Home from './sections/Home'
import AiManthan2025 from './pages/blogs/AiManthan2025'
import GdgDevfest2025 from './pages/blogs/GdgDevfest2025'
import OnePixelDesignConference2026 from './pages/blogs/OnePixelDesignConference2026'
import MsbuildLocalhostNoida from './pages/blogs/MsbuildLocalhostNoida'
import DoDoodleDocs from './pages/docs/DoDoodleDocs'
import ReshareKaroDocs from './pages/docs/ReshareKaroDocs'
import TribeChatDocs from './pages/docs/TribeChatDocs'
import StreamieDocs from './pages/docs/StreamieDocs'
import RenderVirtualMouseDocs from './pages/docs/RenderVirtualMouseDocs'
import UrlShortenerDocs from './pages/docs/UrlShortenerDocs'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading && <Loader onComplete={handleLoadComplete} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main style={{ flex: 1 }}>
                  <Home showLoader={loading} />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/blog/ai-manthan-2025" element={<AiManthan2025 />} />
          <Route path="/blog/gdg-devfest-2025" element={<GdgDevfest2025 />} />
          <Route path="/blog/1pixel-design-conference-2026" element={<OnePixelDesignConference2026 />} />
          <Route path="/blog/msbuild-localhost-noida" element={<MsbuildLocalhostNoida />} />
          <Route path="/docs/do-doodle" element={<DoDoodleDocs />} />
          <Route path="/docs/reshare-karo" element={<ReshareKaroDocs />} />
          <Route path="/docs/tribechat" element={<TribeChatDocs />} />
          <Route path="/docs/streamie" element={<StreamieDocs />} />
          <Route path="/docs/render-virtual-mouse" element={<RenderVirtualMouseDocs />} />
          <Route path="/docs/url-shortener" element={<UrlShortenerDocs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

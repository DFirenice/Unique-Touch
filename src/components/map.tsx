'use client'

import { useEffect, useRef, useState } from 'react'
import '@maptiler/sdk/dist/maptiler-sdk.css'
import * as maptilersdk from '@maptiler/sdk'
import { Marker, Popup } from '@maptiler/sdk'

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    if (!mapContainer.current) return

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_APIKEY as string

    const map = new maptilersdk.Map({
      container: mapContainer.current,
      style: '/map-style.json',
      center: [-79.5984465, 43.5941405], // Mississauga center
      zoom: 16,
      scrollZoom: false,
      dragRotate: false,
      touchZoomRotate: false
    })

    // Ctrl + scroll zoom handling
    map.on('wheel', (e) => {
      if (!e.originalEvent.ctrlKey) {
        e.preventDefault()
        setShowOverlay(true)
        map.scrollZoom.disable()
      } else {
        setShowOverlay(false)
        map.scrollZoom.enable()
      }
    })

    map.on('dragstart', () => setShowOverlay(false))
    map.on('click', () => setShowOverlay(false))
    // map.on('dragend', () => setShowOverlay(true))

    // Hard-coded point near Mississauga
    const locationPoint = [-79.59919513349892, 43.59457393948794] as maptilersdk.LngLatLike // slightly NW
    const popup = new Popup({ offset: 25 }).setHTML(
      `<h3 class="text-brown-dp-0 px-2 font-bold text-xl z-[9]">UT 4 Wellness</h3><a href="https://www.google.com/maps/place/UT4Wellness/@43.5941405,-79.5984465,16z/data=!4m2!3m1!1s0x0:0x35a07fbd90a66c99?sa=X&ved=1t:2428&ictx=111&cshid=1755294483348711" target="_blank" class="active:border-none active:outline-none focus:outline:none focus:border-none px-2 py-1 text-brown-dp-1">Click here to open in Google Maps</a>`
    )

    new Marker({ color: '#ff5733' })
      .setLngLat(locationPoint)
      .setPopup(popup)
      .addTo(map)

    // Cleanup
    return () => map.remove()
  }, [])

  return (
    <div ref={mapContainer} className="w-full min-h-[60vh] h-96 relative overflow-hidden [&>.maplibregl-control-container>.maplibregl-ctrl-bottom-left]:hidden">
      {showOverlay && (
        <div className="absolute inset-0 flex bg-black/35 z-10 pointer-events-none">
          <span className="m-auto text-lg text-white drop-shadow">
            Press Ctrl and Scroll to zoom
          </span>
        </div>
      )}
    </div>
  )
}
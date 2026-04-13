
import { CONFIG } from '../../config/app.config'

export function GoogleMapEmbed({
  placeId = 'ChIJ21SghTNF04URZUcUqHMuz0U',
}: { placeId?: string }) {


  if (!CONFIG.MAPS_API_KEY) {
    return <p>Error: no se encontró la API key de Google Maps.</p>
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${CONFIG.MAPS_API_KEY}&q=place_id:${placeId}`

  return (
    <iframe
      title="Ubicación"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
    />
  )
}
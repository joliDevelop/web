type GoogleMapEmbedProps = {
    placeId?: string
}

export function GoogleMapEmbed({
    placeId = 'ChIJ21SghTNF04URZUcUqHMuz0U',
}: GoogleMapEmbedProps) {
    const apiKey = import.meta.env.VITE_MAPS_API_KEY

    if (!apiKey) {
        return <p>Error: no se encontró la API key de Google Maps.</p>
    }

    const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`

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
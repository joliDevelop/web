type GoogleMapEmbedProps = {
    placeId?: string;
    VITE_MAPS_API_KEY?: string;
}

export function GoogleMapEmbed({
    VITE_MAPS_API_KEY = 'AIzaSyARlQRYytiRJvKOKqrb1uUgWrRAmLTyak4',
    placeId = 'ChIJ21SghTNF04URZUcUqHMuz0U',
}: GoogleMapEmbedProps) {
    const apiKey = VITE_MAPS_API_KEY

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
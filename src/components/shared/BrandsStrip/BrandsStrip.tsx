import styles from './BrandsStrip.module.css'

interface BrandItem {
    logo: string
    alt: string
    name: string
}

interface BrandsStripProps {
    brands: BrandItem[]
}

export function BrandsStrip({ brands }: BrandsStripProps) {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {brands.map((brand) => (
                    <div key={brand.name} className={styles.item}>
                        <img src={brand.logo} alt={brand.alt} />
                    </div>
                ))}
            </div>
        </section>
    )
}
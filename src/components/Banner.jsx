import "../styles/Banner.css"

function Banner({ image, title }) {

    return (
        <section
            className="banner"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(${image})`
            }}
        >
            {title && <h1>{title}</h1>}
        </section>
    )
}

export default Banner
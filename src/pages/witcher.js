export default function Witcher() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', fontFamily: '"IBM Plex Sans", sans-serif', minHeight: '100vh', margin: 0 }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          borderBottom: '1px solid #333',
        }}
      >
        {/* Logo */}
        <img
          src="/images/streamberry.png"
          alt="Streamberry Logo"
          style={{ width: '150px' }}
        />
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for movies, shows..."
          style={{
            width: '40%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
          }}
        />
      </header>

      {/* Navigation Bar */}
      <nav style={{ marginTop: '10px', padding: '10px 0', borderBottom: '1px solid #333' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0, margin: 0 }}>
          {['Ana Sayfa', 'Diziler', 'Filmler', 'Yeni ve Popüler', 'Listem', 'Dile Göre Göz At'].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                }}
                // Hover efekti (renk değişimi)
                onMouseEnter={(e) => (e.target.style.color = '#E50914')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ position: 'relative', marginTop: '20px' }}>
        {/* The Witcher resmi ve açıklama */}
        <div style={{ position: 'relative', textAlign: 'left' }}>
          <img
            src="https://i.ytimg.com/vi/sqTeQ6pVGKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-kakUG0rqLNsvsEESXMVf7ECh2w"
            alt="The Witcher"
            style={{ width: '100%', height: '70vh', objectFit: 'cover', filter: 'brightness(60%)' }}
          />
          {/* Metin katmanı */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              transform: 'translateY(-50%)',
              color: 'white',
            }}
          >
            {/* Başlık */}
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>The Witcher</h1>
            {/* Açıklama */}
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '20px', lineHeight: '1.5' }}>
              Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world
              where people often prove more wicked than beasts.
            </p>
            {/* Trailer butonu */}
            <a
              href="https://www.youtube.com/watch?source_ve_path=Mjg2NjQsMTY0NTAz&v=iGockMxTRBs&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                border: '2px solid white',
                borderRadius: '5px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'background-color 0.3s, color 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              // Hover efekti (buton arka planı ve rengi değişir)
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#E50914';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.color = 'white';
              }}
            >
              Trailer
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

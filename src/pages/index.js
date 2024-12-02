import { useState } from 'react';
import { useRouter } from 'next/router'; // useRouter, sayfa yönlendirmesi için import edildi

export default function Home() {
  // Film listesi tanımlandı (başlık, resim URL'si ve yönlendirme rotası içeriyor)
  const movies = [
    { title: 'The Witcher', image: 'https://i.ytimg.com/vi/sqTeQ6pVGKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-kakUG0rqLNsvsEESXMVf7ECh2w', route: '/witcher' },
    { title: 'Breaking Bad', image: 'https://22dakika.org/wp-content/uploads/2015/06/Breaking-Bad-Movie-Wallpaper-Background.png' },
    { title: 'Dark', image: 'https://ntvb.tmsimg.com/assets/p14652182_b_h10_aa.jpg?w=1280&h=720' },
    { title: 'Friends', image: 'https://image.milimaj.com/i/milliyet/75/0x0/604b0f095542801b04134676.jpg' },
    { title: 'Rick and Morty', image: 'https://m.media-amazon.com/images/S/pv-target-images/80eb37634c2bb9d8475bbbce61904ebb6810de0f1008f006ba5f268b066ff47a.jpg' },
    { title: 'Stranger Things', image: 'https://c4.wallpaperflare.com/wallpaper/462/921/235/stranger-things-5k-wallpaper-preview.jpg' },
    { title: 'Narcos', image: 'https://images8.alphacoders.com/118/1184496.jpg' },
    { title: 'The Crown', image: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRa2Ojolth_4mw7fNztaPZJHe6V0oyMCD-NF0By0ddFyNQRb7NdWoHl3BPwSXVS3dbgG-jeiIaKzqAxqcpR_BGOHghInV3iHy6pY.jpg?r=f43' },
    { title: 'Peaky Blinders', image: 'https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg' },
  ];

  const [searchTerm, setSearchTerm] = useState(''); // Kullanıcının arama terimi
  const router = useRouter(); // Sayfa yönlendirme için Next.js'in useRouter hook'u

  // Kullanıcının arama terimine göre film listesini filtreler
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'black', color: 'white', fontFamily: '"IBM Plex Sans", sans-serif', minHeight: '100vh', margin: 0 }}>
      {/* Header alanı */}
      <header style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
        {/* Streamberry logosu */}
        <img
          src="/images/streamberry.png"
          alt="Streamberry Logo"
          style={{
            width: '150px',
            position: 'absolute',
            top: '20px',
            left: '20px',
          }}
        />
        {/* Arama kutusu */}
        <input
          type="text"
          placeholder="Search for movies, shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Arama terimini günceller
          style={{
            width: '60%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            marginTop: '10px',
          }}
        />

        {/* Navigasyon Barı */}
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
                  // Hover efekti
                  onMouseEnter={(e) => (e.target.style.color = '#E50914')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        {/* Film listesi */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {filteredMovies.map((movie, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '30%',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '5px',
                transition: 'transform 0.3s ease-in-out',
              }}
              onClick={() => movie.route && router.push(movie.route)} // Film tıklandığında rota yönlendirmesi
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} // Hover efekti
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* Film resmi */}
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: '100%',
                  borderRadius: '5px',
                }}
              />
              {/* Film başlığı */}
              <h3 style={{ textAlign: 'center', marginTop: '10px' }}>{movie.title}</h3>
            </div>
          ))}
        </div>
        {/* Arama sonucu bulunamazsa gösterilecek mesaj */}
        {filteredMovies.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No movies found.</p>
        )}
      </main>
    </div>
  );
}

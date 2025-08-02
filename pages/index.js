import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { ChevronDown } from 'lucide-react';
import header from './header';
import footer from './footer';
import { announcementService } from '../lib/supabase';

const Section = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        marginBottom: '1rem',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          padding: '1rem 1.5rem',
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textAlign: 'left',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        <span
          style={{
            display: 'inline-block',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease'
          }}
        >
          <ChevronDown size={18} />
        </span>
        {title}
      </button>
      {expanded && (
        <div
          style={{
            padding: '0 1.5rem 1.5rem 1.5rem',
            color: '#e5e7eb',
            lineHeight: '1.6'
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
    
    // Set up real-time subscription for announcements
    const subscription = announcementService.subscribeToAnnouncements((payload) => {
      console.log('Real-time update received:', payload);
      // Refetch announcements when changes occur
      fetchAnnouncements();
    });

    return () => {
      announcementService.unsubscribe(subscription);
    };
  }, []);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await announcementService.getAnnouncements();
      
      if (error) {
        console.error('Error fetching announcements:', error);
        setError('Failed to load announcements');
        setAnnouncements([]);
        return;
      }

      if (data) {
        // Convert database format to component format
        const formattedAnnouncements = data.map(announcement => ({
          id: announcement.id,
          title: announcement.title,
          content: announcement.content,
          details: announcement.details || [],
          extraInfo: announcement.extra_info || '',
          active: announcement.active,
          createdAt: announcement.created_at
        }));
        
        setAnnouncements(formattedAnnouncements);
      } else {
        setAnnouncements([]);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setError('Failed to load announcements');
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#1f3852',
      position: 'relative'
    }}>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      {/* Hero Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '70vh',
        overflow: 'hidden',
        zIndex: 0
      }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(65, 96, 130, 0.7), rgba(31, 56, 82, 0.7)),
              url('gallery/doanpic.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            filter: 'brightness(1)'
          }}
        />
      </div>

      {/* Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        textAlign: 'center',
        padding: '0 2rem',
        paddingTop: '120px' // Account for fixed header
      }}>
        <div>
          <h1 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              fontFamily: '"Roboto Slab", serif'
            }}
          >
            Welcome to Đoàn Tôma Thiện
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: '#e5e7eb',
              maxWidth: '600px',
              margin: '0 auto',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            St. Paul, Minnesota
          </p>
        </div>
      </div>

      {header()}
      
      <main style={{ 
        position: 'relative',
        zIndex: 1,
        padding: '2rem'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Announcements Section */}
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              padding: '2rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: '#f59e0b',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
              >
                📢
              </div>
              <h2 style={{ 
                margin: 0,
                fontSize: '2rem',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: '"Roboto Slab", serif'
              }}>
                Announcements
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  onClick={fetchAnnouncements}
                  disabled={loading}
                  style={{
                    // padding: '0.25rem 0.75rem',
                    padding: '0',
                    background: 'none',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    textDecoration: 'underline',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Refreshing...' : 'Click here to refresh'}
                </button>
              </div>
            </div>
            
            {loading ? (
              <div 
                style={{ textAlign: 'center', padding: '2rem', color: '#e5e7eb' }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    borderTopColor: '#ffffff',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    animation: 'spin 1s linear infinite'
                  }}
                />
                <p>Loading announcements from database...</p>
              </div>
            ) : error ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  color: '#fca5a5'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚠️</div>
                <p style={{ margin: 0, fontSize: '1rem' }}>{error}</p>
                <button
                  onClick={fetchAnnouncements}
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Try Again
                </button>
              </div>
            ) : announcements.length > 0 ? (
              announcements.map((announcement) => (
                <div key={announcement.id}>
                  <Section title={announcement.title}>
                    <p style={{ marginBottom: '1rem' }}>{announcement.content}</p>
                    {announcement.details && announcement.details.length > 0 && announcement.details[0] && (
                      <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                        {announcement.details.map((detail, index) => (
                          detail && <li key={index} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                        ))}
                      </ul>
                    )}
                    {announcement.extraInfo && (
                      <div style={{
                        padding: '1rem',
                        background: 'rgba(59, 130, 246, 0.2)',
                        borderRadius: '12px',
                        borderLeft: '4px solid #3b82f6',
                        fontStyle: 'italic'
                      }}>
                        <p style={{ margin: 0, color: '#bfdbfe' }}>💡 {announcement.extraInfo}</p>
                      </div>
                    )}
                  </Section>
                </div>
              ))
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem',
                  color: '#e5e7eb'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>No current announcements</p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.7 }}>Check back later for updates!</p>
              </div>
            )}
          </div>

          {/* Upcoming Events Section */}
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              padding: '2rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: '#10b981',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
              >
                🗓️
              </div>
              <h2 style={{ 
                margin: 0,
                fontSize: '2rem',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: '"Roboto Slab", serif'
              }}>
                Upcoming Events
              </h2>
            </div>
            
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a href="https://drive.google.com/file/d/1RiPzl0sG_P_dqPJqsp8P6pCJmO5B5BkN/view?usp=sharing">
                <img 
                  src="campradianceposter.jpg" 
                  width={200} 
                  height={260}
                  style={{
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      {footer()}
    </div>
  );
}
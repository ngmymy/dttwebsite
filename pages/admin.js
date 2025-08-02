// pages/admin.js
import { useState, useEffect } from 'react';
import header from './header';
import footer from './footer';
import Head from 'next/head';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Title",
      content: "Content",
      details: [
        "Detail"
      ],
      active: false,
      createdAt: new Date().toISOString()
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    details: [''],
    extraInfo: ''
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if already logged in
    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth === 'authenticated') {
      setIsAuthenticated(true);
    }
    
    // Load announcements from localStorage
    const savedAnnouncements = localStorage.getItem('announcements');
    if (savedAnnouncements) {
      try {
        setAnnouncements(JSON.parse(savedAnnouncements));
      } catch (error) {
        console.error('Error parsing saved announcements:', error);
      }
    }
  }, []);

  // Save announcements to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('announcements', JSON.stringify(announcements));
  }, [announcements]);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple auth - change these credentials!
    if (loginData.username === 'admin' && loginData.password === 'tomathien2025') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'authenticated');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (editingId) {
      // Update existing announcement
      setAnnouncements(prev => prev.map(announcement => 
        announcement.id === editingId 
          ? { ...announcement, ...formData }
          : announcement
      ));
    } else {
      // Create new announcement
      const newAnnouncement = {
        id: Math.max(...announcements.map(a => a.id), 0) + 1,
        ...formData,
        active: true,
        createdAt: new Date().toISOString()
      };
      setAnnouncements(prev => [newAnnouncement, ...prev]);
    }
    
    resetForm();
    setLoading(false);
    alert(editingId ? 'Announcement updated!' : 'Announcement created!');
  };

  const handleEdit = (announcement) => {
    setEditingId(announcement.id);
    setFormData({
      title: announcement.title,
      content: announcement.content,
      details: announcement.details || [''],
      extraInfo: announcement.extraInfo || ''
    });
  };

  const handleDelete = (id) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;
    
    setAnnouncements(prev => prev.filter(announcement => announcement.id !== id));
    alert('Announcement deleted!');
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: '',
      content: '',
      details: [''],
      extraInfo: ''
    });
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...formData.details];
    newDetails[index] = value;
    setFormData({ ...formData, details: newDetails });
  };

  const addDetail = () => {
    setFormData({ ...formData, details: [...formData.details, ''] });
  };

  const removeDetail = (index) => {
    const newDetails = formData.details.filter((_, i) => i !== index);
    setFormData({ ...formData, details: newDetails });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  // not yet signed in
  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '##1f3852'
      }}>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <Head>
          <title>Admin Login - Đoàn Tôma Thiện</title>
        </Head>
        {header()}
        <main style={{ 
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          paddingTop: 'max(120px, 10vh)'
        }}>
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '3rem',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '450px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              minHeight: 'fit-content'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: '#2563eb',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}
              >
                🔐
              </div>
              <h1 style={{ 
                margin: 0, 
                fontSize: '2rem',
                color: '#2563eb',
                fontWeight: 'bold'
              }}>
                Admin Portal
              </h1>
              <p style={{ 
                margin: '0.5rem 0 0 0', 
                color: '#6b7280',
                fontSize: '1rem'
              }}>
                Đoàn Tôma Thiện Management
              </p>
            </div>
            
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#374151',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb';
                    e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '2rem', position: 'relative' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#374151',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      paddingRight: '3.5rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.25rem',
                      borderRadius: '6px'
                    }}
                  >
                    <img 
                      src={showPassword ? '/icons/hide.png' : '/icons/show.png'}
                      alt={showPassword ? 'Hide password' : 'Show password'}
                      style={{ width: '20px', height: '20px' }}
                    />
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: loading ? '#94a3b8' : '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}
                    />
                    Logging in...
                  </span>
                ) : (
                  'Access Admin Panel'
                )}
              </button>
            </form>
          </div>
        </main>
        {footer()}
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: '#1f3852'
    }}>
      <Head>
        <title>Admin Panel - Đoàn Tôma Thiện</title>
      </Head>
      {header()}
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1600px', margin: '0 auto', width: '100%', paddingTop: 'max(120px, 10vh)' }}>
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '3rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <div>
              <h1 style={{ 
                margin: 0,
                fontSize: '2rem',
                color: '#2563eb',
                fontWeight: 'bold'
              }}>
                Admin Dashboard
              </h1>
              <p style={{ margin: '0.5rem 0 0 0', color: '#6b7280', fontSize: '1.1rem' }}>
                Manage announcements and content
              </p>
            </div>
            <button 
              onClick={handleLogout}
              style={{
                padding: '1rem 2rem',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              🚪 Logout
            </button>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
            gap: '3rem',
            minHeight: '600px'
          }}>
            {/* Form Section */}
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                height: 'fit-content'
              }}
            >
              <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#22c55e',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  {editingId ? '✏️' : '➕'}
                </div>
                <h2 style={{ 
                  margin: 0,
                  fontSize: '1.5rem',
                  color: '#000000',
                  fontWeight: 'bold'
                }}>
                  {editingId ? 'Edit Announcement' : 'Create New Announcement'}
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: '#374151',
                    fontSize: '0.875rem'
                  }}>
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter announcement title..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    required
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: '#374151',
                    fontSize: '0.875rem'
                  }}>
                    Main Content
                  </label>
                  <textarea
                    placeholder="Write your announcement content..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label style={{ fontWeight: '600', color: '#374151', fontSize: '0.875rem' }}>
                    📋 Details (bullet points):
                  </label>
                  {formData.details.map((detail, index) => (
                    <div key={index} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input
                        type="text"
                        placeholder={`Detail ${index + 1}...`}
                        value={detail}
                        onChange={(e) => handleDetailChange(index, e.target.value)}
                        style={{
                          flex: 1,
                          padding: '0.75rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                      {formData.details.length > 1 && (
                        <button 
                          type="button" 
                          onClick={() => removeDetail(index)}
                          style={{
                            padding: '0.75rem',
                            background: '#ff6b6b',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}
                        >
                          ❌
                        </button>
                      )}
                    </div>
                  ))}
                  <button 
                    type="button" 
                    onClick={addDetail}
                    style={{
                      padding: '0.75rem 1rem',
                      background: '#4ade80',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      alignSelf: 'flex-start'
                    }}
                  >
                    ➕ Add Detail
                  </button>
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: '#374151',
                    fontSize: '0.875rem'
                  }}>
                    💬 Extra Information (optional)
                  </label>
                  <textarea
                    placeholder="Any additional notes..."
                    value={formData.extraInfo}
                    onChange={(e) => setFormData({ ...formData, extraInfo: e.target.value })}
                    rows={2}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
                  <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                      flex: 1,
                      padding: '1rem 1.5rem',
                      background: loading ? '#94a3b8' : '#2563eb',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}
                  >
                    {loading ? '⏳ Saving...' : (editingId ? '✏️ Update' : '🚀 Create')}
                  </button>
                  {editingId && (
                    <button 
                      type="button" 
                      onClick={resetForm}
                      style={{
                        padding: '1rem 1.5rem',
                        background: '#6b7280',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '1rem'
                      }}
                    >
                      ❌ Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Announcements List */}
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div style={{ marginBottom: '2rem', marginTop: '4rem', textAlign: 'center' }}>
                <h2 style={{ 
                  fontSize: '1.5rem',
                  color: '#000000',
                  fontWeight: 'bold'
                }}>
                  📢 Live Announcements
                </h2>
                <p style={{ margin: '0.5rem 0 0 0', color: '#4b5563', fontSize: '0.9rem' }}>
                  {announcements.length} active announcement{announcements.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxHeight: '600px',
                overflowY: 'auto'
              }}>
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id}
                    style={{
                      padding: '1.5rem',
                      background: '#f8fafc',
                      borderRadius: '16px',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    <h3 style={{ 
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.2rem',
                      color: 'black',
                      fontWeight: 'bold'
                    }}>
                      📌 {announcement.title}
                    </h3>
                    <p style={{ margin: '0 0 0.5rem 0', lineHeight: 1.6, color: 'black' }}>
                      {announcement.content}
                    </p>
                    
                    {announcement.details && announcement.details.length > 0 && (
                      <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem', color: 'black' }}>
                        {announcement.details.map((detail, index) => (
                          <li key={index} style={{ marginBottom: '0.25rem', color: 'black' }}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {announcement.extraInfo && (
                      <div style={{ 
                        padding: '0.75rem',
                        background: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '8px',
                        marginTop: '1rem'
                      }}>
                        <p style={{ 
                          fontStyle: 'italic', 
                          color: '#1e40af',
                          margin: 0,
                          fontSize: '0.9rem'
                        }}>
                          💡 {announcement.extraInfo}
                        </p>
                      </div>
                    )}
                    
                    <div style={{
                      display: 'flex',
                      gap: '0.75rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #e5e7eb',
                      marginTop: '1rem'
                    }}>
                      <button 
                        onClick={() => handleEdit(announcement)}
                        style={{
                          flex: 1,
                          padding: '0.75rem 1rem',
                          background: '#3b82f6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(announcement.id)}
                        style={{
                          flex: 1,
                          padding: '0.75rem 1rem',
                          background: '#ef4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
                
                {announcements.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '3rem',
                    color: '#374151'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#000000' }}>No announcements yet</p>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#4b5563' }}>Create your first announcement to get started!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      {footer()}
    </div>
  );
}
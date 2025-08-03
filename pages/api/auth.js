// pages/api/auth.js
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Content-Type', 'application/json');
    
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    try {
      const { username, password } = req.body;
      
      // Simple auth - in production, use proper hashing
      const ADMIN_USERNAME = 'admin';
      const ADMIN_PASSWORD = 'tomathien2025';
      
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        return res.status(200).json({ 
          success: true, 
          token: 'admin-authenticated-' + Date.now() 
        });
      } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Auth error:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
}
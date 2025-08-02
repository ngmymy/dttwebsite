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
  
  // pages/api/announcements.js
  import fs from 'fs';
  import path from 'path';
  
  const ANNOUNCEMENTS_FILE = path.join(process.cwd(), 'data', 'announcements.json');
  
  // Initialize announcements file if it doesn't exist
  function initializeAnnouncementsFile() {
    const dir = path.dirname(ANNOUNCEMENTS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (!fs.existsSync(ANNOUNCEMENTS_FILE)) {
      const defaultAnnouncements = [
        {
          id: 1,
          title: "Example Announcement",
            content: "This is an example announcement.",
            details: ["Detail 1", "Detail 2"],
          active: true,
          createdAt: new Date().toISOString()
        }
      ];
      fs.writeFileSync(ANNOUNCEMENTS_FILE, JSON.stringify(defaultAnnouncements, null, 2));
    }
  }
  
  function getAnnouncements() {
    initializeAnnouncementsFile();
    const data = fs.readFileSync(ANNOUNCEMENTS_FILE, 'utf8');
    return JSON.parse(data);
  }
  
  function saveAnnouncements(announcements) {
    fs.writeFileSync(ANNOUNCEMENTS_FILE, JSON.stringify(announcements, null, 2));
  }
  
  export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Content-Type', 'application/json');
    
    const { method } = req;
    
    try {
      switch (method) {
        case 'GET':
          try {
            const announcements = getAnnouncements();
            return res.status(200).json(announcements);
          } catch (error) {
            console.error('GET error:', error);
            return res.status(500).json({ message: 'Error reading announcements', error: error.message });
          }
          
        case 'POST':
          // Simple auth check
          const authHeader = req.headers.authorization;
          if (!authHeader || !authHeader.startsWith('admin-authenticated-')) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
          
          try {
            const announcements = getAnnouncements();
            const newAnnouncement = {
              id: Math.max(...announcements.map(a => a.id), 0) + 1,
              ...req.body,
              createdAt: new Date().toISOString(),
              active: true
            };
            
            announcements.unshift(newAnnouncement);
            saveAnnouncements(announcements);
            return res.status(201).json(newAnnouncement);
          } catch (error) {
            console.error('POST error:', error);
            return res.status(500).json({ message: 'Error creating announcement', error: error.message });
          }
          
        case 'PUT':
          const authHeaderPut = req.headers.authorization;
          if (!authHeaderPut || !authHeaderPut.startsWith('admin-authenticated-')) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
          
          try {
            const announcements = getAnnouncements();
            const { id } = req.body;
            const index = announcements.findIndex(a => a.id === id);
            
            if (index === -1) {
              return res.status(404).json({ message: 'Announcement not found' });
            }
            
            announcements[index] = { ...announcements[index], ...req.body };
            saveAnnouncements(announcements);
            return res.status(200).json(announcements[index]);
          } catch (error) {
            console.error('PUT error:', error);
            return res.status(500).json({ message: 'Error updating announcement', error: error.message });
          }
          
        case 'DELETE':
          const authHeaderDel = req.headers.authorization;
          if (!authHeaderDel || !authHeaderDel.startsWith('admin-authenticated-')) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
          
          try {
            const announcements = getAnnouncements();
            const { id } = req.query;
            const filteredAnnouncements = announcements.filter(a => a.id !== parseInt(id));
            
            saveAnnouncements(filteredAnnouncements);
            return res.status(200).json({ message: 'Announcement deleted' });
          } catch (error) {
            console.error('DELETE error:', error);
            return res.status(500).json({ message: 'Error deleting announcement', error: error.message });
          }
          
        default:
          res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
          return res.status(405).json({ message: `Method ${method} Not Allowed` });
      }
    } catch (error) {
      console.error('Handler error:', error);
      return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  }
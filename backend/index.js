const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
let db;
(async () => {
    // Open a database connection
    db = await open({
        filename: path.join(__dirname, 'database.sqlite'),
        driver: sqlite3.Database
    });

    // Create tables
    await db.exec(`
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            badge_color TEXT,
            link TEXT
        );
    `);

    // Check if projects table is empty, if so, seed dummy data
    const projectCount = await db.get('SELECT COUNT(*) as count FROM projects');
    if (projectCount.count === 0) {
        const seedProjects = [
            { title: 'E-Commerce Platform', desc: 'A full-featured online store with product catalog, shopping cart, and payment integration built with React and Node.js', color: 'primary' },
            { title: 'Task Management App', desc: 'Collaborative task management tool with real-time updates, user authentication, and drag-and-drop interface', color: 'secondary' },
            { title: 'Analytics Dashboard', desc: 'Interactive dashboard displaying real-time data with charts, graphs, and custom filters for business intelligence', color: 'accent' },
            { title: 'Travel Booking Portal', desc: 'Complete travel booking system with destination search, price comparison, and reservation management features', color: 'success' },
            { title: 'Learning Management System', desc: 'Educational platform with courses, assignments, quizzes, and progress tracking for online learning', color: 'danger' },
            { title: 'Social Media App', desc: 'Feature-rich social network with user profiles, messaging, notifications, and content sharing capabilities', color: 'transparent' }
        ];

        for (const p of seedProjects) {
            await db.run('INSERT INTO projects (title, description, badge_color, link) VALUES (?, ?, ?, ?)', [p.title, p.desc, p.color, '#']);
        }
    }

    console.log('Database connected and initialized.');
})();

// GET /api/health
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// GET /api/time
app.get('/api/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});

// GET /api/projects - dynamic data fetch
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await db.all('SELECT * FROM projects');
        res.json(projects);
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

// POST /api/contact - store submissions in database
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
        res.json({
            success: true,
            message: 'Contact request saved successfully in database!'
        });
    } catch (e) {
        res.status(500).json({ error: 'Failed to save contact data' });
    }
});

// Start server
app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
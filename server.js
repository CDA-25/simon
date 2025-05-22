const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Sauvegarde des scores dans un fichier selon le nom fourni
app.post('/save', (req, res) => {
    const { filename, scores } = req.body;
    if (!filename || !Array.isArray(scores)) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    // Sécurise le nom de fichier pour éviter les injections de chemin
    const safeFilename = path.basename(filename).replace(/[^a-zA-Z0-9_.-]/g, '');
    const savesDir = path.join(__dirname, 'saves');
    if (!fs.existsSync(savesDir)) fs.mkdirSync(savesDir, { recursive: true });
    const filePath = path.join(savesDir, safeFilename);
    fs.writeFile(filePath, JSON.stringify(scores, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save' });
        }
        res.json({ status: 'ok' });
    });
});

app.get('/', (req, res) => {
    res.send('Serveur Simon en ligne !');
});

// Lecture des scores depuis le fichier selon le nom fourni
app.get('/scores/:filename', (req, res) => {
    const safeFilename = path.basename(req.params.filename).replace(/[^a-zA-Z0-9_.-]/g, '');
    const savesDir = path.join(__dirname, 'saves');
    const filePath = path.join(savesDir, safeFilename);
    fs.readFile(filePath, (err, data) => {
        if (err) return res.json([]);
        try {
            res.json(JSON.parse(data));
        } catch {
            res.json([]);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serveur de sauvegarde Simon lancé sur http://localhost:${PORT}`);
});

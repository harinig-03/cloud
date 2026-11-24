
const express = require('express');
const path = require('path');

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());

// Original frontend folder (uppercase PUBLIC)
const publicPath = path.join(__dirname, 'PUBLIC');

// Serve CSS, JavaScript and other frontend files
app.use(express.static(publicPath));

// ==========================================
// HOME PAGE
// ==========================================

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// ==========================================
// API 1: CLOUD SERVICES
// ==========================================

app.get('/api/services', (req, res) => {

    res.json([
        {
            serviceId: 1,
            serviceName: 'Amazon EC2',
            category: 'IaaS',
            pricingModel: 'Pay-as-you-go'
        },
        {
            serviceId: 2,
            serviceName: 'AWS Lambda',
            category: 'PaaS',
            pricingModel: 'Pay per request'
        },
        {
            serviceId: 3,
            serviceName: 'Amazon S3',
            category: 'IaaS',
            pricingModel: 'Pay per GB stored'
        },
        {
            serviceId: 4,
            serviceName: 'Google Cloud Run',
            category: 'PaaS',
            pricingModel: 'Pay per use'
        }
    ]);

});

// ==========================================
// API 2: SYSTEM STATUS
// ==========================================

app.get('/api/status', (req, res) => {

    res.json({
        status: 'Operational',
        developer: 'Harini Gokulkumar',
        environment: 'Cloud PaaS'
    });

});

// ==========================================
// 404 ERROR HANDLER
// ==========================================

app.use((req, res) => {

    res.status(404).json({
        error: 'Route not found',
        requestedURL: req.originalUrl
    });

});

// ==========================================
// LOCAL SERVER CONFIGURATION
// ==========================================

const PORT = process.env.PORT || 8080;

if (require.main === module) {

    app.listen(PORT, () => {
        console.log(
            `Cloud Catalog running at http://localhost:${PORT}`
        );
    });

}

// ==========================================
// EXPORT EXPRESS APP FOR VERCEL
// ==========================================

module.exports = app;

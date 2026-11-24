
const express = require('express');
const path = require('path');

const app = express();

// Serve frontend files locally
app.use(express.static(path.join(__dirname, 'public')));

// API 1: Cloud Services
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

// API 2: System Status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'Operational',
        developer: 'Harini Gokulkumar',
        environment: 'Cloud PaaS'
    });
});

// Port configuration
const PORT = process.env.PORT || 8080;

// Start locally, and export the app for Vercel
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Cloud Catalog server running on port ${PORT}`);
    });
}

module.exports = app;

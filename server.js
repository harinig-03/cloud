
const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());

// Serve frontend files locally
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// HOME PAGE
// ==========================================

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Cloud Catalog | Cloud Service Platform</title>

            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, sans-serif;
                    background: #f1f5f9;
                    color: #1e293b;
                    min-height: 100vh;
                }

                nav {
                    background: #0f172a;
                    color: white;
                    padding: 20px 8%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;
                }

                nav h2 {
                    color: #60a5fa;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin-left: 20px;
                }

                .hero {
                    text-align: center;
                    padding: 90px 20px;
                    background: linear-gradient(135deg, #0f172a, #1d4ed8);
                    color: white;
                }

                .hero h1 {
                    font-size: clamp(30px, 5vw, 48px);
                    margin-bottom: 18px;
                }

                .hero p {
                    font-size: 18px;
                    color: #dbeafe;
                    line-height: 1.7;
                }

                .container {
                    max-width: 1100px;
                    margin: 50px auto;
                    padding: 0 20px;
                }

                .container h2 {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 22px;
                }

                .card {
                    background: white;
                    padding: 28px;
                    border-radius: 14px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
                }

                .card h3 {
                    color: #2563eb;
                    margin-bottom: 12px;
                }

                .card p {
                    color: #64748b;
                    line-height: 1.6;
                }

                .api-section {
                    text-align: center;
                    margin-top: 45px;
                }

                .api-section a {
                    display: inline-block;
                    background: #2563eb;
                    color: white;
                    padding: 13px 22px;
                    margin: 8px;
                    border-radius: 8px;
                    text-decoration: none;
                }

                .api-section a:hover {
                    background: #1d4ed8;
                }

                footer {
                    background: #0f172a;
                    color: #cbd5e1;
                    text-align: center;
                    padding: 25px;
                    margin-top: 60px;
                }

                @media (max-width: 600px) {
                    nav {
                        justify-content: center;
                    }

                    nav a {
                        margin: 0 8px;
                    }

                    .hero {
                        padding: 65px 18px;
                    }
                }
            </style>
        </head>

        <body>

            <nav>
                <h2>☁ Cloud Catalog</h2>

                <div>
                    <a href="/">Home</a>
                    <a href="/api/services">Services API</a>
                    <a href="/api/status">System Status</a>
                </div>
            </nav>

            <section class="hero">
                <h1>Welcome to Cloud Catalog</h1>

                <p>
                    Explore cloud computing services and discover
                    flexible infrastructure and platform solutions.
                </p>
            </section>

            <main class="container">

                <h2>Our Cloud Services</h2>

                <div class="cards">

                    <div class="card">
                        <h3>Amazon EC2</h3>
                        <p>
                            Scalable virtual computing infrastructure
                            with pay-as-you-go pricing.
                        </p>
                    </div>

                    <div class="card">
                        <h3>AWS Lambda</h3>
                        <p>
                            Run application code without managing
                            servers using serverless computing.
                        </p>
                    </div>

                    <div class="card">
                        <h3>Amazon S3</h3>
                        <p>
                            Store and retrieve data using scalable
                            cloud storage.
                        </p>
                    </div>

                    <div class="card">
                        <h3>Google Cloud Run</h3>
                        <p>
                            Deploy and run applications using
                            managed cloud infrastructure.
                        </p>
                    </div>

                </div>

                <section class="api-section">
                    <h2>Explore Our APIs</h2>

                    <a href="/api/services">View Cloud Services</a>

                    <a href="/api/status">Check System Status</a>
                </section>

            </main>

            <footer>
                <p>Cloud Catalog | Cloud PaaS Project</p>
                <p>Developed by Harini Gokulkumar</p>
            </footer>

        </body>
        </html>
    `);
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
// 404 HANDLER
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
        console.log(`Cloud Catalog running at http://localhost:${PORT}`);
    });

}

// Export Express application for Vercel
module.exports = app;

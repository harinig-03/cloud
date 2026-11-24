
# Cloud Service Catalog

## Project Description
The Enterprise Cloud Service Catalog is a Node.js web application developed using the Express framework. It provides a user-friendly interface to explore cloud services and check application health.

## Technologies Used
- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- GitHub
- Vercel

## Features
1. Displays an Enterprise Cloud Service Catalog landing page.
2. Provides a Cloud Services JSON API.
3. Provides a System Status JSON API.
4. Supports local execution on port 8080.
5. Supports cloud deployment using environment-based port configuration.

## API Endpoints

| Endpoint | Description |
|---|---|
| /api/services | Returns cloud service details |
| /api/status | Returns system health information |

## Local Execution

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open:

http://localhost:8080

## Port 8080: Local vs Vercel Production

Locally, the application runs on port 8080 because no cloud platform assigns a port. The expression process.env.PORT || 8080 checks for an environment-provided port first; when it is unavailable, the server uses 8080. This makes development predictable: open http://localhost:8080 in a browser. In production, Vercel manages the serverless runtime and supplies the execution environment. The application must not assume that port 8080 is available or hard-code it. Instead, it reads process.env.PORT, allowing the platform to route incoming requests correctly. Therefore, one codebase supports local testing and cloud deployment without changing the port configuration. This improves portability across deployment environments reliably.

## Developer

Name: YOUR NAME

Roll Number: YOUR ROLL NUMBER

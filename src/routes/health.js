const { Router } = require('express');
const router = Router();
router.get('/health', (_req, res) => res.json({ status: 'ok' }));
router.get('/metrics', (_req, res) => res.json({ uptime: process.uptime() }));
module.exports = router;
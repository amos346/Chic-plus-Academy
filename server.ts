import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

async function startServer() {
  const app = express();
  app.use(express.json());

  const isProduction = process.env.NODE_ENV === 'production';
  let vite: any;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
  }

  // API Route: AI Fashion Design Concept Generator
  app.post('/api/ai/design-concept', async (req, res) => {
    try {
      const { styleTheme, targetAudience, season } = req.body;
      const prompt = `As the senior creative director at Chic-Plus Unisex Fashion School, create a detailed haute couture and ready-to-wear design concept for:
- Theme/Inspiration: ${styleTheme || 'Avant-Garde Sustainable Streetwear'}
- Target Audience: ${targetAudience || 'Gender-neutral contemporary'}
- Season: ${season || 'Spring/Summer Collection'}

Provide in structured JSON format (or clean markdown) with:
1. conceptTitle: Catchy professional title
2. silhouette: Detailed silhouette description
3. fabricRecommendations: Array of 3-4 suitable fabrics
4. colorPalette: Array of 4 hex codes / color names
5. constructionNotes: Pattern drafting and tailoring tips for students
6. stylingTips: Runway styling advice`;

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: prompt,
        config: {
          systemInstruction: 'You are the Master Curriculum AI at Chic-Plus Unisex Fashion School. Provide professional, inspiring, and technically precise fashion design concepts.',
        },
      });

      res.json({ success: true, result: response.text });
    } catch (error: any) {
      console.error('AI Design Concept Error:', error);
      res.status(500).json({ success: false, error: error.message || 'Failed to generate design concept' });
    }
  });

  // API Route: AI Course & Career Path Matcher
  app.post('/api/ai/career-match', async (req, res) => {
    try {
      const { experienceLevel, careerGoal, interestArea } = req.body;
      const prompt = `As the senior academic counselor at Chic-Plus Unisex Fashion School, recommend the ideal training track for a prospective student with:
- Experience Level: ${experienceLevel || 'Beginner'}
- Career Goal: ${careerGoal || 'Start independent fashion label'}
- Primary Interest: ${interestArea || 'Haute Couture & Garment Construction'}

Provide a structured recommendation including:
1. recommendedTrack: Name of the Chic-Plus program
2. duration: Course duration
3. coreModules: 3 key modules they will master
4. careerOutlook: Expected professional outcome
5. welcomeMessage: An encouraging, professional welcome from Chic-Plus`;

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: prompt,
        config: {
          systemInstruction: 'You are the Academic Admissions Advisor at Chic-Plus Unisex Fashion School.',
        },
      });

      res.json({ success: true, result: response.text });
    } catch (error: any) {
      console.error('AI Career Match Error:', error);
      res.status(500).json({ success: false, error: error.message || 'Failed to match career path' });
    }
  });

  // API Route: AI Tailoring Masterclass Advisor
  app.post('/api/ai/tailor-chat', async (req, res) => {
    try {
      const { question } = req.body;
      const prompt = `Student question on fashion design, pattern drafting, or tailoring: "${question}"`;

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: prompt,
        config: {
          systemInstruction: 'You are Master Tailor Instructor at Chic-Plus Unisex Fashion School. Answer with absolute professional precision regarding sewing techniques, fabric tension, draping, pattern grading, and garment construction.',
        },
      });

      res.json({ success: true, answer: response.text });
    } catch (error: any) {
      console.error('AI Tailor Chat Error:', error);
      res.status(500).json({ success: false, error: error.message || 'Failed to answer tailoring question' });
    }
  });

  if (isProduction) {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  const PORT = Number(process.env.PORT) || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CHIC-PLUS UNISEX FASHION SCHOOL server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, req.body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Forward the response headers and data
      res.setHeader('Set-Cookie', response.headers['set-cookie']);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
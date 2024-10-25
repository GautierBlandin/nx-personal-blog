import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/articles/deploy-remix-vite-on-lambda-using-pulumi');
  }, [navigate]);

  return null;
}

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WithNavbar } from '@nx-personal-blog/navigation';

const HomeContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/articles/deploy-remix-vite-on-lambda-using-pulumi');
  }, [navigate]);

  return null;
};

export default WithNavbar(HomeContent);

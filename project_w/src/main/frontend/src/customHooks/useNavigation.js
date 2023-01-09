import { useNavigate } from 'react-router-dom';

export const useNavigation = path => {
  const navigate = useNavigate();
  navigate(path);
};

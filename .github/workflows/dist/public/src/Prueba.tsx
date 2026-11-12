import { useParams } from 'react-router-dom';
import { QuizRunner } from '../components/QuizRunner';
import type { QuizMode } from '../data/types';

export function Prueba() {
  const { mode = 'rapido' } = useParams();
  return <QuizRunner mode={mode as QuizMode} />;
}

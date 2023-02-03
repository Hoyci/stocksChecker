import Content from '../../components/Content';
import Header from '../../components/Header';
import { useLocalStorage } from '../../hooks';

export default function Home() {
  const [storedValue, setStoredValue] = useLocalStorage('stocks', []);

  return (
    <>
      <Header />
      <Content storedValue={storedValue} setStoredValue={setStoredValue} />
    </>
  );
}

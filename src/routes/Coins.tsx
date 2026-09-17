import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Coins.styled";
import * as S from "../style/Coins.styled";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch("https://api.coinpaprika.com/v1/coins");
        const json = await response.json();
        setCoins(json.slice(0, 100));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>코인</S.Title>
      </S.Header>
      {loading ? (
        <S.Loader>Loding...</S.Loader>
      ) : (
        <S.CoinsList>
          {coins.map((coin) => (
            <Link key={coin.id} to={`/${coin.id}`} state={{ name: coin.name }}>
              <S.Coin>
                <S.Coinimg
                  src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                />
                {coin.name} &rarr;
              </S.Coin>
            </Link>
          ))}
        </S.CoinsList>
      )}
    </S.Container>
  );
}
export default Coins;

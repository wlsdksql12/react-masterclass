import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Coins.styled";
import * as S from "../style/Coins.styled";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { IsDarkContext } from "../App";
import { useAtom } from "jotai";
import { isDarkAtom } from "../atoms";

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
  const [isDark, setIsDark] = useAtom(isDarkAtom);
  const toggleDark = () => setIsDark((prev) => !prev);
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     try {
  //       const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //       const json = await response.json();
  //       setCoins(json.slice(0, 100));
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCoins();
  // }, []);

  return (
    <S.Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <S.Header>
        <S.Title>코인</S.Title>
        <button onClick={toggleDark}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </S.Header>
      {isLoading ? (
        <S.Loader>Loding...</S.Loader>
      ) : (
        <S.CoinsList>
          {data?.slice(0, 100).map((coin) => (
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

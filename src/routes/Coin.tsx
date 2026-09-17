import { useLocation, useParams } from "react-router-dom";
import * as S from "../style/Coin.styled";
import { useEffect, useState } from "react";

interface RouteState {
  name: string;
}

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { state } = useLocation() as { state: RouteState };
  const { coinId } = useParams() as { coinId: string };
  const [loading, setLoading] = useState(true);
  const [coinInfo, setCoinInfo] = useState([]);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const response = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`,
      );
      const json = await response.json();
      setCoinInfo(json);
    };

    const priceData = async () => {
      const response = await fetch(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`,
      );
      const json = await response.json();
      setPriceData(json);
    };

    infoData();
    priceData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>{state?.name || "Loading..."}</S.Title>
      </S.Header>
      {loading ? <S.Loader>Loding...</S.Loader> : null}
    </S.Container>
  );
}
export default Coin;

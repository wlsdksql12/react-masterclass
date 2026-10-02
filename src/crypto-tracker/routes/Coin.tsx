import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import * as S from "../style/Coin.styled";
import { useEffect, useState } from "react";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface RouteState {
  name: string;
}

interface RouteParams {
  coinId: string;
}

interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

function Coin() {
  const { state } = useLocation() as { state: RouteState };
  const { coinId } = useParams() as { coinId: string };
  // const [loading, setLoading] = useState(true);
  const [coinInfo, setCoinInfo] = useState<CoinInfo>();
  const [coinPrice, setCoinPrice] = useState<PriceData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInfo>({
    queryKey: ["Coin"],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>({
    queryKey: ["Ticker"],
    queryFn: () => fetchCoinTickers(coinId),
  });

  // useEffect(() => {
  //   const infoData = async () => {
  //     const response = await fetch(
  //       `https://api.coinpaprika.com/v1/coins/${coinId}`,
  //     );
  //     const json = await response.json();

  //     setCoinInfo(json);
  //   };

  //   const priceData = async () => {
  //     const response = await fetch(
  //       `https://api.coinpaprika.com/v1/tickers/${coinId}`,
  //     );
  //     const json = await response.json();
  //     setCoinPrice(json);
  //   };

  //   infoData();
  //   priceData();
  //   setLoading(false);
  // }, []);

  const loading = infoLoading || tickersLoading;

  return (
    <S.Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </title>
      </Helmet>
      <S.Header>
        <button>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <S.Title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </S.Title>
      </S.Header>
      {loading ? (
        <S.Loader>Loding...</S.Loader>
      ) : (
        <>
          <S.Overview>
            <S.OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </S.OverviewItem>
            <S.OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </S.OverviewItem>
            <S.OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </S.OverviewItem>
          </S.Overview>
          <S.Description>{infoData?.description}</S.Description>
          <S.Overview>
            <S.OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </S.OverviewItem>
            <S.OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </S.OverviewItem>
          </S.Overview>

          <S.Tabs>
            <S.Tab $isActive={chartMatch !== null}>
              <Link to={`/${coinId}/Chart`}>Chart</Link>
            </S.Tab>
            <S.Tab $isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </S.Tab>
          </S.Tabs>

          <Outlet context={{ coinId }} />
        </>
      )}
    </S.Container>
  );
}
export default Coin;

import React, { useState } from "react";
import "./index.css"; // index.css dosyanızın aynı dizinde olduğundan emin olun
import AyarlarSayfasi from "./components/AyarlarSayfasi";

function App() { // <-- App fonksiyonu burada tanımlanıyor
  const [mode, setMode] = useState(""); // aktif mod: scalping / yatırım
  const [selectedCoin, setSelectedCoin] = useState(""); // Seçilen coin
  const [selectedTimeframe, setSelectedTimeframe] = useState("1G"); // Varsayılan olarak "1G" (1 Gün) seçili

  // Tüm popüler zaman dilimleri
  const timeframes = [
    "1dk", "3dk", "5dk", "15dk", "30dk",
    "1s", "2s", "4s",
    "1G", "1Hafta", "1Ay"
  ];

  const getModeLabel = () => {
    if (mode === "scalping") return " | Scalping Modu";
    if (mode === "yatirim") return " | Yatırım Modu";
    return "";
  };

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  const handleAnalyze = () => {
    alert(`Analiz ediliyor: ${selectedCoin || 'Coin Seçilmedi'} - ${selectedTimeframe}`);
    // Burada analiz başlatma veya API çağrısı gibi işlemler yapılabilir.
  };

  const [showSettings, setShowSettings] = useState(false); {
    <button onClick={() => setShowSettings(true)}>Ayarlar</button>
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Üst Menü */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="flex gap-4 text-sm">
          <button onClick={() => setMode("scalping")} className="hover:text-blue-400">Scalping</button>
          <button onClick={() => setMode("yatirim")} className="hover:text-blue-400">Yatırım</button>
          <select className="bg-gray-800 px-2 py-1 rounded text-sm">
            <option>Binance</option>
            <option>KuCoin</option>
            <option>MEXC</option>
          </select>
          <button className="hover:text-blue-400">Ayarlar</button>
          <button className="hover:text-blue-400">Giriş</button>
        </div>
        <div className="text-gray-400 text-xs">
          Kripto Analiz{getModeLabel()}
        </div>
      </header>

      {/* Ana İçerik */}
      <main className="flex-1 p-6 flex flex-col gap-6 overflow-auto">
        <div className="flex flex-col lg:flex-row gap-6 flex-grow">
          {/* Sol Kısım: Kontrol Paneli, Grafik ve Tahmin Alanları */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Kontrol Paneli: Coin Seçimi, Zaman Dilimi ve Analiz Et Butonu */}
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg flex-wrap">
              {/* Coin Seçimi */}
              <select
                className="bg-gray-700 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCoin}
                onChange={handleCoinChange}
              >
                <option value="">Coin Seçin</option>
                <option value="BTCUSDT">BTC/USDT</option>
                <option value="ETHUSDT">ETH/USDT</option>
                <option value="BNBUSDT">BNB/USDT</option>
                {/* İstenirse daha fazla coin eklenebilir */}
              </select>

              {/* Grafik Zaman Dilimi Butonları */}
              <div className="flex gap-2 flex-wrap">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    className={`px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      selectedTimeframe === tf ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => handleTimeframeChange(tf)}
                  >
                    {tf}
                  </button>
                ))}
              </div>

              {/* Analiz Et Butonu */}
              <button
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleAnalyze}
              >
                Analiz Et
              </button>
            </div>
            {/* Kontrol Paneli Sonu */}

            {/* GRAFİK BLOĞU */}
            <div className="bg-gray-800 rounded-lg flex items-center justify-center flex-grow min-h-[16rem]">
              <span className="text-gray-400">[Grafik Gelecek]</span>
            </div>

            {/* Tahmin Alanları: Tek Satırda 4 Blok */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Açılış Fiyatı */}
              <div className="bg-gray-800 p-4 rounded-lg flex-1 min-w-[150px]">
                <h2 className="text-sm font-semibold mb-2">Açılış Fiyatı</h2>
                <p className="text-lg">55.000 USD</p>
              </div>

              {/* Kapanış Fiyat Tahmini */}
              <div className="bg-gray-800 p-4 rounded-lg flex-1 min-w-[150px]">
                <h2 className="text-sm font-semibold mb-2">Kapanış Tahmini</h2>
                <p className="text-lg">56.500 USD</p>
              </div>

              {/* Vadeli İşlem Önerisi ve Yüzdesi */}
              <div className="bg-gray-800 p-4 rounded-lg flex-1 min-w-[150px]">
                <h2 className="text-sm font-semibold mb-2">Vadeli İşlem Önerisi</h2>
                <p className="text-2xl text-yellow-400 font-bold">LONG %75</p>
              </div>

              {/* Yapay Zeka Tahmini */}
              <div className="bg-gray-800 p-4 rounded-lg flex-1 min-w-[150px]">
                <h2 className="text-sm font-semibold mb-2">Yapay Zeka Tahmini</h2>
                <p className="text-2xl text-green-400 font-bold">Yön: LONG ⬆</p>
              </div>
            </div>
            {/* Tahmin Alanları Sonu */}

          </div>

          {/* Sağ Kısım: İndikatör Paneli */}
          <div className="lg:w-1/5 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-sm font-semibold mb-4">İndikatörler</h2>
            <ul className="space-y-2 text-sm">
              <li><input type="checkbox" defaultChecked readOnly /> RSI</li>
              <li><input type="checkbox" defaultChecked readOnly /> MACD</li>
              <li><input type="checkbox" /> EMA</li>
              <li><input type="checkbox" /> Bollinger</li>
              <li><input type="checkbox" /> Ichimoku</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Alt Menü */}
      <footer className="px-6 py-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div>📊 Geçmiş Analizler</div>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Alarm Oluştur</button>
          <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">Portföyüm</button>
        </div>
      </footer>
    </div>
  );
} // <-- App fonksiyonunun doğru kapanışı

export default App;
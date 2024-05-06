import React from 'react';
import Chart from 'react-apexcharts';

// Dados simulados em formato JSON
import data from './data.json';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'gray', padding: '1rem' }}>
      <div style={{ color: 'white', fontWeight: 'bold' }}>Dashboard</div>
    </nav>
  );
}

// Componente para os cards de estatísticas gerais e indicadores de satisfação
function DashboardCard({ title, value }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '1rem', margin: '1rem', minWidth: '200px' }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function App() {
  // Dados para os gráficos
  const frequencyData = {
    options: {
      chart: {
        id: 'frequency-chart',
      },
      xaxis: {
        categories: data.frequency.categories,
      },
    },
    series: [{
      name: 'Frequência de Visitas',
      data: data.frequency.data,
    }],
  };

  const countryData = {
    options: {
      chart: {
        id: 'country-chart',
      },
      xaxis: {
        categories: data.country.categories,
      },
    },
    series: [{
      name: 'Visitantes por País de Origem',
      data: data.country.data,
    }],
  };

  const brazilData = {
    options: {
      chart: {
        id: 'brazil-chart',
      },
      xaxis: {
        categories: data.brazil.categories,
      },
    },
    series: [{
      name: 'Brasileiros por Estado',
      data: data.brazil.data,
    }],
  };

  const satisfactionData = {
    options: {
      chart: {
        id: 'satisfaction-chart',
      },
      xaxis: {
        categories: data.satisfaction.categories,
      },
    },
    series: [{
      name: 'Indicadores de Satisfação',
      data: data.satisfaction.data,
    }],
  };

  const touristSpotData = {
    options: {
      chart: {
        id: 'tourist-spot-chart',
      },
      xaxis: {
        categories: data.touristSpots.categories,
      },
    },
    series: [{
      name: 'Pontos Turísticos mais Visitados em Cabaceiras',
      data: data.touristSpots.data,
    }],
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h2>Gráfico de Frequência de Visitas</h2>
        <Chart options={frequencyData.options} series={frequencyData.series} type="line" height={350} />

        <h2>Gráfico de Visitantes por País de Origem</h2>
        <Chart options={countryData.options} series={countryData.series} type="bar" height={350} />

        <h2>Gráfico de Distribuição de Brasileiros por Estado</h2>
        <Chart options={brazilData.options} series={brazilData.series} type="bar" height={350} />

        <h2>Gráfico de Pontos Turísticos mais Visitados em Cabaceiras</h2>
        <Chart options={touristSpotData.options} series={touristSpotData.series} type="bar" height={350} />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <DashboardCard title="Total de Visitas" value={data.stats.totalVisits} />
          <DashboardCard title="Tempo Médio de Permanência" value={data.stats.avgTimeOnSite} />
          <DashboardCard title="Taxa de Satisfação" value={data.stats.satisfactionRate} />
        </div>
      </div>
    </div>
  );
}

export default App;

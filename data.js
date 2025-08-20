const DATA = {
  // === LIMA TOP (Distritos Premium) ===
  "San Isidro": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "San Isidro Sur (Financiero)": 11781,
      "San Isidro Centro": 10850,
      "San Isidro Norte": 10200,
      "El Golf": 11500,
      "Country Club": 11200,
      "Orrantia": 10800,
      "Córpac": 9950
    }
  },
  "Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecón de Miraflores": 10800,
      "Parque Kennedy": 10200,
      "Reducto": 9800,
      "San Antonio": 9500,
      "Miraflores Alto": 9200,
      "28 de Julio": 8900,
      "Límite Barranco": 8700
    }
  },
  "Barranco": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Barranco Cultural (Centro)": 9974,
      "Nuevo Barranco": 9400,
      "Malecón Barranco": 9600,
      "Plaza de Armas Barranco": 8800,
      "Barranco Tradicional": 8500,
      "Límite Chorrillos": 8200,
      "Zona Residencial": 8000
    }
  },
  "Santiago de Surco": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Monterrico": 7800,
      "Chacarilla": 7400,
      "Las Gardenias": 7200,
      "Valle Hermoso": 7000,
      "Surco Centro": 6800,
      "Surco Viejo": 6400,
      "Límite SJM": 5900
    }
  },
  "La Molina": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Molina Club": 7200,
      "La Planicie": 6900,
      "Rinconada": 6800,
      "Sol de la Molina": 6600,
      "La Molina Vieja": 6400,
      "Cieneguilla límite": 6100,
      "Zona Alta": 6000
    }
  },

  // === LIMA MODERNA (Distritos Intermedios) ===
  "Jesús María": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Plaza San Martín": 7500,
      "Hospital Rebagliati": 7200,
      "Brasil": 7000,
      "Centro Jesús María": 6900,
      "Limit Breña": 6600,
      "Jesús María Residencial": 6800,
      "Zona Industrial": 6400
    }
  },
  "Lince": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Petit Thouars": 7400,
      "Arequipa": 7200,
      "Lince Centro": 7000,
      "Estadio Nacional": 6800,
      "Límite La Victoria": 6500,
      "Zona Residencial": 6900,
      "Parque Mariscal Castilla": 7100
    }
  },
  "Magdalena del Mar": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Costa Verde": 7200,
      "Plaza Túpac Amaru": 6800,
      "Magdalena Centro": 6600,
      "Límite San Miguel": 6400,
      "Zona Residencial": 6700,
      "Playa Magdalena": 6900,
      "Magdalena Baja": 6300
    }
  },
  "San Miguel": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Marina": 6400,
      "Plaza San Miguel": 6200,
      "Bertolotto": 6000,
      "San Miguel Centro": 5900,
      "Límite Callao": 5600,
      "Zona Residencial": 6100,
      "Costa Verde San Miguel": 6300
    }
  },
  "Pueblo Libre": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Plaza Bolívar": 6300,
      "Cuadra 20 Brasil": 6100,
      "Pueblo Libre Centro": 5900,
      "Límite Magdalena": 5800,
      "Zona Universitaria": 6000,
      "San Marcos": 5700,
      "Pueblo Libre Alto": 6200
    }
  },
  "Surquillo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Surquillo Centro": 6800,
      "Angamos": 6600,
      "Límite San Borja": 6500,
      "Límite Miraflores": 6900,
      "Mercado Surquillo": 6300,
      "Zona Residencial": 6400,
      "Surquillo Norte": 6700
    }
  },
  "San Borja": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Empresarial": 7200,
      "Aviación": 7000,
      "San Borja Norte": 6800,
      "San Borja Sur": 6900,
      "Javier Prado": 7100,
      "Parques de San Borja": 6700,
      "Biblioteca Nacional": 6600
    }
  },

  // === LIMA ESTE ===
  "Ate": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Clara": 5200,
      "Vitarte": 4800,
      "Ate Centro": 4600,
      "Ceres": 4400,
      "Mayorazgo": 4900,
      "La Molina límite": 5000,
      "Huaycán": 4200
    }
  },
  "San Juan de Lurigancho": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Zárate": 4200,
      "Canto Grande": 3800,
      "Bayóvar": 3900,
      "Las Flores": 3700,
      "Mangomarca": 3500,
      "SJL Centro": 3600,
      "Huascar": 3400
    }
  },
  "El Agustino": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "El Agustino Centro": 4800,
      "10 de Octubre": 4600,
      "Limite Ate": 4700,
      "Zona Alta": 4500,
      "Zona Industrial": 4400,
      "Residencial": 4900,
      "Cerros": 4200
    }
  },
  "Santa Anita": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Anita Centro": 5200,
      "Los Jardines": 5000,
      "Parques Industriales": 4800,
      "Limite Ate": 4900,
      "Zona Residencial": 5100,
      "Santa Anita Norte": 4700,
      "Santa Anita Sur": 5300
    }
  },
  "Lurigancho-Chosica": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chosica Centro": 4200,
      "Chaclacayo limite": 4400,
      "Ñaña": 4000,
      "Ricardo Palma": 4100,
      "Carapongo": 3800,
      "Jicamarca": 3600,
      "Huachipa": 4300
    }
  },

  // === LIMA NORTE ===
  "Los Olivos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Los Olivos Centro": 3800,
      "Pro": 3600,
      "Mercado Unicachi": 3500,
      "Los Olivos Norte": 3400,
      "Los Olivos Oeste": 3196,
      "Las Palmeras": 3700,
      "Sol de Oro": 3900
    }
  },
  "San Martín de Porres": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Universitaria": 3400,
      "Tomás Valle": 3300,
      "Fiori": 3200,
      "SMP Centro": 3100,
      "Infantas": 3000,
      "Condevilla": 2900,
      "Límite Callao": 2800
    }
  },
  "Comas": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Comas Centro": 3200,
      "Año Nuevo": 3100,
      "La Libertad": 3000,
      "Carabayllo limite": 2900,
      "Zona Alta": 2800,
      "Collique": 3300,
      "Túpac Amaru": 3400
    }
  },
  "Independencia": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "MegaPlaza": 4400,
      "Tahuantinsuyo": 4200,
      "Independencia Centro": 4000,
      "Ermitaño": 3800,
      "Payet": 4100,
      "Zona Industrial": 3900,
      "Unificada": 4300
    }
  },
  "Puente Piedra": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Puente Piedra Centro": 3300,
      "Chillón": 3100,
      "Copacabana": 3200,
      "Shangrilá": 3000,
      "Ensenada": 2900,
      "Cercado": 3400,
      "Ventanilla limite": 3500
    }
  },
  "Carabayllo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Carabayllo Centro": 2900,
      "Santa Isabel": 3000,
      "San Pedro": 2800,
      "Raul Porras": 2700,
      "Lomas": 2600,
      "El Progreso": 3100,
      "Tungasuca": 2950
    }
  },

  // === LIMA SUR ===
  "Chorrillos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chorrillos Centro": 6200,
      "Agua Dulce": 5800,
      "Villa": 5600,
      "Malecón Grau": 6000,
      "Matellini": 5400,
      "Villa EL Salvador limite": 5200,
      "Huertos de Villa": 5900
    }
  },
  "San Juan de Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "SJM Centro": 3800,
      "Villa María": 3600,
      "Panamericana Sur": 3700,
      "Ciudad de Dios": 3500,
      "Pampas de San Juan": 3400,
      "María Auxiliadora": 3900,
      "Villa El Salvador limite": 3300
    }
  },
  "Villa El Salvador": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "VES Centro": 3400,
      "Sector 1": 3200,
      "Sector 2": 3300,
      "Sector 3": 3100,
      "José Carlos Mariátegui": 3000,
      "Zona Industrial": 3500,
      "Lomo de Corvina": 3600
    }
  },
  "Villa María del Triunfo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "VMT Centro": 3200,
      "Nueva Esperanza": 3000,
      "José Gálvez": 3100,
      "Inca Pachacutec": 2900,
      "Tablada de Lurín": 3300,
      "Cercado VMT": 3400,
      "Zona Alta": 2800
    }
  },
  "Lurín": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Lurín Centro": 4400,
      "Mamacona": 4200,
      "Villa Alejandro": 4000,
      "Julio C. Tello": 4300,
      "Km 40 Panamericana": 4500,
      "Pachacamac limite": 4100,
      "Zona Arqueológica": 3900
    }
  },
  "Pachacámac": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Pachacámac Pueblo": 3500,
      "Cieneguilla": 4800,
      "La Molina limite": 4600,
      "Club Hípico": 5200,
      "Manchay": 3200,
      "Villa Salvador": 3300,
      "Zona Arqueológica": 3400
    }
  },

  // === CALLAO ===
  "Callao": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Callao Cercado": 3800,
      "Puerto": 3600,
      "Carmen de la Legua": 4200,
      "Bellavista": 4400,
      "Centro Histórico": 3500,
      "Zona Industrial": 3400,
      "Aeropuerto": 3300
    }
  },
  "Bellavista": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Bellavista Centro": 4400,
      "Av. Colonial": 4200,
      "Plaza Bellavista": 4300,
      "Residencial": 4100,
      "La Perla limite": 4000,
      "Oscar Benavides": 4500,
      "Zona Alta": 3900
    }
  },
  "La Perla": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Perla Centro": 4200,
      "Residencial La Perla": 4400,
      "Costanera": 4600,
      "Plaza La Perla": 4100,
      "Elmer Faucett": 4000,
      "San Miguel limite": 4300,
      "Zona Baja": 3900
    }
  },
  "La Punta": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecón La Punta": 7200,
      "Centro La Punta": 6800,
      "Fortaleza": 6600,
      "Cantolao": 6400,
      "Avenida Grau": 6900,
      "Zona Residencial": 7000,
      "Terminal Marítimo": 6200
    }
  },
  "Ventanilla": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Ventanilla Centro": 3600,
      "Pachacútec": 3200,
      "Mi Perú": 3000,
      "Santa Rosa": 3400,
      "Angamos": 3500,
      "Ventanilla Alta": 3300,
      "Ventanilla Baja": 3700
    }
  },
  "Mi Perú": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Mi Perú Centro": 3000,
      "José Gálvez": 2900,
      "Bartolomé Herrera": 2800,
      "Ventanilla limite": 3100,
      "Ciudad Satélite": 2700,
      "Zona Industrial": 3200,
      "Costa Verde": 3300
    }
  },

  // === BALNEARIOS ===
  "Santa María del Mar": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Santa María": 7800,
      "Club Playa": 7600,
      "Santa María Centro": 7200,
      "Zona Residencial": 7400,
      "Punta Hermosa limite": 7000,
      "Malecón": 8000,
      "Zona Alta": 6800
    }
  },
  "Punta Hermosa": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Punta Hermosa": 5800,
      "Centro Punta Hermosa": 5400,
      "Zona Residencial": 5600,
      "Punta Negra limite": 5200,
      "Club de Playa": 6000,
      "Malecón Sur": 5000,
      "Zona Alta": 5300
    }
  },
  "Punta Negra": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Punta Negra": 5400,
      "Centro Punta Negra": 5000,
      "Zona Residencial": 5200,
      "San Bartolo limite": 4800,
      "Club Náutico": 5600,
      "Malecón": 4600,
      "Zona Alta": 4900
    }
  },
  "San Bartolo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa San Bartolo": 5200,
      "Centro San Bartolo": 4800,
      "Zona Residencial": 5000,
      "Pucusana limite": 4600,
      "Malecón San Bartolo": 4400,
      "Club de Playa": 5400,
      "Zona Alta": 4700
    }
  },
  "Pucusana": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Puerto Pucusana": 4000,
      "Pucusana Centro": 3800,
      "Playa Pucusana": 4200,
      "Zona Residencial": 3600,
      "Malecón": 3400,
      "Club Náutico": 4400,
      "Zona Alta": 3500
    }
  },
  "Ancón": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Balneario Ancón": 3800,
      "Ancón Centro": 3400,
      "Playa Hermosa": 3600,
      "Zona Residencial": 3200,
      "Santa Rosa limite": 3000,
      "Malecón Ancón": 4000,
      "Zona Alta": 3100
    }
  },
  "Santa Rosa": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Rosa Centro": 3200,
      "Playa Santa Rosa": 3400,
      "Chancay limite": 3000,
      "Ancón limite": 3100,
      "Zona Residencial": 2900,
      "Malecón": 3600,
      "Zona Rural": 2700
    }
  },

  // === OTROS DISTRITOS ===
  "Cercado de Lima": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Histórico": 6400,
      "Plaza Mayor": 6600,
      "Barrios Altos": 5800,
      "Monserrate": 6000,
      "Cinco Esquinas": 5600,
      "Abancay": 6200,
      "Tacna": 6100
    }
  },
  "Rímac": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Histórico Rímac": 5400,
      "Amancaes": 5000,
      "Cerro San Cristóbal": 4800,
      "Rímac Centro": 5200,
      "Zona Industrial": 4600,
      "Martinete": 5100,
      "Quinta Heeren": 5300
    }
  },
  "La Victoria": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Gamarra": 6800,
      "La Victoria Centro": 6400,
      "Balconcillo": 6200,
      "Guadalupe": 6000,
      "Santa Catalina": 6600,
      "San Cosme": 5800,
      "Apolo": 6100
    }
  },
  "Breña": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Breña Centro": 5400,
      "Plaza Castilla": 5600,
      "Hospital Loayza": 5300,
      "Brasil Breña": 5200,
      "Jesús María limite": 5500,
      "Zona Residencial": 5100,
      "Bolivia": 5000
    }
  },
  "San Luis": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "San Luis Centro": 6400,
      "Residencial San Luis": 6200,
      "Ate limite": 6000,
      "San Borja limite": 6600,
      "Zona Industrial": 5800,
      "Parques San Luis": 6300,
      "San Luis Norte": 6100
    }
  },
  "Chaclacayo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chaclacayo Centro": 5400,
      "Club Chaclacayo": 5800,
      "Chosica limite": 5200,
      "Cieneguilla limite": 5600,
      "Zona Residencial": 5000,
      "Río Rímac": 4800,
      "Zona Alta": 5300
    }
  }
};

// Función para obtener estadísticas actualizadas del mercado
function getMarketStats() {
  const stats = {
    totalDistricts: Object.keys(DATA).length,
    totalZones: 0,
    priceRange: { min: Infinity, max: -Infinity },
    avgPriceByCategory: {},
    topExpensive: [],
    mostAffordable: [],
    lastUpdate: "Agosto 2025"
  };
  
  const allPrices = [];
  
  Object.entries(DATA).forEach(([district, data]) => {
    const zones = Object.keys(data.zones);
    const prices = Object.values(data.zones);
    
    stats.totalZones += zones.length;
    
    // Actualizar rango de precios y recopilar todos los precios
    prices.forEach(price => {
      stats.priceRange.min = Math.min(stats.priceRange.min, price);
      stats.priceRange.max = Math.max(stats.priceRange.max, price);
      allPrices.push({ district, price });
    });
    
    // Calcular precio promedio por distrito
    const avgPrice = Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length);
    stats.avgPriceByCategory[district] = avgPrice;
  });
  
  // Ordenar para obtener top 10 más caros y más baratos
  allPrices.sort((a, b) => b.price - a.price);
  stats.topExpensive = allPrices.slice(0, 10);
  stats.mostAffordable = allPrices.slice(-10).reverse();
  
  return stats;
}

// Función para buscar por rango de precio
function findByPriceRange(minPrice, maxPrice) {
  const results = [];
  
  Object.entries(DATA).forEach(([district, data]) => {
    Object.entries(data.zones).forEach(([zone, price]) => {
      if (price >= minPrice && price <= maxPrice) {
        results.push({
          district,
          zone,
          price,
          priceFormatted: `S/ ${price.toLocaleString()}`
        });
      }
    });
  });
  
  return results.sort((a, b) => a.price - b.price);
}

// Función para obtener distritos por categoría
function getDistrictsByCategory() {
  return {
    "Lima Top (Premium)": ["San Isidro", "Miraflores", "Barranco", "Santiago de Surco", "La Molina"],
    "Lima Moderna (Intermedio)": ["Jesús María", "Lince", "Magdalena del Mar", "San Miguel", "Pueblo Libre", "Surquillo", "San Borja"],
    "Lima Este": ["Ate", "San Juan de Lurigancho", "El Agustino", "Santa Anita", "Lurigancho-Chosica"],
    "Lima Norte": ["Los Olivos", "San Martín de Porres", "Comas", "Independencia", "Puente Piedra", "Carabayllo"],
    "Lima Sur": ["Chorrillos", "San Juan de Miraflores", "Villa El Salvador", "Villa María del Triunfo", "Lurín", "Pachacámac"],
    "Callao": ["Callao", "Bellavista", "La Perla", "La Punta", "Ventanilla", "Mi Perú"],
    "Balnearios": ["Santa María del Mar", "Punta Hermosa", "Punta Negra", "San Bartolo", "Pucusana", "Ancón", "Santa Rosa"],
    "Centro Histórico": ["Cercado de Lima", "Rímac", "La Victoria", "Breña"],
    "Otros": ["San Luis", "Chaclacayo"]
  };
}

// Función para validación con reglas específicas del mercado peruano
function validateRealEstateData() {
  const errors = [];
  const warnings = [];
  
  Object.entries(DATA).forEach(([district, data]) => {
    // Verificar estructura básica
    if (!data.zones || Object.keys(data.zones).length === 0) {
      errors.push(`${district}: No tiene zonas definidas`);
    }
    
    // Validar precios realistas para el mercado peruano (2024-2025)
    if (data.zones) {
      Object.entries(data.zones).forEach(([zone, price]) => {
        if (price < 2000 || price > 15000) {
          warnings.push(`${district}.${zone}: Precio ${price} fuera del rango típico del mercado (S/2,000 - S/15,000)`);
        }
        
        if (typeof price !== 'number') {
          errors.push(`${district}.${zone}: Precio debe ser numérico`);
        }
      });
    }
  });
  
  return { errors, warnings };
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    DATA, 
    getMarketStats, 
    findByPriceRange, 
    getDistrictsByCategory, 
    validateRealEstateData 
  };
}
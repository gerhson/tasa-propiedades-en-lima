// Configuración del mercado inmobiliario peruano 2025
const MARKET_CONFIG = {
  FX_PEN_USD: 3.75, // Tipo de cambio actualizado agosto 2025
  MIN_AREA: 20,     // Área mínima en m²
  MAX_AREA: 2000,   // Área máxima en m²
  
  // Factores de ajuste por características
  FACTORS: {
    // Depreciación por antigüedad (más realista)
    DEPRECIATION: {
      0: 1.00,    // Nuevo
      5: 0.95,    // 0-5 años: -5%
      10: 0.88,   // 6-10 años: -12%
      15: 0.80,   // 11-15 años: -20%
      20: 0.72,   // 16-20 años: -28%
      30: 0.65,   // 21-30 años: -35%
      50: 0.55    // 31+ años: -45%
    },
    
    // Factores por tipo de propiedad
    PROPERTY_TYPE: {
      "Departamento": 1.00,
      "Casa": 1.08,
      "Terreno": 0.82
    },
    
    // Factor área libre (más realista)
    FREE_AREA_FACTOR: 0.45, // 45% del valor del área techada
    
    // Bonificaciones y penalizaciones
    ELEVATOR_BONUS: 1.04,        // +4% con ascensor
    NO_ELEVATOR_PENALTY_FLOOR: 4, // Penalización sin ascensor desde piso 4
    NO_ELEVATOR_PENALTY: 0.93,   // -7% sin ascensor en pisos altos
    
    // Bonificaciones por dormitorios y baños adicionales
    EXTRA_BEDROOM_BONUS: 0.025,  // +2.5% por dormitorio extra
    EXTRA_BATHROOM_BONUS: 0.02,  // +2% por baño extra
    MAX_BEDROOM_BONUS: 0.08,     // Máximo 8% por dormitorios
    MAX_BATHROOM_BONUS: 0.06     // Máximo 6% por baños
  }
};

// Validador de datos de entrada
class PropertyValidator {
  static validate(data) {
    const errors = [];
    const warnings = [];
    
    // Validar área
    if (data.areaTechada < MARKET_CONFIG.MIN_AREA || data.areaTechada > MARKET_CONFIG.MAX_AREA) {
      errors.push(`Área techada debe estar entre ${MARKET_CONFIG.MIN_AREA} y ${MARKET_CONFIG.MAX_AREA} m²`);
    }
    
    if (data.areaLibre < 0 || data.areaLibre > data.areaTechada * 3) {
      errors.push("Área libre no puede ser negativa ni mayor a 3 veces el área techada");
    }
    
    // Validar dormitorios y baños
    if (data.dorms < 1 || data.dorms > 10) {
      errors.push("Número de dormitorios debe estar entre 1 y 10");
    }
    
    if (data.baths < 1 || data.baths > 8) {
      errors.push("Número de baños debe estar entre 1 y 8");
    }
    
    // Validar piso
    if (data.piso < 1 || data.piso > 50) {
      errors.push("Piso debe estar entre 1 y 50");
    }
    
    // Validar antigüedad
    if (data.antiguedad < 0 || data.antiguedad > 100) {
      errors.push("Antigüedad debe estar entre 0 y 100 años");
    }
    
    // Advertencias
    if (data.areaTechada < 40) {
      warnings.push("Área muy pequeña para el mercado actual");
    }
    
    if (data.antiguedad > 30) {
      warnings.push("Propiedad muy antigua - considerar costos de renovación");
    }
    
    return { errors, warnings, isValid: errors.length === 0 };
  }
}

// Calculadora de valorización inmobiliaria
class PropertyValuator {
  constructor() {
    this.config = MARKET_CONFIG;
  }
  
  // Obtener factor de depreciación por antigüedad
  getDepreciationFactor(years) {
    const ranges = Object.keys(this.config.FACTORS.DEPRECIATION).map(Number).sort((a, b) => a - b);
    
    for (let i = ranges.length - 1; i >= 0; i--) {
      if (years >= ranges[i]) {
        return this.config.FACTORS.DEPRECIATION[ranges[i]];
      }
    }
    
    return this.config.FACTORS.DEPRECIATION[0];
  }
  
  // Calcular valor base por área
  calculateBaseValue(pricePerM2, areaTechada, areaLibre) {
    const techadaValue = pricePerM2 * areaTechada;
    const libreValue = pricePerM2 * areaLibre * this.config.FACTORS.FREE_AREA_FACTOR;
    return techadaValue + libreValue;
  }
  
  // Aplicar ajustes por características
  applyAdjustments(baseValue, characteristics) {
    let adjustedValue = baseValue;
    
    // Factor por tipo de propiedad
    const propertyFactor = this.config.FACTORS.PROPERTY_TYPE[characteristics.tipo] || 1;
    adjustedValue *= propertyFactor;
    
    // Depreciación por antigüedad
    const depreciationFactor = this.getDepreciationFactor(characteristics.antiguedad);
    adjustedValue *= depreciationFactor;
    
    // Bonificación por dormitorios adicionales (más de 2)
    if (characteristics.dorms > 2) {
      const extraBedrooms = characteristics.dorms - 2;
      const bedroomBonus = Math.min(
        extraBedrooms * this.config.FACTORS.EXTRA_BEDROOM_BONUS,
        this.config.FACTORS.MAX_BEDROOM_BONUS
      );
      adjustedValue *= (1 + bedroomBonus);
    }
    
    // Bonificación por baños adicionales (más de 1)
    if (characteristics.baths > 1) {
      const extraBathrooms = characteristics.baths - 1;
      const bathroomBonus = Math.min(
        extraBathrooms * this.config.FACTORS.EXTRA_BATHROOM_BONUS,
        this.config.FACTORS.MAX_BATHROOM_BONUS
      );
      adjustedValue *= (1 + bathroomBonus);
    }
    
    // Factor ascensor
    if (characteristics.ascensor === "con") {
      adjustedValue *= this.config.FACTORS.ELEVATOR_BONUS;
    } else if (characteristics.piso >= this.config.FACTORS.NO_ELEVATOR_PENALTY_FLOOR) {
      adjustedValue *= this.config.FACTORS.NO_ELEVATOR_PENALTY;
    }
    
    return adjustedValue;
  }
  
  // Calcular valorización completa
  calculate(district, zone, characteristics) {
    // Verificar que el distrito y zona existan
    if (!DATA[district] || !DATA[district].zones[zone]) {
      throw new Error(`Distrito "${district}" o zona "${zone}" no encontrados`);
    }
    
    const pricePerM2 = DATA[district].zones[zone];
    
    // Calcular valor base
    const baseValue = this.calculateBaseValue(
      pricePerM2, 
      characteristics.areaTechada, 
      characteristics.areaLibre
    );
    
    // Aplicar ajustes
    const adjustedValue = this.applyAdjustments(baseValue, characteristics);
    
    // Calcular rango (±8% para mayor precisión)
    const variance = 0.08;
    const minValue = adjustedValue * (1 - variance);
    const maxValue = adjustedValue * (1 + variance);
    
    return {
      baseValue,
      adjustedValue,
      minValue,
      maxValue,
      pricePerM2,
      totalArea: characteristics.areaTechada + characteristics.areaLibre
    };
  }
}

// Inicialización cuando se carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  const distritoSel = document.getElementById("distrito");
  const zonaSel = document.getElementById("zona");
  const form = document.getElementById("calc");
  const resultsDiv = document.getElementById("results");
  
  const valuator = new PropertyValuator();
  
  // Cargar distritos ordenados alfabéticamente
  const sortedDistricts = Object.keys(DATA).sort();
  sortedDistricts.forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    distritoSel.appendChild(option);
  });
  
  // Cargar zonas al cambiar distrito
  distritoSel.addEventListener("change", () => {
    loadZones();
  });
  
  function loadZones() {
    zonaSel.innerHTML = '<option value="">Seleccionar zona...</option>';
    
    if (!distritoSel.value) return;
    
    const zones = DATA[distritoSel.value].zones;
    const sortedZones = Object.keys(zones).sort();
    
    sortedZones.forEach(zone => {
      const option = document.createElement("option");
      option.value = zone;
      option.textContent = zone;
      zonaSel.appendChild(option);
    });
    
    // Mostrar precio base por m²
    updatePriceInfo();
  }
  
  function updatePriceInfo() {
    const priceInfoDiv = document.getElementById("priceInfo");
    if (!priceInfoDiv) return;
    
    if (distritoSel.value && zonaSel.value) {
      const pricePerM2 = DATA[distritoSel.value].zones[zonaSel.value];
      priceInfoDiv.innerHTML = `
        <div class="price-info">
          <strong>Precio base:</strong> S/ ${pricePerM2.toLocaleString()} por m²
        </div>
      `;
    } else {
      priceInfoDiv.innerHTML = "";
    }
  }
  
  // Actualizar precio cuando cambie la zona
  zonaSel.addEventListener("change", updatePriceInfo);
  
  // Procesar formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculate();
  });
  
  function calculate() {
    try {
      // Recopilar datos del formulario
      const formData = {
        distrito: distritoSel.value,
        zona: zonaSel.value,
        tipo: document.getElementById("tipo").value,
        areaTechada: parseFloat(document.getElementById("areaTechada").value) || 0,
        areaLibre: parseFloat(document.getElementById("areaLibre").value) || 0,
        dorms: parseInt(document.getElementById("dorms").value) || 1,
        baths: parseInt(document.getElementById("baths").value) || 1,
        piso: parseInt(document.getElementById("piso").value) || 1,
        ascensor: document.getElementById("ascensor").value,
        antiguedad: parseInt(document.getElementById("antiguedad").value) || 0,
        currency: document.getElementById("currency").value
      };
      
      // Validar datos
      const validation = PropertyValidator.validate(formData);
      
      if (!validation.isValid) {
        showErrors(validation.errors);
        return;
      }
      
      // Mostrar advertencias si las hay
      if (validation.warnings.length > 0) {
        showWarnings(validation.warnings);
      }
      
      // Calcular valorización
      const valuation = valuator.calculate(formData.distrito, formData.zona, formData);
      
      // Mostrar resultados
      displayResults(formData, valuation);
      
    } catch (error) {
      showErrors([error.message]);
    }
  }
  
  function displayResults(formData, valuation) {
    const currency = formData.currency === "USD" ? "USD" : "S/";
    const exchangeRate = formData.currency === "USD" ? (1 / MARKET_CONFIG.FX_PEN_USD) : 1;
    
    // Convertir valores a la moneda seleccionada
    const convertValue = (value) => (value * exchangeRate).toLocaleString('es-PE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    
    // Actualizar elementos del DOM
    document.getElementById("summary").textContent = 
      `Estimación para ${formData.tipo} en ${formData.zona}, ${formData.distrito}`;
    
    document.getElementById("valMin").textContent = 
      `${currency} ${convertValue(valuation.minValue)}`;
    
    document.getElementById("valMed").textContent = 
      `${currency} ${convertValue(valuation.adjustedValue)}`;
    
    document.getElementById("valMax").textContent = 
      `${currency} ${convertValue(valuation.maxValue)}`;
    
    // Mostrar detalles adicionales
    const detailsDiv = document.getElementById("details");
    if (detailsDiv) {
      const pricePerM2InCurrency = valuation.pricePerM2 * exchangeRate;
      const totalAreaFormatted = valuation.totalArea.toLocaleString('es-PE', { maximumFractionDigits: 1 });
      
      detailsDiv.innerHTML = `
        <div class="valuation-details">
          <p><strong>Precio por m²:</strong> ${currency} ${pricePerM2InCurrency.toLocaleString('es-PE', { maximumFractionDigits: 0 })}</p>
          <p><strong>Área total considerada:</strong> ${totalAreaFormatted} m²</p>
          <p><strong>Tipo de cambio:</strong> S/ ${MARKET_CONFIG.FX_PEN_USD.toFixed(2)} por USD</p>
          <p><strong>Última actualización:</strong> Agosto 2025</p>
        </div>
      `;
    }
    
    // Hacer visible la sección de resultados
    if (resultsDiv) {
      resultsDiv.style.display = "block";
      resultsDiv.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  function showErrors(errors) {
    const errorDiv = document.getElementById("errors") || createErrorDiv();
    errorDiv.innerHTML = `
      <div class="alert alert-error">
        <h4>⚠️ Errores encontrados:</h4>
        <ul>${errors.map(error => `<li>${error}</li>`).join("")}</ul>
      </div>
    `;
    errorDiv.style.display = "block";
  }
  
  function showWarnings(warnings) {
    const warningDiv = document.getElementById("warnings") || createWarningDiv();
    warningDiv.innerHTML = `
      <div class="alert alert-warning">
        <h4>⚡ Advertencias:</h4>
        <ul>${warnings.map(warning => `<li>${warning}</li>`).join("")}</ul>
      </div>
    `;
    warningDiv.style.display = "block";
  }
  
  function createErrorDiv() {
    const div = document.createElement("div");
    div.id = "errors";
    div.style.display = "none";
    form.parentNode.insertBefore(div, form);
    return div;
  }
  
  function createWarningDiv() {
    const div = document.createElement("div");
    div.id = "warnings";
    div.style.display = "none";
    form.parentNode.insertBefore(div, form);
    return div;
  }
});

// Función auxiliar para limpiar mensajes de error/advertencia
function clearMessages() {
  const errorDiv = document.getElementById("errors");
  const warningDiv = document.getElementById("warnings");
  
  if (errorDiv) errorDiv.style.display = "none";
  if (warningDiv) warningDiv.style.display = "none";
}

// Exportar para uso en otros módulos si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PropertyValidator, PropertyValuator, MARKET_CONFIG };
}
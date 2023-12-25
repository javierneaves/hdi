import { loadingEnd, loadingStart } from "./loading.js";

export function formPackages(){
  let paqueteCoberturas = 
[
  {
      "Clave": "23",
      "Descripcion": "AMPLIO PICK UPS",
      "Vigencia": {
          "Inicial": "2023-12-24T00:00:00",
          "Final": "2024-12-24T00:00:00"
      },
      "CoberturasObligatorias": {
          "Cobertura": [
              {
                  "Regla": "368",
                  "Clave": "233",
                  "Descripcion": "Daños Materiales",
                  "SumaAsegurada": "0.0",
                  "Deducible": "5.0",
                  "ProveedorAsistencia": "0",
                  "Deducibles": {
                      "Deducible": [
                          {
                              "Clave": "1.3",
                              "Descripcion": "3.0"
                          },
                          {
                              "Clave": "1.26",
                              "Descripcion": "4.0"
                          },
                          {
                              "Clave": "1.21",
                              "Descripcion": "5.0"
                          },
                          {
                              "Clave": "1.126",
                              "Descripcion": "7.0"
                          },
                          {
                              "Clave": "1.11389247",
                              "Descripcion": "8.0"
                          },
                          {
                              "Clave": "1.0",
                              "Descripcion": "10.0"
                          }
                      ]
                  },
                  "PrimaNeta": "5101.37184778339",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": {}
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "361",
                  "Clave": "235",
                  "Descripcion": "Accidentes Automovilísticos al Conductor",
                  "SumaAsegurada": "100000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "100.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "100000.0",
                                  "DescripcionSumaAsegurada": "$100,000.00"
                              },
                              {
                                  "SumaAsegurada": "200000.0",
                                  "DescripcionSumaAsegurada": "$200,000.00"
                              },
                              {
                                  "SumaAsegurada": "300000.0",
                                  "DescripcionSumaAsegurada": "$300,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "289",
                  "Clave": "236",
                  "Descripcion": "Robo Total",
                  "SumaAsegurada": "0.0",
                  "Deducible": "10.0",
                  "ProveedorAsistencia": "0",
                  "Deducibles": {
                      "Deducible": [
                          {
                              "Clave": "1.25",
                              "Descripcion": "5.0"
                          },
                          {
                              "Clave": "1.22368421",
                              "Descripcion": "7.0"
                          },
                          {
                              "Clave": "1.18868421",
                              "Descripcion": "8.0"
                          },
                          {
                              "Clave": "1.15368421",
                              "Descripcion": "9.0"
                          },
                          {
                              "Clave": "1.125",
                              "Descripcion": "10.0"
                          },
                          {
                              "Clave": "1.08698824",
                              "Descripcion": "13.0"
                          },
                          {
                              "Clave": "1.062",
                              "Descripcion": "15.0"
                          },
                          {
                              "Clave": "1.0",
                              "Descripcion": "20.0"
                          },
                          {
                              "Clave": "0.875",
                              "Descripcion": "25.0"
                          }
                      ]
                  },
                  "PrimaNeta": "1847.62419370221",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": {}
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "295",
                  "Clave": "242",
                  "Descripcion": "Asistencia Jurídica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "6923",
                  "PrimaNeta": "333.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "393",
                  "Clave": "253",
                  "Descripcion": "Responsabilidad Civil (Límite Único y Combinado)",
                  "SumaAsegurada": "1500000.0",
                  "Deducible": "25.0",
                  "ProveedorAsistencia": "0",
                  "Deducibles": {
                      "Deducible": [
                          {
                              "Clave": "1.0",
                              "Descripcion": "0.0"
                          },
                          {
                              "Clave": "1.0",
                              "Descripcion": "1.0"
                          },
                          {
                              "Clave": "0.98703",
                              "Descripcion": "10.0"
                          },
                          {
                              "Clave": "0.966",
                              "Descripcion": "25.0"
                          },
                          {
                              "Clave": "0.9229",
                              "Descripcion": "50.0"
                          },
                          {
                              "Clave": "0.8756",
                              "Descripcion": "75.0"
                          },
                          {
                              "Clave": "0.8311",
                              "Descripcion": "100.0"
                          },
                          {
                              "Clave": "0.7341",
                              "Descripcion": "150.0"
                          }
                      ]
                  },
                  "PrimaNeta": "3520.8151926072",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "750000.0",
                                  "DescripcionSumaAsegurada": "$750,000.00"
                              },
                              {
                                  "SumaAsegurada": "800000.0",
                                  "DescripcionSumaAsegurada": "$800,000.00"
                              },
                              {
                                  "SumaAsegurada": "850000.0",
                                  "DescripcionSumaAsegurada": "$850,000.00"
                              },
                              {
                                  "SumaAsegurada": "900000.0",
                                  "DescripcionSumaAsegurada": "$900,000.00"
                              },
                              {
                                  "SumaAsegurada": "950000.0",
                                  "DescripcionSumaAsegurada": "$950,000.00"
                              },
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1050000.0",
                                  "DescripcionSumaAsegurada": "$1,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "1100000.0",
                                  "DescripcionSumaAsegurada": "$1,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "1150000.0",
                                  "DescripcionSumaAsegurada": "$1,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "1200000.0",
                                  "DescripcionSumaAsegurada": "$1,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "1250000.0",
                                  "DescripcionSumaAsegurada": "$1,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "1300000.0",
                                  "DescripcionSumaAsegurada": "$1,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "1350000.0",
                                  "DescripcionSumaAsegurada": "$1,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "1400000.0",
                                  "DescripcionSumaAsegurada": "$1,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "1450000.0",
                                  "DescripcionSumaAsegurada": "$1,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "1550000.0",
                                  "DescripcionSumaAsegurada": "$1,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "1600000.0",
                                  "DescripcionSumaAsegurada": "$1,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "1650000.0",
                                  "DescripcionSumaAsegurada": "$1,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "1700000.0",
                                  "DescripcionSumaAsegurada": "$1,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "1750000.0",
                                  "DescripcionSumaAsegurada": "$1,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "1800000.0",
                                  "DescripcionSumaAsegurada": "$1,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "1850000.0",
                                  "DescripcionSumaAsegurada": "$1,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "1900000.0",
                                  "DescripcionSumaAsegurada": "$1,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "1950000.0",
                                  "DescripcionSumaAsegurada": "$1,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2050000.0",
                                  "DescripcionSumaAsegurada": "$2,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "2100000.0",
                                  "DescripcionSumaAsegurada": "$2,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "2150000.0",
                                  "DescripcionSumaAsegurada": "$2,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "2200000.0",
                                  "DescripcionSumaAsegurada": "$2,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "2250000.0",
                                  "DescripcionSumaAsegurada": "$2,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "2300000.0",
                                  "DescripcionSumaAsegurada": "$2,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "2350000.0",
                                  "DescripcionSumaAsegurada": "$2,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "2400000.0",
                                  "DescripcionSumaAsegurada": "$2,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "2450000.0",
                                  "DescripcionSumaAsegurada": "$2,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2550000.0",
                                  "DescripcionSumaAsegurada": "$2,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "2600000.0",
                                  "DescripcionSumaAsegurada": "$2,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "2650000.0",
                                  "DescripcionSumaAsegurada": "$2,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "2700000.0",
                                  "DescripcionSumaAsegurada": "$2,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "2750000.0",
                                  "DescripcionSumaAsegurada": "$2,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "2800000.0",
                                  "DescripcionSumaAsegurada": "$2,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "2850000.0",
                                  "DescripcionSumaAsegurada": "$2,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "2900000.0",
                                  "DescripcionSumaAsegurada": "$2,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "2950000.0",
                                  "DescripcionSumaAsegurada": "$2,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3050000.0",
                                  "DescripcionSumaAsegurada": "$3,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "3100000.0",
                                  "DescripcionSumaAsegurada": "$3,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "3150000.0",
                                  "DescripcionSumaAsegurada": "$3,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "3200000.0",
                                  "DescripcionSumaAsegurada": "$3,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "3250000.0",
                                  "DescripcionSumaAsegurada": "$3,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "3300000.0",
                                  "DescripcionSumaAsegurada": "$3,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "3350000.0",
                                  "DescripcionSumaAsegurada": "$3,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "3400000.0",
                                  "DescripcionSumaAsegurada": "$3,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "3450000.0",
                                  "DescripcionSumaAsegurada": "$3,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3550000.0",
                                  "DescripcionSumaAsegurada": "$3,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "3600000.0",
                                  "DescripcionSumaAsegurada": "$3,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "3650000.0",
                                  "DescripcionSumaAsegurada": "$3,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "3700000.0",
                                  "DescripcionSumaAsegurada": "$3,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "3750000.0",
                                  "DescripcionSumaAsegurada": "$3,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "3800000.0",
                                  "DescripcionSumaAsegurada": "$3,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "3850000.0",
                                  "DescripcionSumaAsegurada": "$3,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "3900000.0",
                                  "DescripcionSumaAsegurada": "$3,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "3950000.0",
                                  "DescripcionSumaAsegurada": "$3,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4050000.0",
                                  "DescripcionSumaAsegurada": "$4,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "4100000.0",
                                  "DescripcionSumaAsegurada": "$4,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "4150000.0",
                                  "DescripcionSumaAsegurada": "$4,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "4200000.0",
                                  "DescripcionSumaAsegurada": "$4,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "4250000.0",
                                  "DescripcionSumaAsegurada": "$4,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "4300000.0",
                                  "DescripcionSumaAsegurada": "$4,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "4350000.0",
                                  "DescripcionSumaAsegurada": "$4,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "4400000.0",
                                  "DescripcionSumaAsegurada": "$4,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "4450000.0",
                                  "DescripcionSumaAsegurada": "$4,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4550000.0",
                                  "DescripcionSumaAsegurada": "$4,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "4600000.0",
                                  "DescripcionSumaAsegurada": "$4,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "4650000.0",
                                  "DescripcionSumaAsegurada": "$4,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "4700000.0",
                                  "DescripcionSumaAsegurada": "$4,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "4750000.0",
                                  "DescripcionSumaAsegurada": "$4,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "4800000.0",
                                  "DescripcionSumaAsegurada": "$4,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "4850000.0",
                                  "DescripcionSumaAsegurada": "$4,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "4900000.0",
                                  "DescripcionSumaAsegurada": "$4,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "4950000.0",
                                  "DescripcionSumaAsegurada": "$4,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "CoberturasObligatoriasOpcionales": {
          "Cobertura": [
              {
                  "Regla": "292",
                  "Clave": "239",
                  "Descripcion": "Gastos Médicos Ocupantes (Límite Único Combinado)",
                  "SumaAsegurada": "20000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "281.533445511183",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "20000.0",
                                  "DescripcionSumaAsegurada": "$20,000.00"
                              },
                              {
                                  "SumaAsegurada": "25000.0",
                                  "DescripcionSumaAsegurada": "$25,000.00"
                              },
                              {
                                  "SumaAsegurada": "30000.0",
                                  "DescripcionSumaAsegurada": "$30,000.00"
                              },
                              {
                                  "SumaAsegurada": "35000.0",
                                  "DescripcionSumaAsegurada": "$35,000.00"
                              },
                              {
                                  "SumaAsegurada": "40000.0",
                                  "DescripcionSumaAsegurada": "$40,000.00"
                              },
                              {
                                  "SumaAsegurada": "45000.0",
                                  "DescripcionSumaAsegurada": "$45,000.00"
                              },
                              {
                                  "SumaAsegurada": "50000.0",
                                  "DescripcionSumaAsegurada": "$50,000.00"
                              },
                              {
                                  "SumaAsegurada": "55000.0",
                                  "DescripcionSumaAsegurada": "$55,000.00"
                              },
                              {
                                  "SumaAsegurada": "60000.0",
                                  "DescripcionSumaAsegurada": "$60,000.00"
                              },
                              {
                                  "SumaAsegurada": "65000.0",
                                  "DescripcionSumaAsegurada": "$65,000.00"
                              },
                              {
                                  "SumaAsegurada": "70000.0",
                                  "DescripcionSumaAsegurada": "$70,000.00"
                              },
                              {
                                  "SumaAsegurada": "75000.0",
                                  "DescripcionSumaAsegurada": "$75,000.00"
                              },
                              {
                                  "SumaAsegurada": "80000.0",
                                  "DescripcionSumaAsegurada": "$80,000.00"
                              },
                              {
                                  "SumaAsegurada": "85000.0",
                                  "DescripcionSumaAsegurada": "$85,000.00"
                              },
                              {
                                  "SumaAsegurada": "90000.0",
                                  "DescripcionSumaAsegurada": "$90,000.00"
                              },
                              {
                                  "SumaAsegurada": "95000.0",
                                  "DescripcionSumaAsegurada": "$95,000.00"
                              },
                              {
                                  "SumaAsegurada": "100000.0",
                                  "DescripcionSumaAsegurada": "$100,000.00"
                              },
                              {
                                  "SumaAsegurada": "105000.0",
                                  "DescripcionSumaAsegurada": "$105,000.00"
                              },
                              {
                                  "SumaAsegurada": "110000.0",
                                  "DescripcionSumaAsegurada": "$110,000.00"
                              },
                              {
                                  "SumaAsegurada": "115000.0",
                                  "DescripcionSumaAsegurada": "$115,000.00"
                              },
                              {
                                  "SumaAsegurada": "120000.0",
                                  "DescripcionSumaAsegurada": "$120,000.00"
                              },
                              {
                                  "SumaAsegurada": "125000.0",
                                  "DescripcionSumaAsegurada": "$125,000.00"
                              },
                              {
                                  "SumaAsegurada": "130000.0",
                                  "DescripcionSumaAsegurada": "$130,000.00"
                              },
                              {
                                  "SumaAsegurada": "135000.0",
                                  "DescripcionSumaAsegurada": "$135,000.00"
                              },
                              {
                                  "SumaAsegurada": "140000.0",
                                  "DescripcionSumaAsegurada": "$140,000.00"
                              },
                              {
                                  "SumaAsegurada": "145000.0",
                                  "DescripcionSumaAsegurada": "$145,000.00"
                              },
                              {
                                  "SumaAsegurada": "150000.0",
                                  "DescripcionSumaAsegurada": "$150,000.00"
                              },
                              {
                                  "SumaAsegurada": "155000.0",
                                  "DescripcionSumaAsegurada": "$155,000.00"
                              },
                              {
                                  "SumaAsegurada": "160000.0",
                                  "DescripcionSumaAsegurada": "$160,000.00"
                              },
                              {
                                  "SumaAsegurada": "165000.0",
                                  "DescripcionSumaAsegurada": "$165,000.00"
                              },
                              {
                                  "SumaAsegurada": "170000.0",
                                  "DescripcionSumaAsegurada": "$170,000.00"
                              },
                              {
                                  "SumaAsegurada": "175000.0",
                                  "DescripcionSumaAsegurada": "$175,000.00"
                              },
                              {
                                  "SumaAsegurada": "180000.0",
                                  "DescripcionSumaAsegurada": "$180,000.00"
                              },
                              {
                                  "SumaAsegurada": "185000.0",
                                  "DescripcionSumaAsegurada": "$185,000.00"
                              },
                              {
                                  "SumaAsegurada": "190000.0",
                                  "DescripcionSumaAsegurada": "$190,000.00"
                              },
                              {
                                  "SumaAsegurada": "195000.0",
                                  "DescripcionSumaAsegurada": "$195,000.00"
                              },
                              {
                                  "SumaAsegurada": "200000.0",
                                  "DescripcionSumaAsegurada": "$200,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "2806",
                  "Clave": "249",
                  "Descripcion": "Asistencia en viajes",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "6923",
                  "PrimaNeta": "420.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "398",
                  "Clave": "267",
                  "Descripcion": "Responsabilidad Civil Familiar",
                  "SumaAsegurada": "100000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "41.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "100000.0",
                              "DescripcionSumaAsegurada": "$100,000.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "322",
                  "Clave": "269",
                  "Descripcion": "Asistencia Médica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "6923",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "7001",
                  "Clave": "366",
                  "Descripcion": "Responsabilidad Civil Exceso por Muerte",
                  "SumaAsegurada": "2000000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "CoberturasOpcionales": {
          "Cobertura": [
              {
                  "Regla": "293",
                  "Clave": "240",
                  "Descripcion": "Equipo especial",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "0",
                          "Descripcion": "Rango"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "250000.0"
                  }
              },
              {
                  "Regla": "6995",
                  "Clave": "251",
                  "Descripcion": "Adaptaciones y conversiones (DM)",
                  "SumaAsegurada": "450000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "0",
                          "Descripcion": "Rango"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "450000.0"
                  }
              },
              {
                  "Regla": "6996",
                  "Clave": "252",
                  "Descripcion": "Adaptaciones y conversiones (RT)",
                  "SumaAsegurada": "450000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "0",
                          "Descripcion": "Rango"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "450000.0"
                  }
              },
              {
                  "Regla": "2941",
                  "Clave": "266",
                  "Descripcion": "Responsabilidad USA y Canadá",
                  "SumaAsegurada": "150000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "23295",
                  "PrimaNeta": "200.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "0.0",
                                  "DescripcionSumaAsegurada": "$0.00"
                              },
                              {
                                  "SumaAsegurada": "150000.0",
                                  "DescripcionSumaAsegurada": "$150,000.00"
                              },
                              {
                                  "SumaAsegurada": "300000.0",
                                  "DescripcionSumaAsegurada": "$300,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "321",
                  "Clave": "268",
                  "Descripcion": "Ayuda para gastos de transporte",
                  "SumaAsegurada": "300.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "250.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "300.0",
                              "DescripcionSumaAsegurada": "$300.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "415",
                  "Clave": "341",
                  "Descripcion": "Responsabilidad civil ecológica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "689",
                  "Clave": "355",
                  "Descripcion": "Responsabilidad Civil por daños a los Ocupantes",
                  "SumaAsegurada": "350000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "446.957",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "350000.0",
                                  "DescripcionSumaAsegurada": "$350,000.00"
                              },
                              {
                                  "SumaAsegurada": "400000.0",
                                  "DescripcionSumaAsegurada": "$400,000.00"
                              },
                              {
                                  "SumaAsegurada": "450000.0",
                                  "DescripcionSumaAsegurada": "$450,000.00"
                              },
                              {
                                  "SumaAsegurada": "500000.0",
                                  "DescripcionSumaAsegurada": "$500,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "6200",
                  "Clave": "641",
                  "Descripcion": "Responsabilidad Civil Cruzada",
                  "SumaAsegurada": "750000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "750000.0",
                                  "DescripcionSumaAsegurada": "$750,000.00"
                              },
                              {
                                  "SumaAsegurada": "800000.0",
                                  "DescripcionSumaAsegurada": "$800,000.00"
                              },
                              {
                                  "SumaAsegurada": "850000.0",
                                  "DescripcionSumaAsegurada": "$850,000.00"
                              },
                              {
                                  "SumaAsegurada": "900000.0",
                                  "DescripcionSumaAsegurada": "$900,000.00"
                              },
                              {
                                  "SumaAsegurada": "950000.0",
                                  "DescripcionSumaAsegurada": "$950,000.00"
                              },
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1050000.0",
                                  "DescripcionSumaAsegurada": "$1,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "1100000.0",
                                  "DescripcionSumaAsegurada": "$1,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "1150000.0",
                                  "DescripcionSumaAsegurada": "$1,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "1200000.0",
                                  "DescripcionSumaAsegurada": "$1,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "1250000.0",
                                  "DescripcionSumaAsegurada": "$1,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "1300000.0",
                                  "DescripcionSumaAsegurada": "$1,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "1350000.0",
                                  "DescripcionSumaAsegurada": "$1,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "1400000.0",
                                  "DescripcionSumaAsegurada": "$1,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "1450000.0",
                                  "DescripcionSumaAsegurada": "$1,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "1550000.0",
                                  "DescripcionSumaAsegurada": "$1,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "1600000.0",
                                  "DescripcionSumaAsegurada": "$1,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "1650000.0",
                                  "DescripcionSumaAsegurada": "$1,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "1700000.0",
                                  "DescripcionSumaAsegurada": "$1,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "1750000.0",
                                  "DescripcionSumaAsegurada": "$1,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "1800000.0",
                                  "DescripcionSumaAsegurada": "$1,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "1850000.0",
                                  "DescripcionSumaAsegurada": "$1,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "1900000.0",
                                  "DescripcionSumaAsegurada": "$1,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "1950000.0",
                                  "DescripcionSumaAsegurada": "$1,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2050000.0",
                                  "DescripcionSumaAsegurada": "$2,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "2100000.0",
                                  "DescripcionSumaAsegurada": "$2,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "2150000.0",
                                  "DescripcionSumaAsegurada": "$2,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "2200000.0",
                                  "DescripcionSumaAsegurada": "$2,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "2250000.0",
                                  "DescripcionSumaAsegurada": "$2,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "2300000.0",
                                  "DescripcionSumaAsegurada": "$2,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "2350000.0",
                                  "DescripcionSumaAsegurada": "$2,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "2400000.0",
                                  "DescripcionSumaAsegurada": "$2,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "2450000.0",
                                  "DescripcionSumaAsegurada": "$2,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2550000.0",
                                  "DescripcionSumaAsegurada": "$2,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "2600000.0",
                                  "DescripcionSumaAsegurada": "$2,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "2650000.0",
                                  "DescripcionSumaAsegurada": "$2,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "2700000.0",
                                  "DescripcionSumaAsegurada": "$2,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "2750000.0",
                                  "DescripcionSumaAsegurada": "$2,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "2800000.0",
                                  "DescripcionSumaAsegurada": "$2,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "2850000.0",
                                  "DescripcionSumaAsegurada": "$2,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "2900000.0",
                                  "DescripcionSumaAsegurada": "$2,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "2950000.0",
                                  "DescripcionSumaAsegurada": "$2,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3050000.0",
                                  "DescripcionSumaAsegurada": "$3,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "3100000.0",
                                  "DescripcionSumaAsegurada": "$3,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "3150000.0",
                                  "DescripcionSumaAsegurada": "$3,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "3200000.0",
                                  "DescripcionSumaAsegurada": "$3,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "3250000.0",
                                  "DescripcionSumaAsegurada": "$3,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "3300000.0",
                                  "DescripcionSumaAsegurada": "$3,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "3350000.0",
                                  "DescripcionSumaAsegurada": "$3,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "3400000.0",
                                  "DescripcionSumaAsegurada": "$3,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "3450000.0",
                                  "DescripcionSumaAsegurada": "$3,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3550000.0",
                                  "DescripcionSumaAsegurada": "$3,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "3600000.0",
                                  "DescripcionSumaAsegurada": "$3,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "3650000.0",
                                  "DescripcionSumaAsegurada": "$3,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "3700000.0",
                                  "DescripcionSumaAsegurada": "$3,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "3750000.0",
                                  "DescripcionSumaAsegurada": "$3,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "3800000.0",
                                  "DescripcionSumaAsegurada": "$3,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "3850000.0",
                                  "DescripcionSumaAsegurada": "$3,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "3900000.0",
                                  "DescripcionSumaAsegurada": "$3,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "3950000.0",
                                  "DescripcionSumaAsegurada": "$3,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4050000.0",
                                  "DescripcionSumaAsegurada": "$4,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "4100000.0",
                                  "DescripcionSumaAsegurada": "$4,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "4150000.0",
                                  "DescripcionSumaAsegurada": "$4,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "4200000.0",
                                  "DescripcionSumaAsegurada": "$4,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "4250000.0",
                                  "DescripcionSumaAsegurada": "$4,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "4300000.0",
                                  "DescripcionSumaAsegurada": "$4,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "4350000.0",
                                  "DescripcionSumaAsegurada": "$4,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "4400000.0",
                                  "DescripcionSumaAsegurada": "$4,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "4450000.0",
                                  "DescripcionSumaAsegurada": "$4,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4550000.0",
                                  "DescripcionSumaAsegurada": "$4,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "4600000.0",
                                  "DescripcionSumaAsegurada": "$4,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "4650000.0",
                                  "DescripcionSumaAsegurada": "$4,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "4700000.0",
                                  "DescripcionSumaAsegurada": "$4,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "4750000.0",
                                  "DescripcionSumaAsegurada": "$4,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "4800000.0",
                                  "DescripcionSumaAsegurada": "$4,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "4850000.0",
                                  "DescripcionSumaAsegurada": "$4,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "4900000.0",
                                  "DescripcionSumaAsegurada": "$4,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "4950000.0",
                                  "DescripcionSumaAsegurada": "$4,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "5843",
                  "Clave": "645",
                  "Descripcion": "Beneficios Servicios Satelitales",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "6194",
                  "Clave": "646",
                  "Descripcion": "Ayuda para gastos de transporte pérdida parcial",
                  "SumaAsegurada": "9000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "9000.0",
                              "DescripcionSumaAsegurada": "$9,000.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "Totales": {
          "PrimaNeta": "12542.301679604",
          "Descuento": "-3255.4034038812",
          "Financiamiento": "0.0",
          "DerechoPoliza": "690.0",
          "IVA": "1596.303724115648",
          "PrimaTotal": "11573.201999838448"
      },
      "Recibos": {
          "PrimeraExhibicion": "11573.201999838448",
          "RecibosSubsecuentes": "0",
          "Importe": "0.0"
      },
      "Ajuste": {
          "PorcentajeAjuste": "30.0",
          "TipoAjuste": "4612"
      }
  },
  {
      "Clave": "24",
      "Descripcion": "LIMITADO PICK UPS",
      "Vigencia": {
          "Inicial": "2023-12-24T00:00:00",
          "Final": "2024-12-24T00:00:00"
      },
      "CoberturasObligatorias": {
          "Cobertura": [
              {
                  "Regla": "361",
                  "Clave": "235",
                  "Descripcion": "Accidentes Automovilísticos al Conductor",
                  "SumaAsegurada": "100000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "100.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "100000.0",
                                  "DescripcionSumaAsegurada": "$100,000.00"
                              },
                              {
                                  "SumaAsegurada": "200000.0",
                                  "DescripcionSumaAsegurada": "$200,000.00"
                              },
                              {
                                  "SumaAsegurada": "300000.0",
                                  "DescripcionSumaAsegurada": "$300,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "289",
                  "Clave": "236",
                  "Descripcion": "Robo Total",
                  "SumaAsegurada": "0.0",
                  "Deducible": "10.0",
                  "ProveedorAsistencia": "0",
                  "Deducibles": {
                      "Deducible": [
                          {
                              "Clave": "1.25",
                              "Descripcion": "5.0"
                          },
                          {
                              "Clave": "1.22368421",
                              "Descripcion": "7.0"
                          },
                          {
                              "Clave": "1.18868421",
                              "Descripcion": "8.0"
                          },
                          {
                              "Clave": "1.15368421",
                              "Descripcion": "9.0"
                          },
                          {
                              "Clave": "1.125",
                              "Descripcion": "10.0"
                          },
                          {
                              "Clave": "1.08698824",
                              "Descripcion": "13.0"
                          },
                          {
                              "Clave": "1.062",
                              "Descripcion": "15.0"
                          },
                          {
                              "Clave": "1.0",
                              "Descripcion": "20.0"
                          },
                          {
                              "Clave": "0.875",
                              "Descripcion": "25.0"
                          }
                      ]
                  },
                  "PrimaNeta": "1847.62419370221",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": {}
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "295",
                  "Clave": "242",
                  "Descripcion": "Asistencia Jurídica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "27434",
                  "PrimaNeta": "333.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "393",
                  "Clave": "253",
                  "Descripcion": "Responsabilidad Civil (Límite Único y Combinado)",
                  "SumaAsegurada": "1500000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "Deducibles": {
                      "Deducible": [
                          {
                              "Clave": "1.0",
                              "Descripcion": "0.0"
                          },
                          {
                              "Clave": "1.0",
                              "Descripcion": "1.0"
                          },
                          {
                              "Clave": "0.98703",
                              "Descripcion": "10.0"
                          },
                          {
                              "Clave": "0.966",
                              "Descripcion": "25.0"
                          },
                          {
                              "Clave": "0.9229",
                              "Descripcion": "50.0"
                          },
                          {
                              "Clave": "0.8756",
                              "Descripcion": "75.0"
                          },
                          {
                              "Clave": "0.8311",
                              "Descripcion": "100.0"
                          },
                          {
                              "Clave": "0.7341",
                              "Descripcion": "150.0"
                          }
                      ]
                  },
                  "PrimaNeta": "3644.73622423105",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "750000.0",
                                  "DescripcionSumaAsegurada": "$750,000.00"
                              },
                              {
                                  "SumaAsegurada": "800000.0",
                                  "DescripcionSumaAsegurada": "$800,000.00"
                              },
                              {
                                  "SumaAsegurada": "850000.0",
                                  "DescripcionSumaAsegurada": "$850,000.00"
                              },
                              {
                                  "SumaAsegurada": "900000.0",
                                  "DescripcionSumaAsegurada": "$900,000.00"
                              },
                              {
                                  "SumaAsegurada": "950000.0",
                                  "DescripcionSumaAsegurada": "$950,000.00"
                              },
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1050000.0",
                                  "DescripcionSumaAsegurada": "$1,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "1100000.0",
                                  "DescripcionSumaAsegurada": "$1,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "1150000.0",
                                  "DescripcionSumaAsegurada": "$1,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "1200000.0",
                                  "DescripcionSumaAsegurada": "$1,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "1250000.0",
                                  "DescripcionSumaAsegurada": "$1,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "1300000.0",
                                  "DescripcionSumaAsegurada": "$1,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "1350000.0",
                                  "DescripcionSumaAsegurada": "$1,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "1400000.0",
                                  "DescripcionSumaAsegurada": "$1,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "1450000.0",
                                  "DescripcionSumaAsegurada": "$1,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "1550000.0",
                                  "DescripcionSumaAsegurada": "$1,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "1600000.0",
                                  "DescripcionSumaAsegurada": "$1,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "1650000.0",
                                  "DescripcionSumaAsegurada": "$1,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "1700000.0",
                                  "DescripcionSumaAsegurada": "$1,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "1750000.0",
                                  "DescripcionSumaAsegurada": "$1,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "1800000.0",
                                  "DescripcionSumaAsegurada": "$1,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "1850000.0",
                                  "DescripcionSumaAsegurada": "$1,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "1900000.0",
                                  "DescripcionSumaAsegurada": "$1,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "1950000.0",
                                  "DescripcionSumaAsegurada": "$1,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2050000.0",
                                  "DescripcionSumaAsegurada": "$2,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "2100000.0",
                                  "DescripcionSumaAsegurada": "$2,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "2150000.0",
                                  "DescripcionSumaAsegurada": "$2,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "2200000.0",
                                  "DescripcionSumaAsegurada": "$2,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "2250000.0",
                                  "DescripcionSumaAsegurada": "$2,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "2300000.0",
                                  "DescripcionSumaAsegurada": "$2,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "2350000.0",
                                  "DescripcionSumaAsegurada": "$2,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "2400000.0",
                                  "DescripcionSumaAsegurada": "$2,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "2450000.0",
                                  "DescripcionSumaAsegurada": "$2,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2550000.0",
                                  "DescripcionSumaAsegurada": "$2,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "2600000.0",
                                  "DescripcionSumaAsegurada": "$2,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "2650000.0",
                                  "DescripcionSumaAsegurada": "$2,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "2700000.0",
                                  "DescripcionSumaAsegurada": "$2,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "2750000.0",
                                  "DescripcionSumaAsegurada": "$2,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "2800000.0",
                                  "DescripcionSumaAsegurada": "$2,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "2850000.0",
                                  "DescripcionSumaAsegurada": "$2,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "2900000.0",
                                  "DescripcionSumaAsegurada": "$2,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "2950000.0",
                                  "DescripcionSumaAsegurada": "$2,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3050000.0",
                                  "DescripcionSumaAsegurada": "$3,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "3100000.0",
                                  "DescripcionSumaAsegurada": "$3,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "3150000.0",
                                  "DescripcionSumaAsegurada": "$3,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "3200000.0",
                                  "DescripcionSumaAsegurada": "$3,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "3250000.0",
                                  "DescripcionSumaAsegurada": "$3,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "3300000.0",
                                  "DescripcionSumaAsegurada": "$3,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "3350000.0",
                                  "DescripcionSumaAsegurada": "$3,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "3400000.0",
                                  "DescripcionSumaAsegurada": "$3,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "3450000.0",
                                  "DescripcionSumaAsegurada": "$3,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3550000.0",
                                  "DescripcionSumaAsegurada": "$3,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "3600000.0",
                                  "DescripcionSumaAsegurada": "$3,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "3650000.0",
                                  "DescripcionSumaAsegurada": "$3,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "3700000.0",
                                  "DescripcionSumaAsegurada": "$3,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "3750000.0",
                                  "DescripcionSumaAsegurada": "$3,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "3800000.0",
                                  "DescripcionSumaAsegurada": "$3,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "3850000.0",
                                  "DescripcionSumaAsegurada": "$3,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "3900000.0",
                                  "DescripcionSumaAsegurada": "$3,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "3950000.0",
                                  "DescripcionSumaAsegurada": "$3,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4050000.0",
                                  "DescripcionSumaAsegurada": "$4,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "4100000.0",
                                  "DescripcionSumaAsegurada": "$4,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "4150000.0",
                                  "DescripcionSumaAsegurada": "$4,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "4200000.0",
                                  "DescripcionSumaAsegurada": "$4,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "4250000.0",
                                  "DescripcionSumaAsegurada": "$4,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "4300000.0",
                                  "DescripcionSumaAsegurada": "$4,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "4350000.0",
                                  "DescripcionSumaAsegurada": "$4,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "4400000.0",
                                  "DescripcionSumaAsegurada": "$4,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "4450000.0",
                                  "DescripcionSumaAsegurada": "$4,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4550000.0",
                                  "DescripcionSumaAsegurada": "$4,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "4600000.0",
                                  "DescripcionSumaAsegurada": "$4,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "4650000.0",
                                  "DescripcionSumaAsegurada": "$4,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "4700000.0",
                                  "DescripcionSumaAsegurada": "$4,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "4750000.0",
                                  "DescripcionSumaAsegurada": "$4,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "4800000.0",
                                  "DescripcionSumaAsegurada": "$4,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "4850000.0",
                                  "DescripcionSumaAsegurada": "$4,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "4900000.0",
                                  "DescripcionSumaAsegurada": "$4,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "4950000.0",
                                  "DescripcionSumaAsegurada": "$4,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "CoberturasObligatoriasOpcionales": {
          "Cobertura": [
              {
                  "Regla": "292",
                  "Clave": "239",
                  "Descripcion": "Gastos Médicos Ocupantes (Límite Único Combinado)",
                  "SumaAsegurada": "20000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "281.533445511183",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "20000.0",
                                  "DescripcionSumaAsegurada": "$20,000.00"
                              },
                              {
                                  "SumaAsegurada": "25000.0",
                                  "DescripcionSumaAsegurada": "$25,000.00"
                              },
                              {
                                  "SumaAsegurada": "30000.0",
                                  "DescripcionSumaAsegurada": "$30,000.00"
                              },
                              {
                                  "SumaAsegurada": "35000.0",
                                  "DescripcionSumaAsegurada": "$35,000.00"
                              },
                              {
                                  "SumaAsegurada": "40000.0",
                                  "DescripcionSumaAsegurada": "$40,000.00"
                              },
                              {
                                  "SumaAsegurada": "45000.0",
                                  "DescripcionSumaAsegurada": "$45,000.00"
                              },
                              {
                                  "SumaAsegurada": "50000.0",
                                  "DescripcionSumaAsegurada": "$50,000.00"
                              },
                              {
                                  "SumaAsegurada": "55000.0",
                                  "DescripcionSumaAsegurada": "$55,000.00"
                              },
                              {
                                  "SumaAsegurada": "60000.0",
                                  "DescripcionSumaAsegurada": "$60,000.00"
                              },
                              {
                                  "SumaAsegurada": "65000.0",
                                  "DescripcionSumaAsegurada": "$65,000.00"
                              },
                              {
                                  "SumaAsegurada": "70000.0",
                                  "DescripcionSumaAsegurada": "$70,000.00"
                              },
                              {
                                  "SumaAsegurada": "75000.0",
                                  "DescripcionSumaAsegurada": "$75,000.00"
                              },
                              {
                                  "SumaAsegurada": "80000.0",
                                  "DescripcionSumaAsegurada": "$80,000.00"
                              },
                              {
                                  "SumaAsegurada": "85000.0",
                                  "DescripcionSumaAsegurada": "$85,000.00"
                              },
                              {
                                  "SumaAsegurada": "90000.0",
                                  "DescripcionSumaAsegurada": "$90,000.00"
                              },
                              {
                                  "SumaAsegurada": "95000.0",
                                  "DescripcionSumaAsegurada": "$95,000.00"
                              },
                              {
                                  "SumaAsegurada": "100000.0",
                                  "DescripcionSumaAsegurada": "$100,000.00"
                              },
                              {
                                  "SumaAsegurada": "105000.0",
                                  "DescripcionSumaAsegurada": "$105,000.00"
                              },
                              {
                                  "SumaAsegurada": "110000.0",
                                  "DescripcionSumaAsegurada": "$110,000.00"
                              },
                              {
                                  "SumaAsegurada": "115000.0",
                                  "DescripcionSumaAsegurada": "$115,000.00"
                              },
                              {
                                  "SumaAsegurada": "120000.0",
                                  "DescripcionSumaAsegurada": "$120,000.00"
                              },
                              {
                                  "SumaAsegurada": "125000.0",
                                  "DescripcionSumaAsegurada": "$125,000.00"
                              },
                              {
                                  "SumaAsegurada": "130000.0",
                                  "DescripcionSumaAsegurada": "$130,000.00"
                              },
                              {
                                  "SumaAsegurada": "135000.0",
                                  "DescripcionSumaAsegurada": "$135,000.00"
                              },
                              {
                                  "SumaAsegurada": "140000.0",
                                  "DescripcionSumaAsegurada": "$140,000.00"
                              },
                              {
                                  "SumaAsegurada": "145000.0",
                                  "DescripcionSumaAsegurada": "$145,000.00"
                              },
                              {
                                  "SumaAsegurada": "150000.0",
                                  "DescripcionSumaAsegurada": "$150,000.00"
                              },
                              {
                                  "SumaAsegurada": "155000.0",
                                  "DescripcionSumaAsegurada": "$155,000.00"
                              },
                              {
                                  "SumaAsegurada": "160000.0",
                                  "DescripcionSumaAsegurada": "$160,000.00"
                              },
                              {
                                  "SumaAsegurada": "165000.0",
                                  "DescripcionSumaAsegurada": "$165,000.00"
                              },
                              {
                                  "SumaAsegurada": "170000.0",
                                  "DescripcionSumaAsegurada": "$170,000.00"
                              },
                              {
                                  "SumaAsegurada": "175000.0",
                                  "DescripcionSumaAsegurada": "$175,000.00"
                              },
                              {
                                  "SumaAsegurada": "180000.0",
                                  "DescripcionSumaAsegurada": "$180,000.00"
                              },
                              {
                                  "SumaAsegurada": "185000.0",
                                  "DescripcionSumaAsegurada": "$185,000.00"
                              },
                              {
                                  "SumaAsegurada": "190000.0",
                                  "DescripcionSumaAsegurada": "$190,000.00"
                              },
                              {
                                  "SumaAsegurada": "195000.0",
                                  "DescripcionSumaAsegurada": "$195,000.00"
                              },
                              {
                                  "SumaAsegurada": "200000.0",
                                  "DescripcionSumaAsegurada": "$200,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "2806",
                  "Clave": "249",
                  "Descripcion": "Asistencia en viajes",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "27434",
                  "PrimaNeta": "420.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "398",
                  "Clave": "267",
                  "Descripcion": "Responsabilidad Civil Familiar",
                  "SumaAsegurada": "100000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "41.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "100000.0",
                              "DescripcionSumaAsegurada": "$100,000.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "322",
                  "Clave": "269",
                  "Descripcion": "Asistencia Médica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "27434",
                  "PrimaNeta": "41.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "7001",
                  "Clave": "366",
                  "Descripcion": "Responsabilidad Civil Exceso por Muerte",
                  "SumaAsegurada": "2000000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "503.44",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "CoberturasOpcionales": {
          "Cobertura": [
              {
                  "Regla": "293",
                  "Clave": "240",
                  "Descripcion": "Equipo especial",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "0",
                          "Descripcion": "Rango"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "250000.0"
                  }
              },
              {
                  "Regla": "6996",
                  "Clave": "252",
                  "Descripcion": "Adaptaciones y conversiones (RT)",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "0",
                          "Descripcion": "Rango"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "450000.0"
                  }
              },
              {
                  "Regla": "2931",
                  "Clave": "266",
                  "Descripcion": "Responsabilidad USA y Canadá",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "23295",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "150000.0",
                              "DescripcionSumaAsegurada": "150 Mdll (LUC)"
                          }
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "321",
                  "Clave": "268",
                  "Descripcion": "Ayuda para gastos de transporte",
                  "SumaAsegurada": "300.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "300.0",
                              "DescripcionSumaAsegurada": "$300.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "415",
                  "Clave": "341",
                  "Descripcion": "Responsabilidad civil ecológica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "689",
                  "Clave": "355",
                  "Descripcion": "Responsabilidad Civil por daños a los Ocupantes",
                  "SumaAsegurada": "350000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "350000.0",
                                  "DescripcionSumaAsegurada": "$350,000.00"
                              },
                              {
                                  "SumaAsegurada": "400000.0",
                                  "DescripcionSumaAsegurada": "$400,000.00"
                              },
                              {
                                  "SumaAsegurada": "450000.0",
                                  "DescripcionSumaAsegurada": "$450,000.00"
                              },
                              {
                                  "SumaAsegurada": "500000.0",
                                  "DescripcionSumaAsegurada": "$500,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "6200",
                  "Clave": "641",
                  "Descripcion": "Responsabilidad Civil Cruzada",
                  "SumaAsegurada": "750000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "750000.0",
                                  "DescripcionSumaAsegurada": "$750,000.00"
                              },
                              {
                                  "SumaAsegurada": "800000.0",
                                  "DescripcionSumaAsegurada": "$800,000.00"
                              },
                              {
                                  "SumaAsegurada": "850000.0",
                                  "DescripcionSumaAsegurada": "$850,000.00"
                              },
                              {
                                  "SumaAsegurada": "900000.0",
                                  "DescripcionSumaAsegurada": "$900,000.00"
                              },
                              {
                                  "SumaAsegurada": "950000.0",
                                  "DescripcionSumaAsegurada": "$950,000.00"
                              },
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1050000.0",
                                  "DescripcionSumaAsegurada": "$1,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "1100000.0",
                                  "DescripcionSumaAsegurada": "$1,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "1150000.0",
                                  "DescripcionSumaAsegurada": "$1,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "1200000.0",
                                  "DescripcionSumaAsegurada": "$1,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "1250000.0",
                                  "DescripcionSumaAsegurada": "$1,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "1300000.0",
                                  "DescripcionSumaAsegurada": "$1,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "1350000.0",
                                  "DescripcionSumaAsegurada": "$1,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "1400000.0",
                                  "DescripcionSumaAsegurada": "$1,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "1450000.0",
                                  "DescripcionSumaAsegurada": "$1,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "1550000.0",
                                  "DescripcionSumaAsegurada": "$1,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "1600000.0",
                                  "DescripcionSumaAsegurada": "$1,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "1650000.0",
                                  "DescripcionSumaAsegurada": "$1,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "1700000.0",
                                  "DescripcionSumaAsegurada": "$1,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "1750000.0",
                                  "DescripcionSumaAsegurada": "$1,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "1800000.0",
                                  "DescripcionSumaAsegurada": "$1,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "1850000.0",
                                  "DescripcionSumaAsegurada": "$1,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "1900000.0",
                                  "DescripcionSumaAsegurada": "$1,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "1950000.0",
                                  "DescripcionSumaAsegurada": "$1,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2050000.0",
                                  "DescripcionSumaAsegurada": "$2,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "2100000.0",
                                  "DescripcionSumaAsegurada": "$2,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "2150000.0",
                                  "DescripcionSumaAsegurada": "$2,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "2200000.0",
                                  "DescripcionSumaAsegurada": "$2,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "2250000.0",
                                  "DescripcionSumaAsegurada": "$2,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "2300000.0",
                                  "DescripcionSumaAsegurada": "$2,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "2350000.0",
                                  "DescripcionSumaAsegurada": "$2,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "2400000.0",
                                  "DescripcionSumaAsegurada": "$2,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "2450000.0",
                                  "DescripcionSumaAsegurada": "$2,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2550000.0",
                                  "DescripcionSumaAsegurada": "$2,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "2600000.0",
                                  "DescripcionSumaAsegurada": "$2,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "2650000.0",
                                  "DescripcionSumaAsegurada": "$2,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "2700000.0",
                                  "DescripcionSumaAsegurada": "$2,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "2750000.0",
                                  "DescripcionSumaAsegurada": "$2,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "2800000.0",
                                  "DescripcionSumaAsegurada": "$2,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "2850000.0",
                                  "DescripcionSumaAsegurada": "$2,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "2900000.0",
                                  "DescripcionSumaAsegurada": "$2,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "2950000.0",
                                  "DescripcionSumaAsegurada": "$2,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3050000.0",
                                  "DescripcionSumaAsegurada": "$3,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "3100000.0",
                                  "DescripcionSumaAsegurada": "$3,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "3150000.0",
                                  "DescripcionSumaAsegurada": "$3,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "3200000.0",
                                  "DescripcionSumaAsegurada": "$3,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "3250000.0",
                                  "DescripcionSumaAsegurada": "$3,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "3300000.0",
                                  "DescripcionSumaAsegurada": "$3,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "3350000.0",
                                  "DescripcionSumaAsegurada": "$3,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "3400000.0",
                                  "DescripcionSumaAsegurada": "$3,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "3450000.0",
                                  "DescripcionSumaAsegurada": "$3,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3550000.0",
                                  "DescripcionSumaAsegurada": "$3,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "3600000.0",
                                  "DescripcionSumaAsegurada": "$3,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "3650000.0",
                                  "DescripcionSumaAsegurada": "$3,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "3700000.0",
                                  "DescripcionSumaAsegurada": "$3,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "3750000.0",
                                  "DescripcionSumaAsegurada": "$3,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "3800000.0",
                                  "DescripcionSumaAsegurada": "$3,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "3850000.0",
                                  "DescripcionSumaAsegurada": "$3,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "3900000.0",
                                  "DescripcionSumaAsegurada": "$3,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "3950000.0",
                                  "DescripcionSumaAsegurada": "$3,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4050000.0",
                                  "DescripcionSumaAsegurada": "$4,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "4100000.0",
                                  "DescripcionSumaAsegurada": "$4,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "4150000.0",
                                  "DescripcionSumaAsegurada": "$4,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "4200000.0",
                                  "DescripcionSumaAsegurada": "$4,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "4250000.0",
                                  "DescripcionSumaAsegurada": "$4,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "4300000.0",
                                  "DescripcionSumaAsegurada": "$4,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "4350000.0",
                                  "DescripcionSumaAsegurada": "$4,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "4400000.0",
                                  "DescripcionSumaAsegurada": "$4,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "4450000.0",
                                  "DescripcionSumaAsegurada": "$4,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4550000.0",
                                  "DescripcionSumaAsegurada": "$4,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "4600000.0",
                                  "DescripcionSumaAsegurada": "$4,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "4650000.0",
                                  "DescripcionSumaAsegurada": "$4,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "4700000.0",
                                  "DescripcionSumaAsegurada": "$4,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "4750000.0",
                                  "DescripcionSumaAsegurada": "$4,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "4800000.0",
                                  "DescripcionSumaAsegurada": "$4,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "4850000.0",
                                  "DescripcionSumaAsegurada": "$4,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "4900000.0",
                                  "DescripcionSumaAsegurada": "$4,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "4950000.0",
                                  "DescripcionSumaAsegurada": "$4,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "5843",
                  "Clave": "645",
                  "Descripcion": "Beneficios Servicios Satelitales",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "Totales": {
          "PrimaNeta": "7212.33386344444",
          "Descuento": "0.0",
          "Financiamiento": "0.0",
          "DerechoPoliza": "690.0",
          "IVA": "1264.3734181511104",
          "PrimaTotal": "9166.70728159555"
      },
      "Recibos": {
          "PrimeraExhibicion": "9166.70728159555",
          "RecibosSubsecuentes": "0",
          "Importe": "0.0"
      },
      "Ajuste": {
          "PorcentajeAjuste": "0.0",
          "TipoAjuste": "4613"
      }
  },
  {
      "Clave": "25",
      "Descripcion": "BASICO PICK UPS",
      "Vigencia": {
          "Inicial": "2023-12-24T00:00:00",
          "Final": "2024-12-24T00:00:00"
      },
      "CoberturasObligatorias": {
          "Cobertura": [
              {
                  "Regla": "361",
                  "Clave": "235",
                  "Descripcion": "Accidentes Automovilísticos al Conductor",
                  "SumaAsegurada": "100000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "100.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "100000.0",
                                  "DescripcionSumaAsegurada": "$100,000.00"
                              },
                              {
                                  "SumaAsegurada": "200000.0",
                                  "DescripcionSumaAsegurada": "$200,000.00"
                              },
                              {
                                  "SumaAsegurada": "300000.0",
                                  "DescripcionSumaAsegurada": "$300,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "362",
                  "Clave": "242",
                  "Descripcion": "Asistencia jurídica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "27434",
                  "PrimaNeta": "333.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "393",
                  "Clave": "253",
                  "Descripcion": "Responsabilidad Civil (Límite Único y Combinado)",
                  "SumaAsegurada": "1500000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "Deducibles": {
                      "Deducible": [
                          {
                              "Clave": "1.0",
                              "Descripcion": "0.0"
                          },
                          {
                              "Clave": "1.0",
                              "Descripcion": "1.0"
                          },
                          {
                              "Clave": "0.98703",
                              "Descripcion": "10.0"
                          },
                          {
                              "Clave": "0.966",
                              "Descripcion": "25.0"
                          },
                          {
                              "Clave": "0.9229",
                              "Descripcion": "50.0"
                          },
                          {
                              "Clave": "0.8756",
                              "Descripcion": "75.0"
                          },
                          {
                              "Clave": "0.8311",
                              "Descripcion": "100.0"
                          },
                          {
                              "Clave": "0.7341",
                              "Descripcion": "150.0"
                          }
                      ]
                  },
                  "PrimaNeta": "3644.73622423105",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "750000.0",
                                  "DescripcionSumaAsegurada": "$750,000.00"
                              },
                              {
                                  "SumaAsegurada": "800000.0",
                                  "DescripcionSumaAsegurada": "$800,000.00"
                              },
                              {
                                  "SumaAsegurada": "850000.0",
                                  "DescripcionSumaAsegurada": "$850,000.00"
                              },
                              {
                                  "SumaAsegurada": "900000.0",
                                  "DescripcionSumaAsegurada": "$900,000.00"
                              },
                              {
                                  "SumaAsegurada": "950000.0",
                                  "DescripcionSumaAsegurada": "$950,000.00"
                              },
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1050000.0",
                                  "DescripcionSumaAsegurada": "$1,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "1100000.0",
                                  "DescripcionSumaAsegurada": "$1,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "1150000.0",
                                  "DescripcionSumaAsegurada": "$1,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "1200000.0",
                                  "DescripcionSumaAsegurada": "$1,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "1250000.0",
                                  "DescripcionSumaAsegurada": "$1,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "1300000.0",
                                  "DescripcionSumaAsegurada": "$1,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "1350000.0",
                                  "DescripcionSumaAsegurada": "$1,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "1400000.0",
                                  "DescripcionSumaAsegurada": "$1,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "1450000.0",
                                  "DescripcionSumaAsegurada": "$1,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "1550000.0",
                                  "DescripcionSumaAsegurada": "$1,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "1600000.0",
                                  "DescripcionSumaAsegurada": "$1,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "1650000.0",
                                  "DescripcionSumaAsegurada": "$1,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "1700000.0",
                                  "DescripcionSumaAsegurada": "$1,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "1750000.0",
                                  "DescripcionSumaAsegurada": "$1,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "1800000.0",
                                  "DescripcionSumaAsegurada": "$1,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "1850000.0",
                                  "DescripcionSumaAsegurada": "$1,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "1900000.0",
                                  "DescripcionSumaAsegurada": "$1,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "1950000.0",
                                  "DescripcionSumaAsegurada": "$1,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2050000.0",
                                  "DescripcionSumaAsegurada": "$2,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "2100000.0",
                                  "DescripcionSumaAsegurada": "$2,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "2150000.0",
                                  "DescripcionSumaAsegurada": "$2,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "2200000.0",
                                  "DescripcionSumaAsegurada": "$2,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "2250000.0",
                                  "DescripcionSumaAsegurada": "$2,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "2300000.0",
                                  "DescripcionSumaAsegurada": "$2,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "2350000.0",
                                  "DescripcionSumaAsegurada": "$2,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "2400000.0",
                                  "DescripcionSumaAsegurada": "$2,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "2450000.0",
                                  "DescripcionSumaAsegurada": "$2,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2550000.0",
                                  "DescripcionSumaAsegurada": "$2,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "2600000.0",
                                  "DescripcionSumaAsegurada": "$2,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "2650000.0",
                                  "DescripcionSumaAsegurada": "$2,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "2700000.0",
                                  "DescripcionSumaAsegurada": "$2,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "2750000.0",
                                  "DescripcionSumaAsegurada": "$2,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "2800000.0",
                                  "DescripcionSumaAsegurada": "$2,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "2850000.0",
                                  "DescripcionSumaAsegurada": "$2,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "2900000.0",
                                  "DescripcionSumaAsegurada": "$2,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "2950000.0",
                                  "DescripcionSumaAsegurada": "$2,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3050000.0",
                                  "DescripcionSumaAsegurada": "$3,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "3100000.0",
                                  "DescripcionSumaAsegurada": "$3,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "3150000.0",
                                  "DescripcionSumaAsegurada": "$3,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "3200000.0",
                                  "DescripcionSumaAsegurada": "$3,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "3250000.0",
                                  "DescripcionSumaAsegurada": "$3,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "3300000.0",
                                  "DescripcionSumaAsegurada": "$3,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "3350000.0",
                                  "DescripcionSumaAsegurada": "$3,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "3400000.0",
                                  "DescripcionSumaAsegurada": "$3,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "3450000.0",
                                  "DescripcionSumaAsegurada": "$3,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3550000.0",
                                  "DescripcionSumaAsegurada": "$3,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "3600000.0",
                                  "DescripcionSumaAsegurada": "$3,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "3650000.0",
                                  "DescripcionSumaAsegurada": "$3,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "3700000.0",
                                  "DescripcionSumaAsegurada": "$3,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "3750000.0",
                                  "DescripcionSumaAsegurada": "$3,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "3800000.0",
                                  "DescripcionSumaAsegurada": "$3,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "3850000.0",
                                  "DescripcionSumaAsegurada": "$3,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "3900000.0",
                                  "DescripcionSumaAsegurada": "$3,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "3950000.0",
                                  "DescripcionSumaAsegurada": "$3,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4050000.0",
                                  "DescripcionSumaAsegurada": "$4,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "4100000.0",
                                  "DescripcionSumaAsegurada": "$4,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "4150000.0",
                                  "DescripcionSumaAsegurada": "$4,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "4200000.0",
                                  "DescripcionSumaAsegurada": "$4,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "4250000.0",
                                  "DescripcionSumaAsegurada": "$4,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "4300000.0",
                                  "DescripcionSumaAsegurada": "$4,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "4350000.0",
                                  "DescripcionSumaAsegurada": "$4,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "4400000.0",
                                  "DescripcionSumaAsegurada": "$4,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "4450000.0",
                                  "DescripcionSumaAsegurada": "$4,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4550000.0",
                                  "DescripcionSumaAsegurada": "$4,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "4600000.0",
                                  "DescripcionSumaAsegurada": "$4,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "4650000.0",
                                  "DescripcionSumaAsegurada": "$4,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "4700000.0",
                                  "DescripcionSumaAsegurada": "$4,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "4750000.0",
                                  "DescripcionSumaAsegurada": "$4,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "4800000.0",
                                  "DescripcionSumaAsegurada": "$4,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "4850000.0",
                                  "DescripcionSumaAsegurada": "$4,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "4900000.0",
                                  "DescripcionSumaAsegurada": "$4,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "4950000.0",
                                  "DescripcionSumaAsegurada": "$4,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "CoberturasObligatoriasOpcionales": {
          "Cobertura": [
              {
                  "Regla": "292",
                  "Clave": "239",
                  "Descripcion": "Gastos Médicos Ocupantes (Límite Único Combinado)",
                  "SumaAsegurada": "20000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "281.533445511183",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "20000.0",
                                  "DescripcionSumaAsegurada": "$20,000.00"
                              },
                              {
                                  "SumaAsegurada": "25000.0",
                                  "DescripcionSumaAsegurada": "$25,000.00"
                              },
                              {
                                  "SumaAsegurada": "30000.0",
                                  "DescripcionSumaAsegurada": "$30,000.00"
                              },
                              {
                                  "SumaAsegurada": "35000.0",
                                  "DescripcionSumaAsegurada": "$35,000.00"
                              },
                              {
                                  "SumaAsegurada": "40000.0",
                                  "DescripcionSumaAsegurada": "$40,000.00"
                              },
                              {
                                  "SumaAsegurada": "45000.0",
                                  "DescripcionSumaAsegurada": "$45,000.00"
                              },
                              {
                                  "SumaAsegurada": "50000.0",
                                  "DescripcionSumaAsegurada": "$50,000.00"
                              },
                              {
                                  "SumaAsegurada": "55000.0",
                                  "DescripcionSumaAsegurada": "$55,000.00"
                              },
                              {
                                  "SumaAsegurada": "60000.0",
                                  "DescripcionSumaAsegurada": "$60,000.00"
                              },
                              {
                                  "SumaAsegurada": "65000.0",
                                  "DescripcionSumaAsegurada": "$65,000.00"
                              },
                              {
                                  "SumaAsegurada": "70000.0",
                                  "DescripcionSumaAsegurada": "$70,000.00"
                              },
                              {
                                  "SumaAsegurada": "75000.0",
                                  "DescripcionSumaAsegurada": "$75,000.00"
                              },
                              {
                                  "SumaAsegurada": "80000.0",
                                  "DescripcionSumaAsegurada": "$80,000.00"
                              },
                              {
                                  "SumaAsegurada": "85000.0",
                                  "DescripcionSumaAsegurada": "$85,000.00"
                              },
                              {
                                  "SumaAsegurada": "90000.0",
                                  "DescripcionSumaAsegurada": "$90,000.00"
                              },
                              {
                                  "SumaAsegurada": "95000.0",
                                  "DescripcionSumaAsegurada": "$95,000.00"
                              },
                              {
                                  "SumaAsegurada": "100000.0",
                                  "DescripcionSumaAsegurada": "$100,000.00"
                              },
                              {
                                  "SumaAsegurada": "105000.0",
                                  "DescripcionSumaAsegurada": "$105,000.00"
                              },
                              {
                                  "SumaAsegurada": "110000.0",
                                  "DescripcionSumaAsegurada": "$110,000.00"
                              },
                              {
                                  "SumaAsegurada": "115000.0",
                                  "DescripcionSumaAsegurada": "$115,000.00"
                              },
                              {
                                  "SumaAsegurada": "120000.0",
                                  "DescripcionSumaAsegurada": "$120,000.00"
                              },
                              {
                                  "SumaAsegurada": "125000.0",
                                  "DescripcionSumaAsegurada": "$125,000.00"
                              },
                              {
                                  "SumaAsegurada": "130000.0",
                                  "DescripcionSumaAsegurada": "$130,000.00"
                              },
                              {
                                  "SumaAsegurada": "135000.0",
                                  "DescripcionSumaAsegurada": "$135,000.00"
                              },
                              {
                                  "SumaAsegurada": "140000.0",
                                  "DescripcionSumaAsegurada": "$140,000.00"
                              },
                              {
                                  "SumaAsegurada": "145000.0",
                                  "DescripcionSumaAsegurada": "$145,000.00"
                              },
                              {
                                  "SumaAsegurada": "150000.0",
                                  "DescripcionSumaAsegurada": "$150,000.00"
                              },
                              {
                                  "SumaAsegurada": "155000.0",
                                  "DescripcionSumaAsegurada": "$155,000.00"
                              },
                              {
                                  "SumaAsegurada": "160000.0",
                                  "DescripcionSumaAsegurada": "$160,000.00"
                              },
                              {
                                  "SumaAsegurada": "165000.0",
                                  "DescripcionSumaAsegurada": "$165,000.00"
                              },
                              {
                                  "SumaAsegurada": "170000.0",
                                  "DescripcionSumaAsegurada": "$170,000.00"
                              },
                              {
                                  "SumaAsegurada": "175000.0",
                                  "DescripcionSumaAsegurada": "$175,000.00"
                              },
                              {
                                  "SumaAsegurada": "180000.0",
                                  "DescripcionSumaAsegurada": "$180,000.00"
                              },
                              {
                                  "SumaAsegurada": "185000.0",
                                  "DescripcionSumaAsegurada": "$185,000.00"
                              },
                              {
                                  "SumaAsegurada": "190000.0",
                                  "DescripcionSumaAsegurada": "$190,000.00"
                              },
                              {
                                  "SumaAsegurada": "195000.0",
                                  "DescripcionSumaAsegurada": "$195,000.00"
                              },
                              {
                                  "SumaAsegurada": "200000.0",
                                  "DescripcionSumaAsegurada": "$200,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "2806",
                  "Clave": "249",
                  "Descripcion": "Asistencia en viajes",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "27434",
                  "PrimaNeta": "420.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "398",
                  "Clave": "267",
                  "Descripcion": "Responsabilidad Civil Familiar",
                  "SumaAsegurada": "100000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "41.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "100000.0",
                              "DescripcionSumaAsegurada": "$100,000.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "322",
                  "Clave": "269",
                  "Descripcion": "Asistencia Médica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "27434",
                  "PrimaNeta": "41.0",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "Amparada"
                          }
                      },
                      "TipoListado": {
                          "Clave": "1",
                          "Descripcion": "UnicoValor"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "7001",
                  "Clave": "366",
                  "Descripcion": "Responsabilidad Civil Exceso por Muerte",
                  "SumaAsegurada": "2000000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "503.44",
                  "Calculada": "true",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "CoberturasOpcionales": {
          "Cobertura": [
              {
                  "Regla": "2931",
                  "Clave": "266",
                  "Descripcion": "Responsabilidad USA y Canadá",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "23295",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "150000.0",
                              "DescripcionSumaAsegurada": "150 Mdll (LUC)"
                          }
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "415",
                  "Clave": "341",
                  "Descripcion": "Responsabilidad civil ecológica",
                  "SumaAsegurada": "0.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": {
                              "SumaAsegurada": "0.0",
                              "DescripcionSumaAsegurada": "$0.00"
                          }
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "689",
                  "Clave": "355",
                  "Descripcion": "Responsabilidad Civil por daños a los Ocupantes",
                  "SumaAsegurada": "350000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "350000.0",
                                  "DescripcionSumaAsegurada": "$350,000.00"
                              },
                              {
                                  "SumaAsegurada": "400000.0",
                                  "DescripcionSumaAsegurada": "$400,000.00"
                              },
                              {
                                  "SumaAsegurada": "450000.0",
                                  "DescripcionSumaAsegurada": "$450,000.00"
                              },
                              {
                                  "SumaAsegurada": "500000.0",
                                  "DescripcionSumaAsegurada": "$500,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              },
              {
                  "Regla": "6200",
                  "Clave": "641",
                  "Descripcion": "Responsabilidad Civil Cruzada",
                  "SumaAsegurada": "750000.0",
                  "Deducible": "0.0",
                  "ProveedorAsistencia": "0",
                  "PrimaNeta": "0.0",
                  "Calculada": "false",
                  "InformacionSumasAseguradas": {
                      "ListaSumaAsegurada": {
                          "ValorSumaAsegurada": [
                              {
                                  "SumaAsegurada": "750000.0",
                                  "DescripcionSumaAsegurada": "$750,000.00"
                              },
                              {
                                  "SumaAsegurada": "800000.0",
                                  "DescripcionSumaAsegurada": "$800,000.00"
                              },
                              {
                                  "SumaAsegurada": "850000.0",
                                  "DescripcionSumaAsegurada": "$850,000.00"
                              },
                              {
                                  "SumaAsegurada": "900000.0",
                                  "DescripcionSumaAsegurada": "$900,000.00"
                              },
                              {
                                  "SumaAsegurada": "950000.0",
                                  "DescripcionSumaAsegurada": "$950,000.00"
                              },
                              {
                                  "SumaAsegurada": "1000000.0",
                                  "DescripcionSumaAsegurada": "$1,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "1050000.0",
                                  "DescripcionSumaAsegurada": "$1,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "1100000.0",
                                  "DescripcionSumaAsegurada": "$1,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "1150000.0",
                                  "DescripcionSumaAsegurada": "$1,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "1200000.0",
                                  "DescripcionSumaAsegurada": "$1,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "1250000.0",
                                  "DescripcionSumaAsegurada": "$1,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "1300000.0",
                                  "DescripcionSumaAsegurada": "$1,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "1350000.0",
                                  "DescripcionSumaAsegurada": "$1,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "1400000.0",
                                  "DescripcionSumaAsegurada": "$1,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "1450000.0",
                                  "DescripcionSumaAsegurada": "$1,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "1500000.0",
                                  "DescripcionSumaAsegurada": "$1,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "1550000.0",
                                  "DescripcionSumaAsegurada": "$1,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "1600000.0",
                                  "DescripcionSumaAsegurada": "$1,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "1650000.0",
                                  "DescripcionSumaAsegurada": "$1,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "1700000.0",
                                  "DescripcionSumaAsegurada": "$1,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "1750000.0",
                                  "DescripcionSumaAsegurada": "$1,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "1800000.0",
                                  "DescripcionSumaAsegurada": "$1,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "1850000.0",
                                  "DescripcionSumaAsegurada": "$1,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "1900000.0",
                                  "DescripcionSumaAsegurada": "$1,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "1950000.0",
                                  "DescripcionSumaAsegurada": "$1,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "2000000.0",
                                  "DescripcionSumaAsegurada": "$2,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "2050000.0",
                                  "DescripcionSumaAsegurada": "$2,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "2100000.0",
                                  "DescripcionSumaAsegurada": "$2,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "2150000.0",
                                  "DescripcionSumaAsegurada": "$2,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "2200000.0",
                                  "DescripcionSumaAsegurada": "$2,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "2250000.0",
                                  "DescripcionSumaAsegurada": "$2,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "2300000.0",
                                  "DescripcionSumaAsegurada": "$2,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "2350000.0",
                                  "DescripcionSumaAsegurada": "$2,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "2400000.0",
                                  "DescripcionSumaAsegurada": "$2,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "2450000.0",
                                  "DescripcionSumaAsegurada": "$2,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "2500000.0",
                                  "DescripcionSumaAsegurada": "$2,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "2550000.0",
                                  "DescripcionSumaAsegurada": "$2,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "2600000.0",
                                  "DescripcionSumaAsegurada": "$2,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "2650000.0",
                                  "DescripcionSumaAsegurada": "$2,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "2700000.0",
                                  "DescripcionSumaAsegurada": "$2,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "2750000.0",
                                  "DescripcionSumaAsegurada": "$2,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "2800000.0",
                                  "DescripcionSumaAsegurada": "$2,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "2850000.0",
                                  "DescripcionSumaAsegurada": "$2,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "2900000.0",
                                  "DescripcionSumaAsegurada": "$2,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "2950000.0",
                                  "DescripcionSumaAsegurada": "$2,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "3000000.0",
                                  "DescripcionSumaAsegurada": "$3,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "3050000.0",
                                  "DescripcionSumaAsegurada": "$3,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "3100000.0",
                                  "DescripcionSumaAsegurada": "$3,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "3150000.0",
                                  "DescripcionSumaAsegurada": "$3,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "3200000.0",
                                  "DescripcionSumaAsegurada": "$3,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "3250000.0",
                                  "DescripcionSumaAsegurada": "$3,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "3300000.0",
                                  "DescripcionSumaAsegurada": "$3,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "3350000.0",
                                  "DescripcionSumaAsegurada": "$3,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "3400000.0",
                                  "DescripcionSumaAsegurada": "$3,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "3450000.0",
                                  "DescripcionSumaAsegurada": "$3,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "3500000.0",
                                  "DescripcionSumaAsegurada": "$3,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "3550000.0",
                                  "DescripcionSumaAsegurada": "$3,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "3600000.0",
                                  "DescripcionSumaAsegurada": "$3,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "3650000.0",
                                  "DescripcionSumaAsegurada": "$3,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "3700000.0",
                                  "DescripcionSumaAsegurada": "$3,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "3750000.0",
                                  "DescripcionSumaAsegurada": "$3,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "3800000.0",
                                  "DescripcionSumaAsegurada": "$3,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "3850000.0",
                                  "DescripcionSumaAsegurada": "$3,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "3900000.0",
                                  "DescripcionSumaAsegurada": "$3,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "3950000.0",
                                  "DescripcionSumaAsegurada": "$3,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "4000000.0",
                                  "DescripcionSumaAsegurada": "$4,000,000.00"
                              },
                              {
                                  "SumaAsegurada": "4050000.0",
                                  "DescripcionSumaAsegurada": "$4,050,000.00"
                              },
                              {
                                  "SumaAsegurada": "4100000.0",
                                  "DescripcionSumaAsegurada": "$4,100,000.00"
                              },
                              {
                                  "SumaAsegurada": "4150000.0",
                                  "DescripcionSumaAsegurada": "$4,150,000.00"
                              },
                              {
                                  "SumaAsegurada": "4200000.0",
                                  "DescripcionSumaAsegurada": "$4,200,000.00"
                              },
                              {
                                  "SumaAsegurada": "4250000.0",
                                  "DescripcionSumaAsegurada": "$4,250,000.00"
                              },
                              {
                                  "SumaAsegurada": "4300000.0",
                                  "DescripcionSumaAsegurada": "$4,300,000.00"
                              },
                              {
                                  "SumaAsegurada": "4350000.0",
                                  "DescripcionSumaAsegurada": "$4,350,000.00"
                              },
                              {
                                  "SumaAsegurada": "4400000.0",
                                  "DescripcionSumaAsegurada": "$4,400,000.00"
                              },
                              {
                                  "SumaAsegurada": "4450000.0",
                                  "DescripcionSumaAsegurada": "$4,450,000.00"
                              },
                              {
                                  "SumaAsegurada": "4500000.0",
                                  "DescripcionSumaAsegurada": "$4,500,000.00"
                              },
                              {
                                  "SumaAsegurada": "4550000.0",
                                  "DescripcionSumaAsegurada": "$4,550,000.00"
                              },
                              {
                                  "SumaAsegurada": "4600000.0",
                                  "DescripcionSumaAsegurada": "$4,600,000.00"
                              },
                              {
                                  "SumaAsegurada": "4650000.0",
                                  "DescripcionSumaAsegurada": "$4,650,000.00"
                              },
                              {
                                  "SumaAsegurada": "4700000.0",
                                  "DescripcionSumaAsegurada": "$4,700,000.00"
                              },
                              {
                                  "SumaAsegurada": "4750000.0",
                                  "DescripcionSumaAsegurada": "$4,750,000.00"
                              },
                              {
                                  "SumaAsegurada": "4800000.0",
                                  "DescripcionSumaAsegurada": "$4,800,000.00"
                              },
                              {
                                  "SumaAsegurada": "4850000.0",
                                  "DescripcionSumaAsegurada": "$4,850,000.00"
                              },
                              {
                                  "SumaAsegurada": "4900000.0",
                                  "DescripcionSumaAsegurada": "$4,900,000.00"
                              },
                              {
                                  "SumaAsegurada": "4950000.0",
                                  "DescripcionSumaAsegurada": "$4,950,000.00"
                              },
                              {
                                  "SumaAsegurada": "5000000.0",
                                  "DescripcionSumaAsegurada": "$5,000,000.00"
                              }
                          ]
                      },
                      "TipoListado": {
                          "Clave": "2",
                          "Descripcion": "Listado"
                      },
                      "SumaAseguradaMinima": "0.0",
                      "SumaAseguradaMaxima": "0.0"
                  }
              }
          ]
      },
      "Totales": {
          "PrimaNeta": "5364.70966974223",
          "Descuento": "0.0",
          "Financiamiento": "0.0",
          "DerechoPoliza": "690.0",
          "IVA": "968.7535471587568",
          "PrimaTotal": "7023.4632169009865"
      },
      "Recibos": {
          "PrimeraExhibicion": "7023.4632169009865",
          "RecibosSubsecuentes": "0",
          "Importe": "0.0"
      },
      "Ajuste": {
          "PorcentajeAjuste": "0.0",
          "TipoAjuste": "4613"
      }
  }
  ]
  // Obtén el contenedor donde quieres agregar las tarjetas
  var contenedor = document.getElementById("contactForm");
  contenedor.innerHTML = ''
  // Recorre el arreglo y crea una tarjeta para cada elemento
paqueteCoberturas.forEach(function (cobertura, index) {
  // Crea un elemento div para la tarjeta
  var cardContainer = document.createElement("div");
  cardContainer.className = 'row'
  var cardDiv = document.createElement("div");
  cardDiv.className = 'col-sm-6 mb-3 mb-sm-0'
  var cardElement = document.createElement("div");
  cardElement.className = "card"; // Aplica la clase 'card' de Bootstrap, un margen de 2 y especifica 3 columnas en pantallas medianas

  // Construye el contenido de la tarjeta
  var cardContent = `
    <div class="card-body">
      <h5 class="card-title">${cobertura.Descripcion}</h5>
      <p class="card-text">${cobertura.contenido}</p>
    </div>
  `;

  // asignas cada card al row
  cardContainer.appendChild(cardDiv)
  cardDiv.appendChild(cardElement)
  // Asigna el contenido al elemento de la tarjeta
  cardElement.innerHTML = cardContent;

  // Agrega la tarjeta al contenedor
  contenedor.appendChild(cardContainer);

  // Agrega un salto de línea después de cada 4 tarjetas para dispositivos grandes
  if ((index + 1) % 4 === 0 && window.innerWidth >= 992) {
    contenedor.appendChild(document.createElement("br"));
  }
});
}


export interface EnergyDetails  {
    quantityEnergy?: string;
    priceEnergy?: string;
    unityTariffEnergy?: string;
  
    amountOfEnergyInject?: string;
    priceOfEnergyInject?: string;
    unityTariffOfEnergyInject?: string;
  };
  
  export interface IcmsDetails  {
    amountIcms?: string;
    priceIcms?: string;
    unityIcms?: string;
  };
  
  export interface GdiDetails  {
    amountGDI?: string;
    priceGDI?: string;
    unityGDI?: string;
  };
  
  export interface InvoiceProps  {
    userId: string;
    installationNumber: string;
    monthReferring: string;
    expirationDate: string;
    amountToBePaid: string;
    publicContribution: string;
    path: string;
  
    energyDetails?: EnergyDetails;
    icmsDetails?: IcmsDetails;
    gdiDetails?: GdiDetails;
  };


  export interface InvoiceEnergia {
    name:string;
    kwhgdi:number;
    kwhenergia:number;
    kwhenergejetada:number
    kwhenergiaICMS:number;
   };
 
export interface DashBoardDTO {
    electricPowerConsumption: number;
    compensatedEnergy: number;
    totalValueWithoutGD: number;
    economiaGD: number;
    invoicesEnergia:InvoiceEnergia[];
}
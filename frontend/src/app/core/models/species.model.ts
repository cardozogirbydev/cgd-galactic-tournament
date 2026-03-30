export interface SpeciesRequest {
  name:string;
  powerLevel:number;
  specialAbility:string;
}

export interface SpeciesResponse {
  id:number;
  name:string;
  powerLevel:number;
  specialAbility:string;
  victories:number;
}